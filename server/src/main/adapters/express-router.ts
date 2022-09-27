import { RequestHandler } from 'express'

import { Controller } from '@/application/controllers'

type Adapt = (controller: Controller) => RequestHandler

export const expressRouteAdapt: Adapt = controller => async (req, res) => {
  const { data, statusCode } = await controller.handle({
    ...req.body,
    ...req.params,
    ...req.query
  })

  const json = [200, 201, 204].includes(statusCode) ? data : { error: data.message }
  return res.status(statusCode).json(json)
}
