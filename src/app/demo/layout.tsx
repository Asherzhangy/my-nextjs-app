import { React } from "react";

function DemoLayout({children}:any) {
    return <div className='demo'>
        <h2>这里是demo的模板页</h2>
        <hr />
        {children}
      </div>;    
}

export default DemoLayout;