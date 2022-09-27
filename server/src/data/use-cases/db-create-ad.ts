import { CreateAd } from '@/domain/use-cases'
import { CreateAdRepository } from '@/data/protocols'
import { AdModel } from '@/domain/models'

export class DbCreateAd implements CreateAd {
  constructor (private readonly createAdRepository: CreateAdRepository) {}

  async execute (input: CreateAd.Input): Promise<AdModel> {
    return await this.createAdRepository.create(input)
  }
}
