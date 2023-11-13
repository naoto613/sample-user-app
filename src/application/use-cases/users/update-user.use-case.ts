import { Injectable } from '@nestjs/common'
import { UsersRepository } from '@/domain/repositories/users/users.repository'
import { CreateOrUpdateUserInput } from '@/interfaces/dto/users/create-or-update-user.input'

@Injectable()
export class UpdateUserUseCase {
  constructor(private readonly repository: UsersRepository) {}

  /**
   * ユーザー更新
   * @param args.input ユーザー更新情報
   * @param args.id ユーザーID
   */
  async execute(args: { input: CreateOrUpdateUserInput; id: number }) {
    return this.repository.updateUser(args)
  }
}
