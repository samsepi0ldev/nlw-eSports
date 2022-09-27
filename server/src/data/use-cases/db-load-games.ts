import { LoadGames } from '@/domain/use-cases'
import { LoadGamesRepository } from '@/data/protocols'

export class DbLoadGames implements LoadGames {
  constructor (private readonly loadGamesRepository: LoadGamesRepository) {}

  async execute (): Promise<LoadGames.Output> {
    return await this.loadGamesRepository.loadAll()
  }
}
