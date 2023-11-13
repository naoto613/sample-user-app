import { Injectable } from '@nestjs/common'
import { UsersRepository } from '@/domain/repositories/users/users.repository'
import { CreateOrUpdateUserInput } from '@/interfaces/dto/users/create-or-update-user.input'

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly repository: UsersRepository) {}

  /**
   * ユーザー作成
   * @param args ユーザー登録情報
   */
  async execute(args: CreateOrUpdateUserInput) {
    return this.repository.createUser(args)
  }
}
