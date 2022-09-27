import { PrismaGameRepository } from '@/infra/db'
import { LoadGames } from '@/domain/use-cases'
import { DbLoadGames } from '@/data/use-cases'

export const makeDbLoadGames = (): LoadGames => {
  const gamesRepository = new PrismaGameRepository()
  return new DbLoadGames(gamesRepository)
}
