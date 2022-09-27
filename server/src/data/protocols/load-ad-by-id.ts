import { AdModel } from '@/domain/models'

export interface LoadAdByIdRepository {
  loadById: (input: LoadAdByIdRepository.Input) => Promise<LoadAdByIdRepository.Output>
}

export namespace LoadAdByIdRepository {
  export type Input = { id: string }
  export type Output = AdModel
}
