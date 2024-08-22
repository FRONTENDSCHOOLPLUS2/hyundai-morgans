'use client'

import { useModelStore } from "@/zustand/useModel"
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect, useRef, useState } from "react";

export default function ModelGnb ({params}: { params: { model: string }}) {
  const { items } = useModelStore();
  const modelName = items[Number(params.model) - 1].split('-').join(' ').toUpperCase();
  const ulRef = useRef<HTMLUListElement | null>(null)
  const btnRef = useRef<HTMLButtonElement | null>(null)
  const router = useRouter();
  const [tf, setTf] = useState(false)
  const [btnWidth, setBtnWidth] = useState();
  const regex = /gv?\d{2}/g; // 정규표현식

  console.log("btnWidth",btnWidth)

  const handleButtonClick = () => {
    if (tf !== true) {
      // ulRef.current?.classList.replace('left-[-900px]','left-[500px]');
      if (ulRef.current) {
        ulRef.current.style.left = `${btnWidth}px`
        ulRef.current.classList.replace('opacity-0','opacity-1');
      }
      setTf(!tf);
    } else {
      // ulRef.current?.classList.replace('left-[500px]','left-[-900px]');
      if (ulRef.current) {
        ulRef.current.style.left = '-900px'
        ulRef.current?.classList.replace('opacity-1','opacity-0');
      }
      setTf(!tf);
    }
  }
  const handleMoveModelPage = (index : number) => {
    if (index === 12) {
      alert ("오호호 여길눌러보셨군요 준비중이에용!")
    } else {
      router.push(`/models/${index + 1}`)
    }
  }
  useEffect(()=>{
    let btnWd;
    if (btnRef.current) {
      btnWd = btnRef.current?.offsetWidth;
    }
    setBtnWidth(btnWd);
  },[])


  return(
      <nav className="flex items-end absolute top-[40px] left-[80px] z-20 w-full h-[70px] overflow-hidden" >
        <button className="grid col-auto font-Hyundai-sans h-full pt-[8px] px-[10px] gap-x-[3rem] bg-black absolute top-0 left-0 z-30" ref={btnRef} onClick={handleButtonClick}>
          <span className="col-start-1 text-[13px] self-end text-left ">GENISISUYEON</span>
          <span className="col-start-1 text-[22px] self-start text-left font-black">{modelName}</span>
          <div className="col-start-2 row-start-1 row-span-2 self-center justify-self-end w-[10px] h-[20px]">
            <img src="/images/btn_next.png" className="object-cover" alt="" />
          </div>
        </button>
        <div className="absolute top-0">
          <ul className="flex absolute max-w-[1200px] overflow-x-scroll overflow-y-hidden transition-all delay-[0.1s] opacity-0" style={{left:'-900px'}} ref={ulRef}>
            {items.map((name,index)=>{
              let titName = name.match(regex)?.[0] || name.split('-')[0]
              let subName = name.split('-').filter((item) => item !== titName).join(' ')
              return(
                <li key={name} className="box-border">
                  <Link href="#" onClick={(e)=>{
                    e.preventDefault();
                    handleMoveModelPage(index)
                  }} key={name} className="flex flex-col font-Hyundai-sans w-[170px] h-[70px] pt-[5px]  border-[#777] border-[1px] bg-black px-[20px] hover:bg-[#333]">
                    <span className="col-start-1 text-[25px] w-full self-start text-left font-medium ">{titName.toUpperCase()}</span>
                    <span className="col-start-1 text-[12px] self-start text-left text-nowrap ">{subName ? subName.toUpperCase() : "STANDARD"}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

      </nav>
  )
}
