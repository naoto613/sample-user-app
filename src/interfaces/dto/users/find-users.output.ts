import { Role } from '@prisma/client'

export class FindUsersOutput {
  id: number
  email: string
  name: string
  role: Role
  isValid: boolean
}
