import grpc from 'grpc'
import { app } from './utils/grpc.util'
import { createUser } from './services/rpc/auth.service'
import { createConnection } from 'typeorm'
import config from './ormconfig'
import 'reflect-metadata'

createConnection(config)
const getServer = () => {
  const server = new grpc.Server()
  server.addService(app['DataBaseProvider'].service, {
    createUser,
  })
  return server
}

const routeServer = getServer()
routeServer.bind('0.0.0.0:3000', grpc.ServerCredentials.createInsecure())
routeServer.start()
