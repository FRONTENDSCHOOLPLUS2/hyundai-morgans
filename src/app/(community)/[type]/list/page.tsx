import { Metadata } from "next";
import ListItem from "../ListItem";
import { fetchProduct, fetchProducts } from "@/data/fetch/productFetch";
import Image from "next/image";

export function generateMetadata({ params }: { params: { type: string } }): Metadata{
    const boardName = params.type;
    return {
        title: `${boardName.toUpperCase()} - Gesinisu`,
        description: `${boardName} 목록 페이지`,
        openGraph: {
            title: `${boardName} - Genisisu`,
            description: `${boardName} 목록 페이지 입니다.`,
            url: `/${params.type}`,
            images: {
            url: '/images/genisisu_logo_b.png'
            }
        }
    };
}

export default async function ListPage () {
    const data = await fetchProduct("1"); // API 서버 호출
    console.log(data);

    return (
        <>
            <h1>List Page</h1>
            <h1>List Page</h1>
            <h1>List Page</h1>
            <h1>List Page</h1>
            <h1>List Page</h1>
            <h1>List Page</h1>
            <h1>List Page</h1>
            { data && <Image src={`${data.extra.detail.view360[0].path}`} alt="" width={500} height={500} />}
            {JSON.stringify(data)}
        </>
    );
}