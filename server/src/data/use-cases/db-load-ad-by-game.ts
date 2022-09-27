import { LoadAdByGame } from '@/domain/use-cases'
import { LoadAdByGameRepository, LoadGameByIdRepository } from '@/data/protocols'
import { InvalidParamError } from '@/application/errors'

export class DbLoadAdByGame implements LoadAdByGame {
  constructor (
    private readonly loadGameByIdRepository: LoadGameByIdRepository,
    private readonly loadAdByGameRepository: LoadAdByGameRepository
  ) {}

  async execute ({ gameId }: LoadAdByGame.Input): Promise<LoadAdByGame.Output> {
    const exists = await this.loadGameByIdRepository.loadById({ id: gameId })
    if (exists !== null) {
      return await this.loadAdByGameRepository.loadByGame({ gameId })
    }
    throw new InvalidParamError('gameId')
  }
}
