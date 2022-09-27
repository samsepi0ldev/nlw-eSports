import { makeDbLoadAdByGame } from '@/main/factories/use-cases'
import { LoadAdByGameController, Controller } from '@/application/controllers'

export const makeLoadAdByGameController = (): Controller => {
  return new LoadAdByGameController(makeDbLoadAdByGame())
}
