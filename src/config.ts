import {ICloudConfig} from './cloud-config'

export interface IConfig {
  key: string
  secret: string
  environment?: string | ICloudConfig
}
