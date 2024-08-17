'use client'

import { fetchProducts } from "@/data/fetch/productFetch";
import Image from "next/image";
import { useState } from "react";


export default function Event2 ( {data}) {

  console.log("확인::::",data)

  const [index, setIndex] = useState(0);
  const handleIndexNumPlus = () => {
    setIndex((prev) => prev + 1)
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
          <h2>G70</h2>
          <h3>STANDARD</h3>
          <button className="mainBtn">VIEW MORE</button>
        </article>
        <section>
          <span className="ev2_prev" onClick={handleIndexNumMinus}></span>
          <div className="ev2_wrap">
            <figure style={{left:`${-100 * index }%`}}>
              <Image src="/images/g70.png" width={0} height={0} sizes="100%" alt="G70 car" />
              <Image src="/images/g90.png" width={0} height={0} sizes="100%" alt="G70 car" />
            </figure>
          </div>
          
          <span className="ev2_next" onClick={handleIndexNumPlus}></span>
        </section>
        
        <div className="ev2_bg">
          
        </div>

      </section>
  )
}