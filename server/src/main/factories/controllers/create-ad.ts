import { makeDbCreateAd } from '@/main/factories/use-cases'
import { CreateAdController } from '@/application/controllers'

export const makeCreateAdController = (): CreateAdController => {
  return new CreateAdController(makeDbCreateAd())
}
