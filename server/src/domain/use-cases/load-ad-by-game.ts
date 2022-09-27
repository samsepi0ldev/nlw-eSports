export interface LoadAdByGame {
  execute: (input: LoadAdByGame.Input) => Promise<LoadAdByGame.Output>
}

export namespace LoadAdByGame {
  export type Input = { gameId: string }
  export type Output = Array<{
    id: string
    name: string
    yearsPlaying: number
    weekDays: number[]
    hoursStart: string
    hoursEnd: string
    useVoiceChannel: boolean
  }>
}
