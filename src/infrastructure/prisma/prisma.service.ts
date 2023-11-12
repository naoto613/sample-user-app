import { Injectable, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
class PrismaService extends PrismaClient implements OnModuleInit {
  // ログ出力用
  constructor() {
    super({
      log: [
        { emit: 'event', level: 'query' },
        { emit: 'stdout', level: 'info' },
        { emit: 'stdout', level: 'warn' },
        { emit: 'stdout', level: 'error' },
      ],
      errorFormat: 'pretty',
    })
  }

  async onModuleInit() {
    await this.$connect()
  }
}

/**
 * DBアクセス時はここで初期化されたものを呼ぶようにすることで
 * PrismaClientのインスタンスを1回しか生成しないようにする
 */
export const prismaService = new PrismaService()
