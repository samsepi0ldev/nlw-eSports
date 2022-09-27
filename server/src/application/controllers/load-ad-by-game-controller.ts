import { InvalidParamError } from '@/application/errors'
import { Controller } from '@/application/controllers'
import { HTTPResponse } from '@/application/protocols'
import { LoadAdByGame } from '@/domain/use-cases'
import { badRequest, noContent, ok, serverError } from '@/application/helpers'

type HttpRequest = { gameId: string }

export class LoadAdByGameController extends Controller {
  constructor (private readonly loadAdByGame: LoadAdByGame) {
    super()
  }

  async perform (request: HttpRequest): Promise<HTTPResponse> {
    try {
      const ads = await this.loadAdByGame.execute(request)
      return (ads.length > 0) ? ok(ads) : noContent()
    } catch (error) {
      if (error instanceof InvalidParamError) return badRequest(error)
      return serverError(error)
    }
  }
}
