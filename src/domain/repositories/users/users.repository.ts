import { prismaService } from '@/infrastructure/prisma/prisma.service'
import { FindUsersInput } from '@/interfaces/dto/users/find-users.input'

export class UsersRepository {
  /**
   * ユーザー情報の検索
   * @param args 検索条件
   * @return ユーザー情報一覧
   */
  async findManyUsers(args: FindUsersInput) {
    return prismaService.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        isValid: true,
      },
      where: {
        email: { contains: args.email },
        name: { contains: args.name },
      },
      orderBy: {
        id: 'desc',
      },
    })
  }
}
