import { ApiRes, MultiItem, Post, SingleItem } from "@/types";
import { Product } from "@/types/product";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const LIMIT = process.env.NEXT_PUBLIC_LIMIT;
const DELAY = process.env.NEXT_PUBLIC_DELAY;
const CLIENT = process.env.NEXT_CLIENT_ID;

export async function fetchProducts(): Promise<Product[]> {
    const params = new URLSearchParams();
    params.set('limit', LIMIT!);
    params.set('delay', DELAY!);
    const url = `${SERVER}/products?${params.toString()}`;
    // const url = `${SERVER}/products`;
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'client-Id': CLIENT,
        }
    });
    const resJson: ApiRes<MultiItem<Product>> = await res.json();
    if(!resJson.ok){
        throw new Error('상품 목록 조회 실패');
    }
    return resJson.item;
}

export async function fetchProduct(_id: string){
    const url = `${SERVER}/products/${_id}`;
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'client-Id': CLIENT,
        },
        next: { revalidate: 60 } // Revalidate every 60 seconds
    });
    const resJson: ApiRes<SingleItem<Product>> = await res.json();
    if(!resJson.ok){
        return null;
    }
    return resJson.item;
}