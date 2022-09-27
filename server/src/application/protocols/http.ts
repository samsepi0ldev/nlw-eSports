export interface HTTPResponse<T = any> {
  statusCode: number
  data: T
}

export enum StatusCode {
  OK = 200,
  Created = 201,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  InternalServerError = 500
}
