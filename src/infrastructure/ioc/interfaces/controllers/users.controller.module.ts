import { Module } from '@nestjs/common'
import { FindUsersUseCaseModule } from '../../application/use-cases/users/find-users.use-case.module'
import { CreateUserUseCaseModule } from '@/infrastructure/ioc/application/use-cases/users/create-user.use-case.module'
import { DeleteUserUseCaseModule } from '@/infrastructure/ioc/application/use-cases/users/delete-user.use-case.module'
import { UpdateUserUseCaseModule } from '@/infrastructure/ioc/application/use-cases/users/update-user.use-case.module'
import { UsersController } from '@/interfaces/controllers/users/users.controller'

@Module({
  imports: [
    FindUsersUseCaseModule,
    CreateUserUseCaseModule,
    DeleteUserUseCaseModule,
    UpdateUserUseCaseModule,
  ],
  controllers: [UsersController],
})
export class UsersControllerModule {}
