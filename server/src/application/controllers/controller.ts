import { HTTPResponse } from '@/application/protocols'
import { ValidationComposite, Validator } from '@/application/validation'
import { badRequest, serverError } from '@/application/helpers'

export abstract class Controller {
  abstract perform (HTTPRequest: any): Promise<HTTPResponse>

  buildValidators (HTTPRequest: any): Validator[] {
    return []
  }

  async handle (HTTPRequest: any): Promise<HTTPResponse> {
    const error = this.validate(HTTPRequest)
    if (error !== undefined) return badRequest(error)
    try {
      return await this.perform(HTTPRequest)
    } catch (error) {
      return serverError(error)
    }
  }

  private validate (HTTPRequest: any): Error | undefined {
    const validators = this.buildValidators(HTTPRequest)
    return new ValidationComposite(validators).validate()
  }
}
