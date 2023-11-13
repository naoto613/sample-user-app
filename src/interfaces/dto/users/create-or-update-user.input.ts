import { Role } from '@prisma/client'
import { IsNotEmpty, IsEmail } from 'class-validator'

export class CreateOrUpdateUserInput {
  @IsNotEmpty()
  @IsEmail()
  email: string
  @IsNotEmpty()
  name: string
  role: Role
}
