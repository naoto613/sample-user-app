import { Module } from '@nestjs/common'
import { FindUsersUseCaseModule } from '../../application/use-cases/users/find-users.use-case.module'
import { UsersController } from '@/interfaces/controllers/users/users.controller'

@Module({
  imports: [FindUsersUseCaseModule],
  controllers: [UsersController],
})
export class UsersControllerModule {}
