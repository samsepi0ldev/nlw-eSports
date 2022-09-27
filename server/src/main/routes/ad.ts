import { Router } from 'express'

import { expressRouteAdapt as Adapt } from '@/main/adapters'
import { makeCreateAdController, makeLoadAdByGameController, makeGetDiscordByAdController } from '@/main/factories/controllers'

export default function (route: Router): void {
  route.post('/games/:gameId/ads', Adapt(makeCreateAdController()))
  route.get('/games/:gameId/ads', Adapt(makeLoadAdByGameController()))
  route.get('/ad/:id/discord', Adapt(makeGetDiscordByAdController()))
}
