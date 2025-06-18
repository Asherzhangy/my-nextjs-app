import { NextResponse,NextRequest } from "next/server";

export const GET = (req:NextRequest,{params}:any) => {
    return NextResponse.json({
        success:true,
        errorMessage:'获取单条数据'+params.id,
        data:{},
    })
}