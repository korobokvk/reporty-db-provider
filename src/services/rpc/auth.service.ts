import { Controller } from '../../controllers/controller'
import { getConnectionManager } from 'typeorm'
import { BaseDbModel } from '../../BaseDb.model'

export default class AuthService<T> {
  constructor(private dbModel: BaseDbModel<T>) {}

  public createUser = (call, callback): void => {
    this.dbModel
      .create(call.request)
      .then((response) => {
        callback(null, response)
      })
      .catch((err) => callback(err, null))
  }

  public userAuth = (call, callback): void => {
    const { request } = call
    this.dbModel
      .readOne(request.id)
      .then((response) => {
        callback(null, response)
      })
      .catch((err) => callback(err, null))
  }
}

export const isAuthUser = (JWT) => {
  // TODO: need to finish is auth method
  console.log('Check user')
  return true
}
