import { Metadata } from "next";
import { fetchProducts } from "@/data/fetch/productFetch";

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
    const data = await fetchProducts();
    console.log(data);
    const productCard = data?.filter(
        model => !model.extra.category.includes('option')).map(
            (model, index) => <ModelCard key={index} model={model} />
    );
    return (
        <main className="bg-black pt-40 pl-28 pr-28">
            <ul className="grid grid-cols-4 gap-6 text-white">
                { data && productCard}
            </ul>
        </main>
    );
}