import { DbCreateAd } from '@/data/use-cases'
import { PrismaAdRepository } from '@/infra/db'

export const makeDbCreateAd = (): DbCreateAd => {
  const adRepository = new PrismaAdRepository()
  return new DbCreateAd(adRepository)
}
