import { prismaService } from '@/infrastructure/prisma/prisma.service'
import { CreateOrUpdateUserInput } from '@/interfaces/dto/users/create-or-update-user.input'
import { FindUsersInput } from '@/interfaces/dto/users/find-users.input'

export class UsersRepository {
  /**
   * ユーザー情報の作成
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
        isValid: true,
      },
      orderBy: {
        id: 'desc',
      },
    })
  }

  /**
   * ユーザー情報の作成
   * @param args ユーザー登録情報
   */
  async createUser(args: CreateOrUpdateUserInput) {
    await prismaService.user.create({
      data: args,
    })
  }

  /**
   * ユーザー情報の更新
   * @param args.input ユーザー更新情報
   * @param args.id ユーザーID
   */
  async updateUser({
    input,
    id,
  }: {
    input: CreateOrUpdateUserInput
    id: number
  }) {
    await prismaService.user.update({
      data: input,
      where: { id },
    })
  }

  /**
   * ユーザー情報の削除
   * @param id ユーザーID
   */
  async deleteUser(id: number) {
    await prismaService.user.update({
      data: { isValid: false },
      where: { id },
    })
  }
}
