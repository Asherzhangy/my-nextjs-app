import { prisma } from '@/db';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req:NextRequest) => {
  const title = req.nextUrl.searchParams.get('title') as string || ''
  const data = await prisma.article.findMany({
    where: {
      title:{
        contains:title
      }
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return NextResponse.json({
    success: true,
    errorMessage: '',
    data: {
      list: data,
    },
  });
};

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  await prisma.article.create({
    data,
  });
  return NextResponse.json({
    success: true,
    errorMessage: '创建成功',
    data: {},
  });
};