import { HTTPResponse, StatusCode } from '@/application/protocols'
import { ServerError } from '@/application/errors'

export const ok = (data: any): HTTPResponse => ({
  statusCode: StatusCode.OK,
  data
})

export const created = (data: any): HTTPResponse => ({
  statusCode: StatusCode.Created,
  data
})

export const noContent = (): HTTPResponse => ({
  statusCode: StatusCode.NoContent,
  data: null
})

export const badRequest = (error: Error): HTTPResponse<Error> => ({
  statusCode: StatusCode.BadRequest,
  data: error
})

export const serverError = (error: unknown): HTTPResponse<Error> => ({
  statusCode: StatusCode.InternalServerError,
  data: new ServerError(error instanceof Error ? error : undefined)
})
