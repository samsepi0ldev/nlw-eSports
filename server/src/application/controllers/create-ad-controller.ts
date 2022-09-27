import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { created } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { HTTPResponse } from '@/application/protocols'
import { CreateAd } from '@/domain/use-cases'

type HttpRequest = {
  gameId: string
  name: string
  yearsPlaying: number
  discord: string
  weekDays: string
  hoursStart: string
  hoursEnd: string
  useVoiceChannel: boolean
}

export class CreateAdController extends Controller {
  constructor (private readonly createAd: CreateAd) {
    super()
  }

  async perform (request: HttpRequest): Promise<HTTPResponse> {
    const ad = await this.createAd.execute(request)
    return created(ad)
  }

  override buildValidators (request: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: request.gameId, fieldName: 'gameId' }).required().build(),
      ...Builder.of({ value: request.name, fieldName: 'name' }).required().build(),
      ...Builder.of({ value: request.yearsPlaying, fieldName: 'yearsPlaying' }).required().build(),
      ...Builder.of({ value: request.discord, fieldName: 'discord' }).required().build(),
      ...Builder.of({ value: request.weekDays, fieldName: 'weekDays' }).required().build(),
      ...Builder.of({ value: request.hoursStart, fieldName: 'hoursStart' }).required().build(),
      ...Builder.of({ value: request.hoursEnd, fieldName: 'hoursEnd' }).required().build(),
      ...Builder.of({ value: request.useVoiceChannel, fieldName: 'useVoiceChannel' }).required().build()
    ]
  }
}
