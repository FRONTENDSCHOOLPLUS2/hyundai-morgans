'use client'
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
const SERVER : string = process.env.NEXT_PUBLIC_API_SERVER;

export default function Event2 ( {data} : {data:Product[]}) {
  const router = useRouter();
  const regex = /gv?\d{2}/g; // 정규표현식
  const [index, setIndex] = useState(0);
  const imageData = data.map((image) => (
    <figure key={image.name}>
      <Image src={SERVER + (image.mainImages[2].path)} width={0} height={0} sizes="100%" alt="G70 car" />
    </figure>
  ))
  const imgLength = imageData.length
  const nameTitData = data.map(modelName => {
    const titText = modelName.name.match(regex)?.[0] || modelName.name.split('-')[0]
    const subText = modelName.name.split('-').filter((item)=>item !== titText).join(' ')
    return [ titText, subText ]

  })
  const title = nameTitData[index][0].toUpperCase()
  const subTitle = nameTitData[index][1].toUpperCase()

  const handleIndexNumPlus = () => {
    setIndex((prev) => {
      if (prev < imgLength -1) {
        return prev + 1
      }
      return prev = 0;
    })
  }
  const handleIndexNumMinus = () => {
    setIndex((prev) => {
      if (prev <= 0) {
        return 0;
      }
      return prev - 1;
    });
  }

  const handleModelClick = () => {
    if (index === 12) {
      alert ("NEOLUN 차량은 준비중 입니다.\n기대해주세요")
    } else {
      router.push(`/models/${index + 1}`)
    }
  }

  return(
    <section id="event2">
        <article>
          <h2>{title} </h2>
          <h3>{subTitle || "STANDARD"}</h3>
        </article>
        <section>
          <span className="ev2_prev" onClick={handleIndexNumMinus}></span>
          <div className="ev2_wrap">
            <article style={{left:`${-100 * index}%`, width:`${100 * imgLength}%`}}>
                {data && imageData}
            </article>
          </div>
          <span className="ev2_next" onClick={handleIndexNumPlus}></span>
        </section>
        
        <div className="ev2_bg">
          <Link href="#" className="mainBtn" 
          onClick={(e) => {
            e.preventDefault();
            handleModelClick();
            }}>VIEW MORE</Link>
        </div>
      </section>
  )
}