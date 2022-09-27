import { GamesModel } from '@/domain/models/games'

export interface LoadGames {
  execute: () => Promise<LoadGames.Output>
}

export namespace LoadGames {
  export type Output = GamesModel[]
}
