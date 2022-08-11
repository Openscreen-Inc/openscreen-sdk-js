/* eslint-disable no-console, import/no-cycle */
import {IOpenscreenSession} from './openscreen-session'

export interface RequestRouteSegment {
  parm?: string
  routePart: string
  sdkPartName: string
}

export class Request {
  session: IOpenscreenSession
  routeSegments?: RequestRouteSegment[]

  constructor(session: IOpenscreenSession) {
    this.session = session
  }

  async makeUri(pathParameters: any = {}) {
    const cloudConfig = await this.session.getCloudConfig()
    const urlParts: string[] = [cloudConfig.endpoint.replace(/\/+$/, '')]
    this.routeSegments!.forEach((segment) => {
      urlParts.push(segment.routePart)
      if (segment.parm) {
        const value = pathParameters[segment.parm!]
        if (!value) {
          throw Error(`Openscreen: missing path parameter value for '${segment.parm!}'`)
        }
        urlParts.push(value)
      }
    })
    return urlParts.join('/')
  }

  debugRequest(method: string, url: string, queryParameters?: any, body?: any, options?: any) {
    if (this.session.debugRequest) {
      console.debug(`Openscreen REQUEST: ${method.toUpperCase()} ${url}`)
      if (body) console.debug(`Openscreen REQUEST: ${JSON.stringify(body, null, 2)}`)
      if (queryParameters && this.session.debugQuery) {
        console.debug(`Openscreen QUERY: ${JSON.stringify(queryParameters, null, 2)}`)
      }
      if (options && this.session.debugOptions) {
        console.debug(`Openscreen OPTIONS: ${JSON.stringify(options, null, 2)}`)
      }
    }
  }

  debugResponse(response: any) {
    if (this.session.debugResponse) {
      console.debug(`Openscreen RESPONSE: ${JSON.stringify(response.data || {}, null, 2)}`)
    }
  }

  handleAndDebugErr(err: any): any {
    if (err.response && err.response.data) {
      if (this.session.debugError) {
        console.error(`Openscreen ERROR: ${JSON.stringify(err.response.data, null, 2)}`)
      } else if (this.session.debugResponse) {
        console.error(`Openscreen RESPONSE: ${JSON.stringify(err.response.data, null, 2)}`)
      }
      return err.response.data
    }
    if (this.session.debugError) {
      try {
        console.error(err)
      } catch {
        console.error(`Openscreen: (unable to print error)`)
      }
    }
    return err
  }
}
