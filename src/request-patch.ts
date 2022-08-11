/* eslint-disable no-console */
import {Request} from './request'

export class RequestPatch<PathParameters, QueryParameters, RequestBody, ResponseBody> extends Request {
  async go(
    pathParameters: PathParameters,
    queryParameters?: QueryParameters,
    body?: RequestBody,
    options?: Object,
  ): Promise<ResponseBody> {
    try {
      const url = await this.makeUri(pathParameters)
      await this.session.authorize()
      this.debugRequest('patch', url, queryParameters, body, options)
      const axios = await this.session.getAxios()
      const response = await axios.patch(url, body, {params: queryParameters, ...options})
      this.debugResponse(response)
      return response.data! as ResponseBody
    } catch (err) {
      throw this.handleAndDebugErr(err)
    }
  }
}
