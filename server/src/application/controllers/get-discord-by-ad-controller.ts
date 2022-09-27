import { ok } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { GetDiscordByAd } from '@/domain/use-cases'
import { HTTPResponse } from '@/application/protocols'

type Request = { id: string }

export class GetDiscordByAdController extends Controller {
  constructor (private readonly getDiscordByAd: GetDiscordByAd) {
    super()
  }

  async perform (request: Request): Promise<HTTPResponse> {
    const discord = await this.getDiscordByAd.execute(request)
    return ok(discord)
  }
}
