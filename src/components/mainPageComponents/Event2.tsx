'use client'
import { Product } from "@/types/product";
import Image from "next/image";
import { useState } from "react";
const SERVER : string = process.env.NEXT_PUBLIC_API_SERVER;


export default function Event2 ( {data} : {data:Product}) {
  const [index, setIndex] = useState(0);

  const imageData: React.ReactNode[] = data.map((img) => (
    <figure key={img.name}>
      <Image src={SERVER + img.mainImages[0].path} width={0} height={0} sizes="100%" alt="G70 car" />
    </figure>
  ))
  const imgLength = imageData.length
  const nameData = data.map(modelName => modelName.name.split('-'))
  // const modelId = data.map(modelId => modelId._id)

  const subtitle = nameData.map(modelName => {
    if (modelName.length >1 ) {
      return modelName.slice(1,4).join(' ');
    }
    return 'STANDARD';
  })

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

  return(
    <section id="event2">
        <article>
          <h2>{nameData[index][0].toUpperCase()} </h2>
          <h3>{subtitle[index].toUpperCase()}</h3>
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
          <button className="mainBtn">VIEW MORE</button>
        </div>

      </section>
  )
}