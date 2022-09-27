import { Router } from 'express'

import { expressRouteAdapt as Adapt } from '@/main/adapters'
import { makeLoadGamesController } from '@/main/factories/controllers'

export default function (route: Router): void {
  route.get('/games', Adapt(makeLoadGamesController()))
}
