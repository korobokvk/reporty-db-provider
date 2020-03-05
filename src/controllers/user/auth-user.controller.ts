import { User } from '../../entity/User'
import { getRepository, DeepPartial } from 'typeorm'

export class AuthUserController {
  private userRepo = getRepository(User)
  constructor() {}

  public async authUser(user: DeepPartial<User>) {
    const { email, password } = user
    try {
      const existingUser = await this.userRepo.findOne({ email })
      const { password: existingPassword } = existingUser
      if (!existingUser) {
        throw new Error('User does not exist')
      }
      if (existingPassword !== password) {
        throw new Error('Wrong credentials')
      }

      return existingUser
    } catch (error) {
      throw error
    }
  }
}
