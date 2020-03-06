import { createConnection } from 'typeorm'
import AuthService from './services/rpc/auth.service'
import { BaseDbModel } from './BaseDb.model'
import { User } from './entity/User'
import { Controller } from './controllers/controller'
import config from './ormconfig'

const initDb = async () => {
  await createConnection(config)
  const dbModel = new BaseDbModel<User>(new Controller(User))
  const { createUser, userAuth } = new AuthService(dbModel)

  return {
    createUser,
    userAuth,
  }
}

export default initDb
