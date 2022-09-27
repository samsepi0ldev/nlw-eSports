import { LoadGames } from '@/domain/use-cases'

export interface LoadGamesRepository {
  loadAll: () => Promise<LoadGamesRepository.Output>
}

export namespace LoadGamesRepository {
  export type Output = LoadGames.Output
}
