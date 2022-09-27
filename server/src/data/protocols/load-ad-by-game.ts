import { LoadAdByGame } from '@/domain/use-cases'

export interface LoadAdByGameRepository {
  loadByGame: (input: LoadAdByGameRepository.Input) => Promise<LoadAdByGameRepository.Output>
}

export namespace LoadAdByGameRepository {
  export type Input = LoadAdByGame.Input
  export type Output = LoadAdByGame.Output
}
