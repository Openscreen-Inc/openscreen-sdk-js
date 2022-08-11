import axios, {AxiosInstance} from 'axios'
import {SdkResources, ResponseQrCode} from './sdk'
import {ICloudConfig} from './cloud-config'
import {IConfig} from './config'
import {IOpenscreenSession} from './openscreen-session'
import {promises as fs} from 'fs'
import {wrapper} from 'axios-cookiejar-support'
import {CookieJar} from 'tough-cookie'
import {OpenscreenUser} from './user'

const ProdConfigurationPath = 'prod-public-mfDwrCg41rf'

async function getCloudConfig(pathToConfig: string): Promise<ICloudConfig> {
  const thisAxios = axios.create({
    baseURL: 'https://config.openscreen.com',
    timeout: 25000,
    responseType: 'json',
    maxContentLength: 10 * 1024,
    maxBodyLength: 10 * 1024,
    maxRedirects: 1,
    decompress: true,
  })
  const response = await thisAxios.get(`${pathToConfig}.json`).catch((err: {message: any}) => {
    throw new Error(`Openscreen: unable to load cloud configuration '${pathToConfig}': ${err.message}`)
  })
  const {data} = response
  return data as ICloudConfig
}

class NullSession implements IOpenscreenSession {
  public debugConfig = false
  public debugAuth = false
  public debugRequest = false
  public debugResponse = false
  public debugError = false
  public debugQuery = false
  public debugOptions = false
  public exp = 0
  getConfig(): IConfig {
    throw Error('no session')
  }

  getCloudConfig(): Promise<ICloudConfig> {
    throw Error('no session')
  }

  getAxios(): Promise<AxiosInstance> {
    throw Error('no session')
  }

  authorize(): Promise<void> {
    throw Error('no session')
  }
}

export class Openscreen extends SdkResources implements IOpenscreenSession {
  protected _config?: IConfig
  protected cloudConfigName?: string
  protected cloudConfig?: Promise<ICloudConfig>
  protected isAdministrator?: boolean
  protected activeUser?: OpenscreenUser
  protected axios?: AxiosInstance
  public debugConfig: boolean = false
  public debugAuth: boolean = false
  public debugRequest: boolean = false
  public debugResponse: boolean = false
  public debugError: boolean = false
  public debugQuery: boolean = false
  public debugOptions: boolean = false
  public exp: number

  constructor() {
    super(new NullSession(), {})
    this.exp = 0
    let {OS_DEBUG} = process.env
    if (OS_DEBUG) {
      console.log(`OS_DEBUG=${OS_DEBUG}`)
      OS_DEBUG = OS_DEBUG.toLowerCase()
      let debug
      switch (OS_DEBUG) {
        case 'all':
          this.debugConfig = true
          this.debugAuth = true
          this.debugRequest = true
          this.debugResponse = true
          this.debugError = true
          this.debugQuery = true
          this.debugOptions = true
          break
        case 'none':
        case 'off':
        case 'false':
        case '':
          this.debugConfig = false
          this.debugAuth = false
          this.debugRequest = false
          this.debugResponse = false
          this.debugError = false
          this.debugQuery = false
          this.debugOptions = false
          break
        default:
          debug = OS_DEBUG.split(',')
          this.debugConfig = debug.includes('config')
          this.debugAuth = debug.includes('auth')
          this.debugRequest = debug.includes('request')
          this.debugResponse = debug.includes('response')
          this.debugError = debug.includes('error')
          this.debugQuery = debug.includes('query')
          this.debugOptions = debug.includes('options')
          if (
            !(
              this.debugConfig ||
              this.debugAuth ||
              this.debugRequest ||
              this.debugResponse ||
              this.debugError ||
              this.debugQuery ||
              this.debugOptions
            )
          ) {
            console.warn(`Openscreen: OS_DEBUG environment var has invalid value: '${process.env.OS_DEBUG}'`)
          }
          break
      }
    }
  }

  getSession() {
    return this
  }

  config(config: IConfig): Openscreen {
    if (this._config) {
      throw Error('Openscreen: client is already configured')
    }
    if (config.key) {
      if (!config.secret) {
        throw Error('Openscreen: invalid config, secret is missing')
      }
    } else {
      throw Error('Openscreen: invalid config, provide API key and secret, or email and password')
    }
    if (typeof config.environment === 'string') {
      this.cloudConfigName = config.environment
    } else if (typeof config.environment === 'object') {
      this.cloudConfig = Promise.resolve(config.environment)
    } else {
      this.cloudConfigName = ProdConfigurationPath
    }
    // eslint-disable-next-line no-param-reassign
    this._config = config
    return this
  }

