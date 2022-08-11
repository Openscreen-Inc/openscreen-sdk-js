import {IOpenscreenSession} from './openscreen-session'

export class Resources {
  protected session: IOpenscreenSession
  protected pathParameters: any

  constructor(session: IOpenscreenSession, pathParameters: any) {
    this.session = session
    this.pathParameters = pathParameters
  }

  self() {
    return this
  }

  getSession(): IOpenscreenSession {
    return this.session
  }
}

export class Resource {
  protected session: IOpenscreenSession
  protected pathParameters: any
  protected id?: string

  constructor(session: IOpenscreenSession, pathParameters: any) {
    this.session = session
    this.pathParameters = pathParameters
  }

  getSession(): IOpenscreenSession {
    return this.session
  }
}
