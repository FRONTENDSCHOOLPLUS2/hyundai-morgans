import { Product } from "@/types/product";
import sampleImage from "../../../../public/images/genesis-kr-gv70-facelift-sport-glossy-colors-uyuni-white-large.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useModelStore } from "@/zustand/useModel";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const modelArray = [
  "g90-black",
  "g90-long-wheel-base",
  "g90",
  "g80",
  "g80-electrified",
  "g70",
  "g70-shooting-brake",
  "gv80",
  "gv80-coupe",
  "gv70",
  "gv70-electrified",
  "gv60",
  "neolun-concept",
];

export default function ModelCard({ model }: { model: Product }) {
  const modelName = model.name;
  // console.log(modelName);
  const title = modelName.split("-")[0].toUpperCase();
  const subtitle = modelName
    .split("-")
    .filter((word) => word !== model.name.split("-")[0])
    .join(" ")
    .toUpperCase();
  // console.log(model.mainImages[0].path);
  const content = model.extra.content;
  // console.log(content);
  const index = modelArray.indexOf(modelName) + 1;

  return (
    <li className="grid grid-cols-2 gap-y-1 justify-center px-6 py-8 bg-item-background">
      {/* <Image src={sampleImage} width={500} height={500} alt="" className="col-span-full transform scale-x-[-1]"/> */}
      {!model.mainImages ? (
        <Image
          src={sampleImage}
          width={500}
          height={500}
          alt=""
          className="col-span-full"
        />
      ) : (
        <Image
          src={SERVER + model.mainImages[0].path}
          width={500}
          height={500}
          alt=""
          className="col-span-full"
        />
      )}
      <div className="col-span-full flex items-end gap-x-2 mb-4">
        <h2 className="text-3xl font-rjjFam">{title}</h2>
        <h3 className="">{subtitle}</h3>
      </div>
      <h3 className="col-span-full mb-10">{content}</h3>
      <button className="justify-self-start text-l px-4 py-2">전시시승</button>
      <Link
        href={`/models/${index}`}
        className="justify-self-end self-center flex items-center gap-3"
      >
        구매하기
        <span className="bg-next-btn block bg-no-repeat w-2.5 h-4 bg-contain"></span>
      </Link>
    </li>
  );
}
