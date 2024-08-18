'use client' 

import { Product } from "@/types/product";
import sampleImage from "../../../../public/images/genesis-kr-gv70-facelift-sport-glossy-colors-uyuni-white-large.png";
import Image from "next/image";
import Link from "next/link";
import { useModelStore } from "@/zustand/useModel";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export default function ModelCard({model}:{model: Product}) {
    const { items } = useModelStore();
    const modelName = model.name;
    // 'g'로 시작하고 숫자로 끝나는 문자열만을 추출 (g80, g90, gv70)
    const regex = /^g\d+$/; // 정규표현식
    const title = modelName.match(regex)?.[0] || modelName.split('-')[0];
    const subtitle = modelName.split('-').filter(word => word !== title).join(' ');
    const content = model.extra.content;
    const index = items.indexOf(modelName) + 1;

    
    return (
        <li className="grid grid-cols-2 gap-y-1 justify-center px-6 py-8 bg-item-background" >
            { !model.mainImages 
                ? (<Image src={sampleImage} width={500} height={500} alt="" className="col-span-full"/>)
                : (<Image src={SERVER + model.mainImages[0].path} width={500} height={500} alt="" className="col-span-full"/>)
            }
            <div className="col-span-full flex items-end gap-x-2 mb-4">
                <h2 className="text-3xl font-Hyundai-sans">{title.toUpperCase()}</h2>
                <h3 className="">{subtitle.toUpperCase()}</h3>
            </div>
            <h3 className="col-span-full mb-10">{content}</h3>
            <button className="justify-self-start text-l px-4 py-2">전시시승</button>
            <Link href={`/models/${index}`} className="justify-self-end self-center flex items-center gap-3">구매하기
                <span className="bg-next-btn block bg-no-repeat w-2.5 h-4 bg-contain"></span>
            </Link>
        </li>
    );
}
