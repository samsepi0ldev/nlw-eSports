import { makeDbLoadGames } from '@/main/factories/use-cases'
import { LoadGamesController, Controller } from '@/application/controllers'

export const makeLoadGamesController = (): Controller => {
  return new LoadGamesController(makeDbLoadGames())
}
