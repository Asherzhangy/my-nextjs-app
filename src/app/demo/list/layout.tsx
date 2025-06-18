import { React } from "react";

function DemoListLayout({children}:any) {
    return <div className='demo'>
        <h3>这里是demoList的模板页</h3>
        <hr />
        {children}
      </div>;    
}

export default DemoListLayout;