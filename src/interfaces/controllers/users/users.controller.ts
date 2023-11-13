import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import { CreateUserUseCase } from '@/application/use-cases/users/create-user.use-case'
import { DeleteUserUseCase } from '@/application/use-cases/users/delete-user.use-case'
import { FindUsersUseCase } from '@/application/use-cases/users/find-users.use-case'
import { UpdateUserUseCase } from '@/application/use-cases/users/update-user.use-case'
import { CreateOrUpdateUserInput } from '@/interfaces/dto/users/create-or-update-user.input'
import { FindUsersInput } from '@/interfaces/dto/users/find-users.input'
import { FindUsersOutput } from '@/interfaces/dto/users/find-users.output'

@Controller('users')
export class UsersController {
  constructor(
    private readonly findUsersUseCase: FindUsersUseCase,
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
  ) {}

  @Get()
  async findUsers(@Query() dto: FindUsersInput): Promise<FindUsersOutput[]> {
    return this.findUsersUseCase.execute(dto)
  }

  @Post()
  async createUser(@Body() dto: CreateOrUpdateUserInput): Promise<void> {
    return this.createUserUseCase.execute(dto)
  }

  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreateOrUpdateUserInput,
  ): Promise<void> {
    return this.updateUserUseCase.execute({
      input: dto,
      id,
    })
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.deleteUserUseCase.execute(id)
  }
}
