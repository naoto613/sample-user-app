import { Module } from '@nestjs/common'
import { UsersControllerModule } from './interfaces/controllers/users.controller.module'

@Module({
  imports: [UsersControllerModule],
})
export class AppModule {}
