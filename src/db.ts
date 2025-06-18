import { PrismaClient } from '@prisma/client';

// 声明一个全局变量类型，以便 TypeScript 能够识别
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

// 创建或获取 Prisma 客户端实例
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'], // 可选：启用查询日志记录，便于调试
  });  

// 在非生产环境下将实例存储到全局变量中，以供后续使用
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}