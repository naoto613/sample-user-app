import { Controller, Get, Query } from '@nestjs/common'
import { FindUsersUseCase } from '@/application/use-cases/users/find-users.use-case'
import { FindUsersInput } from '@/interfaces/dto/users/find-users.input'
import { FindUsersOutput } from '@/interfaces/dto/users/find-users.output'

@Controller('users')
export class UsersController {
  constructor(private readonly findUsersUseCase: FindUsersUseCase) {}

  @Get()
  async findUsers(@Query() dto: FindUsersInput): Promise<FindUsersOutput[]> {
    return this.findUsersUseCase.execute(dto)
  }
}
