import { Product, Thumbnail } from "@/types/product";
import sampleImage from "../../../../public/images/genesis-kr-gv70-facelift-sport-glossy-colors-uyuni-white-large.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export default function ModelCard({model}:{model: Product}) {
    const modelName = model.name;
    // console.log(modelName);
    const title = modelName.split('-')[0].toUpperCase();
    const subtitle = modelName.split('-').filter(word => word !== model.name.split('-')[0]).join(' ').toUpperCase();
    // console.log(model.mainImages[0].path);
    const content = model.extra.content;
    // console.log(content);
    
    return (
        <li className="grid grid-cols-2 gap-y-1 justify-center px-6 py-8 bg-item-background" >
            {/* <Image src={sampleImage} width={500} height={500} alt="" className="col-span-full transform scale-x-[-1]"/> */}
            { !model.mainImages 
                ? (<Image src={sampleImage} width={500} height={500} alt="" className="col-span-full"/>)
                : (<Image src={SERVER + model.mainImages[0].path} width={500} height={500} alt="" className="col-span-full"/>)
            }
            <div className="col-span-full flex items-end gap-x-2 mb-4">
                <h2 className="text-3xl font-rjjFam">{title}</h2>
                <h3 className="">{subtitle}</h3>
            </div>
            <h3 className="col-span-full mb-10">{content}</h3>
            <button className="justify-self-start text-xs px-4 py-2">
                <Link href={'/models/' + modelName} >전시시승</Link>
            </button>
            <a href="#none" className="justify-self-end self-center flex items-center gap-3">구매하기
                <span className="bg-next-btn block bg-no-repeat w-2.5 h-4 bg-contain"></span>
            </a>
        </li>
    );
}