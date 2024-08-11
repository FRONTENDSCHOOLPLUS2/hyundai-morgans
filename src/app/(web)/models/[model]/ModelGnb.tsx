'use client'

export default function ModelGnb () {

  return(
      <nav className="flex items-end absolute top-[60px] left-[160px] z-10" >
        <button  className="grid col-auto font-Hyundai-sans w-[230px] h-[70px] pt-[8px] px-[20px]">
          <span className="col-start-1 text-[13px] self-end text-left ">GENISISUYEON</span>
          <span className="col-start-1 text-[22px] self-start text-left font-black">G90 Black</span>
          <div className="col-start-2 row-start-1 row-span-2 self-center justify-self-end w-[10px] h-[20px]">
            <img src="/images/btn_next.png" className="object-cover" alt="" />
          </div>
        </button>
        <ul className="flex">
          <li>
            <a href="#none" className="grid col-auto font-Hyundai-sans w-[150px] h-[50px] pt-[8px] px-[20px] border-[#777] border-[1px]">
              <span className="col-start-1 text-[10px] self-end text-left ">GENISISUYEON</span>
              <span className="col-start-1 text-[17px] self-start text-left font-medium">G90 Black</span>
            </a>
          </li>
          <li>
            <a href="#none" className="grid col-auto font-Hyundai-sans w-[150px] h-[50px] pt-[8px] px-[20px] border-[#777] border-[1px]">
              <span className="col-start-1 text-[10px] self-end text-left ">GENISISUYEON</span>
              <span className="col-start-1 text-[17px] self-start text-left font-medium">G90 Black</span>
            </a>
          </li>
          <li>
            <a href="#none" className="grid col-auto font-Hyundai-sans w-[150px] h-[50px] pt-[8px] px-[20px] border-[#777] border-[1px]">
              <span className="col-start-1 text-[10px] self-end text-left ">GENISISUYEON</span>
              <span className="col-start-1 text-[17px] self-start text-left font-medium">G90 Black</span>
            </a>
          </li>
          <li>
            <a href="#none" className="grid col-auto font-Hyundai-sans w-[150px] h-[50px] pt-[8px] px-[20px] border-[#777] border-[1px]">
              <span className="col-start-1 text-[10px] self-end text-left ">GENISISUYEON</span>
              <span className="col-start-1 text-[17px] self-start text-left font-medium">G90 Black</span>
            </a>
          </li>
        </ul>
      </nav>
  )
}