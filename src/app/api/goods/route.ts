import { NextResponse } from "next/server";
// 这里相当于是服务器端代码  これはサーバー側のコードと同等である
export const GET = () => {
    return NextResponse.json({
        success:true,
        errorMessage:'',
        data:[
            {
                id:1,
                name:'asher'
        },
         {
                id:2,
                name:'bob'
        }
    ],
    })
}