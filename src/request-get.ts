/* eslint-disable no-console */
import {Request} from './request'

export class RequestGet<PathParameters, QueryParameters, ResponseBody> extends Request {
  async go(pathParameters: PathParameters, queryParameters?: QueryParameters, options?: Object): Promise<ResponseBody> {
    try {
      const url = await this.makeUri(pathParameters)
      this.debugRequest('get', url, queryParameters, null, options)
      await this.session.authorize()
      const axios = await this.session.getAxios()
      const response = await axios.get(url, {params: queryParameters, ...options})
      this.debugResponse(response)
      return response.data as ResponseBody
    } catch (err) {
      throw this.handleAndDebugErr(err)
    }
  }
}
