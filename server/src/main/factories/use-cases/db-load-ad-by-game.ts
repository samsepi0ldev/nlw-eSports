import { PrismaAdRepository, PrismaGameRepository } from '@/infra/db'
import { LoadAdByGame } from '@/domain/use-cases'
import { DbLoadAdByGame } from '@/data/use-cases'

export const makeDbLoadAdByGame = (): LoadAdByGame => {
  const gameRepository = new PrismaGameRepository()
  const adRepository = new PrismaAdRepository()
  return new DbLoadAdByGame(gameRepository, adRepository)
}
