import { GamesModel } from '@/domain/models'

export interface LoadGameByIdRepository {
  loadById: (input: LoadGameByIdRepository.Input) => Promise<LoadGameByIdRepository.Output>
}

export namespace LoadGameByIdRepository {
  export type Input = { id: string }
  export type Output = Omit<GamesModel, '_count'> | null
}
