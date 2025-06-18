import { React } from "react";
import AntdContainer from "./_components/AntdContainer";

function adminLayout({children}:any) {
    return (<AntdContainer >{children}</AntdContainer>)   
}

export default adminLayout;