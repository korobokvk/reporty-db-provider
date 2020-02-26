import { User } from '../../entity/User'
import { connection } from '../../connection'

export const createUser = ({ email, password }: { email: string; password: string }) =>
  connection([User]).then(async (connect) => {
    let user = new User()
    user.email = email
    user.password = password
    const { data, ...response } = await connect.manager.save(user)
    return response
  })
