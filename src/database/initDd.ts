import { createConnection } from 'typeorm'
import ProviderService from '../services/rpc/provider.service'
import { BaseDbProvider } from './BaseDbProvider'
import { User } from '../entity/User'
import { Controller } from '../controllers/controller'
import config from './ormconfig'

const initDb = async () => {
  await createConnection(config)
  const dbModel = new BaseDbProvider<User>(new Controller(User))
  const providerServiceMethods = new ProviderService(dbModel)

  return {
    ...providerServiceMethods,
  }
}

export default initDb
