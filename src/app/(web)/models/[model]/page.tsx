import { fetchProduct } from "@/data/fetch/productFetch";
import { ImageViewer } from "./ImageViewer";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export default async function OrderPage () {
    const data = await fetchProduct("1");
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