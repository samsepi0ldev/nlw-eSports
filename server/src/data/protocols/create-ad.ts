import { CreateAd } from '@/domain/use-cases'

export interface CreateAdRepository {
  create: (input: CreateAdRepository.Input) => Promise<CreateAdRepository.Output>
}

export namespace CreateAdRepository {
  export type Input = CreateAd.Input
  export type Output = CreateAd.Output
}
