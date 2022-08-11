import {AxiosInstance} from 'axios'
import {ICloudConfig} from './cloud-config'
import {IConfig} from './config'

export interface IOpenscreenSession {
  debugConfig: boolean
  debugAuth: boolean
  debugRequest: boolean
  debugResponse: boolean
  debugError: boolean
  debugQuery: boolean
  debugOptions: boolean
  exp: number

  getConfig(): IConfig

  getCloudConfig(): Promise<ICloudConfig>

  getAxios(): Promise<AxiosInstance>

  authorize(): Promise<void>
}
