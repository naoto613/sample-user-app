import { Module } from '@nestjs/common'
import { UpdateUserUseCase } from '@/application/use-cases/users/update-user.use-case'
import { UsersRepositoryModule } from '@/infrastructure/ioc/domain/repositories/users.repository.module'

@Module({
  imports: [UsersRepositoryModule],
  providers: [UpdateUserUseCase],
  exports: [UpdateUserUseCase],
})
export class UpdateUserUseCaseModule {}
