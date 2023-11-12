import { Module } from '@nestjs/common'
import { UsersRepository } from '@/domain/repositories/users/users.repository'

@Module({
  providers: [UsersRepository],
  exports: [UsersRepository],
})
export class UsersRepositoryModule {}
