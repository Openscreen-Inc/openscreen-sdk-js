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
  loginSessionRequest?: Promise<void>
  refreshSessionRequest?: Promise<void>

  getConfig(): IConfig

  getCloudConfig(): Promise<ICloudConfig>

  getAxios(): Promise<AxiosInstance>

  authorize(): Promise<void>

  loginRequest(): Promise<void>

  refreshRequest(): Promise<void>
}
