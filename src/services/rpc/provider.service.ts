import { BaseDbProvider } from '../../BaseDbProvider'

export default class ProviderService<T> {
  constructor(private dbModel: BaseDbProvider<T>) {}

  public createUser = (call, callback): void => {
    this.dbModel
      .create(call.request)
      .then((response) => {
        callback(null, response)
      })
      .catch((err) => callback(err, null))
  }

  public findById = (call, callback): void => {
    const { request } = call
    this.dbModel
      .readOne({ id: request.id })
      .then((response) => {
        callback(null, response)
      })
      .catch((err) => callback(err, null))
  }

  public findByEmail = (call, callback) => {
    const { request } = call
    this.dbModel
      .readOne({ email: request.email })
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
