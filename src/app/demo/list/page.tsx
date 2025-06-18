import { React } from "react";
import { Metadata } from "next";
import List from "./_components/List";

export const metadata: Metadata = {
    title: "this is a list page",
    description: 'this is a list page by next',
    keywords: 'next.js,react',
};
function ListPage() {
    return <div className='list-page'>
        ListPage
        <List />
    </div>;
}

export default ListPage;