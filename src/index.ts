import grpc from 'grpc'
import { app } from './utils/grpc.util'
import AuthService from './services/rpc/auth.service'
import { BaseDbModel } from './BaseDb.model'
import { createConnection } from 'typeorm'
import { User } from './entity/User'
import { Controller } from './controllers/controller'
import config from './ormconfig'
import 'reflect-metadata'
;(async () => {
  await createConnection(config)
  const dbModel = await new BaseDbModel<User>(new Controller(User))
  const authService = await new AuthService(dbModel)
  const getServer = () => {
    const server = new grpc.Server()
    server.addService(app['DataBaseProvider'].service, {
      createUser: authService.createUser,
      userAuth: authService.userAuth,
    })
    return server
  }

  const routeServer = getServer()
  routeServer.bind('0.0.0.0:3000', grpc.ServerCredentials.createInsecure())
  routeServer.start()
})()
