import { createUser as createUserController } from '../user/user'

export const createUser = (call): void => {
  call.on('data', (data, err) => {
    if (err) {
      throw err
    }
    createUserController(data).then((response) => {
      call.write(response)
      call.end()
    })
  })
  call.on('end', (data, err) => {
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
