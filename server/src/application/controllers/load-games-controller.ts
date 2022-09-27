import { ok } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { LoadGames } from '@/domain/use-cases'
import { HTTPResponse } from '@/application/protocols'

export class LoadGamesController extends Controller {
  constructor (private readonly loadGames: LoadGames) {
    super()
  }

  async perform (_: any): Promise<HTTPResponse> {
    const games = await this.loadGames.execute()
    return ok(games)
  }
}
