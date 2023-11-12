import { Injectable } from '@nestjs/common'
import { UsersRepository } from '@/domain/repositories/users/users.repository'
import { FindUsersInput } from '@/interfaces/dto/users/find-users.input'

@Injectable()
export class FindUsersUseCase {
  constructor(private readonly repository: UsersRepository) {}

  /**
   * ユーザー一覧取得
   * @param args 検索条件
   * @return ユーザー一覧
   */
  async execute(args: FindUsersInput) {
    return this.repository.findManyUsers(args)
  }
}
