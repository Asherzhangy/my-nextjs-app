import { React, ReactNode } from "react";

function DemoAdminLayout({children}:{children:ReactNode}) {
    return <div className='demo-admin p-8 bg-rose-600 text-white' >
        <h3>这里是demoadmin的模板页</h3>
        <hr />
        {children}
      </div>;    
}

export default DemoAdminLayout;