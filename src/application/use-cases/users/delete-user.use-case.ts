import { Injectable } from '@nestjs/common'
import { UsersRepository } from '@/domain/repositories/users/users.repository'

@Injectable()
export class DeleteUserUseCase {
  constructor(private readonly repository: UsersRepository) {}

  /**
   * ユーザー削除
   * @param id ユーザーID
   */
  async execute(id: number) {
    return this.repository.deleteUser(id)
  }
}
