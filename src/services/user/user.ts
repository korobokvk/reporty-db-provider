import { User } from '../../entity/User'
import { getRepository, DeepPartial } from 'typeorm'

export class CreateUserController {
  private userRepo = getRepository(User)
  constructor() {}

  public async createUser(user: DeepPartial<User>) {
    const newUser = this.userRepo.create(user)
    try {
      return await this.userRepo.save(newUser)
    } catch (error) {
      throw error
    }
  }
}
