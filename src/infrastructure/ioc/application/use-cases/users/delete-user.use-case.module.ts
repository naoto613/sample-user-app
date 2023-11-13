import { Module } from '@nestjs/common'
import { DeleteUserUseCase } from '@/application/use-cases/users/delete-user.use-case'
import { UsersRepositoryModule } from '@/infrastructure/ioc/domain/repositories/users.repository.module'

@Module({
  imports: [UsersRepositoryModule],
  providers: [DeleteUserUseCase],
  exports: [DeleteUserUseCase],
})
export class DeleteUserUseCaseModule {}
