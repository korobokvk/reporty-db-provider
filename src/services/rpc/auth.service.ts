import { CreateUserController } from '../user/user'

export const createUser = (call, callback): void => {
  const createUserController = new CreateUserController()
  createUserController
    .createUser(call.request)
    .then((response) => {
      callback(null, response)
    })
    .catch((err) => callback(err, null))
}

export const isAuthUser = (JWT) => {
  // TODO: need to finish is auth method
  console.log('Check user')
  return true
}
