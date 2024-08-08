import { Metadata } from "next";
import { fetchProduct, fetchProducts } from "@/data/fetch/productFetch";
import sampleImage from "../../../../../public/images/genesis-kr-gv70-facelift-sport-glossy-colors-uyuni-white-large.png";
import ModelCard from "./ModelCard";

export function generateMetadata({ params }: { params: { type: string } }): Metadata {
    const boardName = params.type;
    return {
        title: `${boardName.toUpperCase()} - Genisisu`,
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
    const productArr = Array(15).fill(1).map((v, i) => v + i);
    const productCard = productArr.map( product => 
        <ModelCard key={product} imgLink={sampleImage} />
    );

    return (
        <>
            <h1>List Page</h1>
            <h1>List Page</h1>
            <h1>List Page</h1>
            <h1>List Page</h1>
            <h1>List Page</h1>
            <section className="flex flex-wrap">
                { data && productCard}
            </section>
        </>
    );
}