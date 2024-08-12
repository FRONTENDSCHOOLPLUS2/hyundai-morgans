import { fetchProduct } from "@/data/fetch/productFetch";
import { ImageViewer } from "./ImageViewer";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export default async function OrderPage ({ params }: { params: { model: string } }) {
    const data = await fetchProduct(params.model);
    let imageArray:string[] = [];

    if (data) {
        imageArray = data?.extra.detail.view360Images.map(image => SERVER + image.path);
        // console.log(imageArray);
    }

    return (
        <main className="bg-black">
            { data && <ImageViewer images={imageArray} />}
        </main>
    );
}