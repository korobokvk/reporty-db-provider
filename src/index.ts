import grpc from 'grpc'
import { app } from './utils/grpc.util'
import initDb from './database/initDd'

import 'reflect-metadata'
;(async () => {
  const providerServiceMethods = await initDb()
  const getServer = () => {
    const server = new grpc.Server()
    server.addService(app['DataBaseProvider'].service, providerServiceMethods)
    return server
  }

  const routeServer = getServer()
  routeServer.bind('0.0.0.0:3000', grpc.ServerCredentials.createInsecure())
  routeServer.start()
})()
