import { makeDbGetDiscordByAd } from '@/main/factories/use-cases'
import { GetDiscordByAdController, Controller } from '@/application/controllers'

export const makeGetDiscordByAdController = (): Controller => {
  return new GetDiscordByAdController(makeDbGetDiscordByAd())
}
