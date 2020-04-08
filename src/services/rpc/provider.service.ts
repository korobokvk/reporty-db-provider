import { BaseDbProvider } from '../../database/BaseDbProvider'

export default class ProviderService<T> {
  constructor(private dbModel: BaseDbProvider<T>) {}

  public createUser = (call, callback): void => {
    const { request } = call
    this.dbModel
      .create(request)
      .then((response) => {
        callback(null, response)
      })
      .catch((err) => callback(err, null))
  }

  public findById = (call, callback): void => {
    const { request } = call
    this.dbModel
      .readOne({ ...request })
      .then((response) => {
        callback(null, response)
      })
      .catch((err) => callback(err, null))
  }

  public findByEmail = (call, callback) => {
    const { request } = call
    this.dbModel
      .readOne({ ...request })
      .then((response) => {
        callback(null, response)
      })
      .catch((err) => callback(err, null))
  }
}
