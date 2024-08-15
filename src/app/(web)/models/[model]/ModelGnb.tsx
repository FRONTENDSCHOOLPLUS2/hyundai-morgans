'use client'

import { useModelStore } from "@/zustand/useModel"

export default function ModelGnb ({params}: { params: { model: string }}) {
  const { items } = useModelStore();
  const modelName = items[Number(params.model) - 1].toUpperCase();

  return(
      <nav className="flex items-end absolute top-[40px] left-[80px] z-20" >
        <button  className="grid col-auto font-Hyundai-sans w-[300px] h-[70px] pt-[8px] px-[20px] bg-black">
          <span className="col-start-1 text-[13px] self-end text-left ">GENISISUYEON</span>
          <span className="col-start-1 text-[22px] self-start text-left font-black">{modelName}</span>
          <div className="col-start-2 row-start-1 row-span-2 self-center justify-self-end w-[10px] h-[20px]">
            <img src="/images/btn_next.png" className="object-cover" alt="" />
          </div>
        </button>
        <ul className="flex">
          <li>
            <a href="#none" className="grid col-auto font-Hyundai-sans w-[200px] h-[70px] pt-[8px] px-[20px] border-[#777] border-[1px] bg-black">
              <span className="col-start-1 text-[10px] self-end text-left ">GENISISUYEON</span>
              <span className="col-start-1 text-[17px] self-start text-left font-medium">{modelName}</span>
            </a>
          </li>
          <li>
            <a href="#none" className="grid col-auto font-Hyundai-sans w-[200px] h-[70px] pt-[8px] px-[20px] border-[#777] border-[1px] bg-black">
              <span className="col-start-1 text-[10px] self-end text-left ">GENISISUYEON</span>
              <span className="col-start-1 text-[17px] self-start text-left font-medium">{modelName}</span>
            </a>
          </li>
          <li>
            <a href="#none" className="grid col-auto font-Hyundai-sans w-[200px] h-[70px] pt-[8px] px-[20px] border-[#777] border-[1px] bg-black">
              <span className="col-start-1 text-[10px] self-end text-left ">GENISISUYEON</span>
              <span className="col-start-1 text-[17px] self-start text-left font-medium">{modelName}</span>
            </a>
          </li>
          <li>
            <a href="#none" className="grid col-auto font-Hyundai-sans w-[200px] h-[70px] pt-[8px] px-[20px] border-[#777] border-[1px] bg-black">
              <span className="col-start-1 text-[10px] self-end text-left ">GENISISUYEON</span>
              <span className="col-start-1 text-[17px] self-start text-left font-medium">{modelName}</span>
            </a>
          </li>
        </ul>
      </nav>
  )
}