  getConfig(): IConfig {
    if (!this._config) {
      throw Error('Openscreen: client must be configured before accessing resources')
    }
    return this._config
  }

  async authorize(): Promise<void> {
    const config = this.getConfig()
    if (this.debugConfig) {
      const c = {...config}
      if (c.secret) c.secret = '*'.repeat(c.secret.length)
      console.debug(`Openscreen CONFIG: ${JSON.stringify(c, null, 2)}`)
    }
    const cloudConfig = await this.getCloudConfig()
    if (this.debugConfig) {
      console.debug(`Openscreen CONFIG: (environment) ${JSON.stringify(cloudConfig, null, 2)}`)
    }
    let key
    let secret
    key = config.key!
    secret = config.secret!
    if (this.exp > new Date().getTime()) {
      return
    } else if (this.exp !== 0) {
      //means token expired and session is not brand new
      if (this.debugAuth) console.info(`Openscreen AUTH: refreshing using axios cookie`)
      await this.getAxios()
      let res
      try {
        res = await this.axios!.post(`${cloudConfig.endpoint}/auth/session/refresh`)
      } catch (e) {
        if (e.code === 403) {
          throw Error('Openscreen AUTH: Refreshing failed due to missing refresh token, exiting')
        }
        if (e.code === 401) {
          throw Error('Openscreen AUTH: Refreshing failed due to an invalid refresh token, please re-login')
        }
        if (e.code === 500) {
          throw Error('Openscreen AUTH: Refreshing failed due to an unexpected error, exiting')
        }
      }
      if (res) {
        const {expires, user} = res.data
        if (this.debugAuth) console.info(`Openscreen AUTH: authorized '${key}' until expiry=${expires}`)
        this.exp = expires
        this.activeUser = user
        return
      }
    }
    // if code reaches here that means the exp == 0 and its a brand new session so we gotta login
    if (this.debugAuth) console.info(`Openscreen AUTH: authorizing '${key}'`)
    await this.getAxios()
    const res = await this.axios!.post(`${cloudConfig.endpoint}/auth/session`, {
      key,
      secret,
    })
    if (res.status === 403 || res.status === 500) {
      throw Error('Openscreen AUTH: authentication failed')
    }
    if (res.status === 200) {
      const {expires, user} = res.data
      this.activeUser = user
      if (this.debugAuth) console.info(`Openscreen AUTH: authorized '${key}' until expiry=${expires}`)

      this.exp = expires
    }
  }

  async getCloudConfig(): Promise<ICloudConfig> {
    if (!this.cloudConfig) {
      if (!this.cloudConfigName) {
        throw Error('Openscreen: environment name missing')
      }
      this.cloudConfig = getCloudConfig(this.cloudConfigName)
    }
    return this.cloudConfig
  }

  async getAxios(): Promise<AxiosInstance> {
    if (this.axios) return this.axios

    const cloudConfig = await this.getCloudConfig()
    const config = cloudConfig.axios || {
      timeout: 25000,
      responseType: 'json',
      maxContentLength: 1024 * 1024,
      maxBodyLength: 1024 * 1024,
      maxRedirects: 1,
      decompress: true,
      withCredentials: true,
    }
    const jar = new CookieJar()
    let client = wrapper(axios.create({jar, ...config}))
    client.defaults.headers.common['User-Agent'] = 'Node/SDK'
    this.axios = client
    return client!
  }

  async getActiveUser(): Promise<OpenscreenUser> {
    if (!this.activeUser) {
      await this.authorize()
    }
    return this.activeUser!
  }

  // eslint-disable-next-line class-methods-use-this
  async saveQrImageDataToFile(qrCode: ResponseQrCode, path?: string) {
    const format = qrCode.image.options.format.toLowerCase()
    if (format === 'png' || format === 'jpeg') {
      let binaryData: string
      if (qrCode.image.options.dataUrl) {
        binaryData = Buffer.from(qrCode.image.data.replace(/^data:image\/\w+;base64,/, ''), 'base64').toString('binary')
      } else {
        binaryData = Buffer.from(qrCode.image.data, 'base64').toString('binary')
      }
      if (!path) path = `${qrCode.qrCodeId}.${format}`
      await fs.writeFile(path, binaryData, 'binary')
    } else if (format === 'svg') {
      if (!path) path = `${qrCode.qrCodeId}.svg`
      await fs.writeFile(path, qrCode.image.data)
    } else {
      throw Error(`QR code image data was not returned in 'png' or 'svg' format`)
    }
  }
}
