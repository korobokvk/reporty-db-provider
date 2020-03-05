import { CreateUserController } from '../../controllers/user/create-user.controller'
import { AuthUserController } from '../../controllers/user/auth-user.controller'

export const createUser = (call, callback): void => {
  const createUserController = new CreateUserController()
  createUserController
    .createUser(call.request)
    .then((response) => {
      callback(null, response)
    })
    .catch((err) => callback(err, null))
}

export const userAuth = (call, callback): void => {
  const authUserController = new AuthUserController()
  authUserController
    .authUser(call.request)
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
