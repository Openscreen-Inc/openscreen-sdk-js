export interface IAxiosConfig {
  timeout: number
  responseType: string
  maxContentLength: number
  maxBodyLength: number
  maxRedirects: number
  decompress: boolean
}

export interface ICloudConfig {
  endpoint: string
  axios: any
}
