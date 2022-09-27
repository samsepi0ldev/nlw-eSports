import { AdModel } from '@/domain/models/'
export interface CreateAd {
  execute: (input: CreateAd.Input) => Promise<CreateAd.Output>
}

export namespace CreateAd {
  export type Input = {
    gameId: string
    name: string
    yearsPlaying: number
    discord: string
    weekDays: string
    hoursStart: string
    hoursEnd: string
    useVoiceChannel: boolean
  }
  export type Output = AdModel
}
