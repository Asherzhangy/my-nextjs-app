import { React } from "react";
import AntAdmin from "../_components/AntAdmin";

function adminLayout({children}:any) {
    return (<AntAdmin >{children}</AntAdmin>)   
}

export default adminLayout;