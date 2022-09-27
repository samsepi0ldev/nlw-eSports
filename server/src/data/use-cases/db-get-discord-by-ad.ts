import { GetDiscordByAd } from '@/domain/use-cases'
import { LoadAdByIdRepository } from '@/data/protocols'

export class DbGetDiscordByAd implements GetDiscordByAd {
  constructor (private readonly loadAdByIdRepository: LoadAdByIdRepository) {}

  async execute (input: GetDiscordByAd.Input): Promise<GetDiscordByAd.Output> {
    const { discord } = await this.loadAdByIdRepository.loadById(input)
    return { discord }
  }
}
