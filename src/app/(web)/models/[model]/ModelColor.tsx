'use client'

import { OptionExterior } from "@/types/product";
import React, { ReactNode, useRef, useState } from "react";

interface ModelColorProps {
  optionData: OptionExterior;
}

const ModelColor: React.FC<ModelColorProps> = ({optionData}) => {
  const [isWhite, setIsWhite] = useState<boolean>(false);
  const clickedButtonRef = useRef(new Set());

  // console.log(optionData?.extra.exterior);
  const exterior = optionData!.extra.exterior;
  // const colorGroup = Object.keys(exterior);
  
  let [group1, group2] = ['', ''];

  if ('glossy' in exterior) {
    group1 = '글로시';
    group2 = 'matte' in exterior ? '매트' : '';
  } else if ('matte' in exterior) {
    group1 = '매트';
  }

  const handleColorClick = (colorName: string) => {
    setIsWhite(!isWhite);
    // 클릭한 버튼에 클래스를 추가
    if (clickedButtonRef.current.has(colorName)) {
      clickedButtonRef.current.delete(colorName);
    } else {
      clickedButtonRef.current.add(colorName);
    }
  }

  const generateColorButton:ReactNode = exterior.glossy.colors.map(color => {
    const colorText = color.name;
    // const colorCode = colorText.substring(colorText.indexOf("[")); // [sss]
    const colorName = colorText.substring(0, colorText.indexOf("[")); // 우유니 화이트
    return (
      <li 
        key={colorName}
        className={`cursor-pointer hover:cursor-pointer ${clickedButtonRef.current.has(colorName) ? 'text-white' : ''}`}
        onClick={() => handleColorClick(colorName)}
      >
        {colorName}
      </li>
    );
  });

  return (
      <section className="min-h-screen bg-slate-900 relative p-[160px]">
        <nav className="absolute z-10 text-[#666666] inline-flex flex-col gap-y-[40px]">
          <ul className="text-[30px] flex gap-x-[24px]">
            <li><a href="#none" className="text-white">{group1}</a></li>
            {group2 !== '' ? <li><a href="#none">{group2}</a></li> : null}
          </ul>
          <ul className="text-[24px] text-[#666666] flex flex-col gap-y-[10px]">
            {generateColorButton}
          </ul>
        </nav>
        <figure className="absolute top-0">
          <img src="/images/detail/defaultCar.png" alt="" />
        </figure>
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#6A6C72] to-[#303135] opacity-30 blur"/>
      </section>
  );
}

export default ModelColor;