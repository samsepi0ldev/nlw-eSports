export interface GetDiscordByAd {
  execute: (input: GetDiscordByAd.Input) => Promise<GetDiscordByAd.Output>
}

export namespace GetDiscordByAd {
  export type Input = { id: string }
  export type Output = { discord: string }
}
