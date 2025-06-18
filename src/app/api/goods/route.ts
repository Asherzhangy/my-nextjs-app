import { NextResponse,NextRequest } from "next/server";
import { prisma } from "@/db";
// import { error } from "console";
// 这里相当于是服务器端代码  これはサーバー側のコードと同等である
export const GET = async () => {
    // データをクエリし、作成時間で降順で並べ替える
    const data = await prisma.goods.findMany({orderBy: {
        createdAt: 'desc',
    }
,});
    
    return NextResponse.json({
        success:true,
        errorMessage:'',
        data,
    });
};

export const POST = async (req:NextRequest) => {
    const data = await req.json();
    await prisma.goods.create({
        data,
    });
    return NextResponse.json({
        success:true, 
        errorMessage:'创建成功',
        data:{},
    });
};