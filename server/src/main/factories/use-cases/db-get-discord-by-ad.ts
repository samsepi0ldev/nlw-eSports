import { PrismaAdRepository } from '@/infra/db'
import { DbGetDiscordByAd } from '@/data/use-cases'

export const makeDbGetDiscordByAd = (): DbGetDiscordByAd => {
  const adRepository = new PrismaAdRepository()
  return new DbGetDiscordByAd(adRepository)
}
