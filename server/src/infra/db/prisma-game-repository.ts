import { prisma } from '@/infra/db/prisma'
import { LoadGameByIdRepository, LoadGamesRepository } from '@/data/protocols'

export class PrismaGameRepository implements LoadGamesRepository, LoadGameByIdRepository {
  async loadAll (): Promise<LoadGamesRepository.Output> {
    const games = await prisma.game.findMany({
      include: {
        _count: {
          select: {
            ads: true
          }
        }
      }
    })
    return games
  }

  async loadById (input: LoadGameByIdRepository.Input): Promise<LoadGameByIdRepository.Output> {
    const game = await prisma.game.findUnique({
      where: input
    })
    return game
  }
}
