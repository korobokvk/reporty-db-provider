import { CreateUserController } from '../user/user'

export const createUser = (call): void => {
  const createUserController = new CreateUserController()
  call.on('data', (data, err) => {
    if (err) {
      throw err
    }
    createUserController
      .createUser(data)
      .then((response) => {
        call.write(response)
        call.end()
      })
      .catch((err) => {
        throw err
      })
  })
  call.on('end', (err) => {
    if (err) {
      throw err
    }
  })
}

export const isAuthUser = (JWT) => {
  // TODO: need to finish is auth method
  console.log('Check user')
  return true
}
