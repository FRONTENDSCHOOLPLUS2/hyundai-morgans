'use client'

import { OptionDetail, OptionExterior } from "@/types/product";
import Image from "next/image";
import React, { ReactNode, useEffect, useRef, useState } from "react";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

interface ModelColorProps {
  optionData: OptionExterior;
}

const ModelColor: React.FC<ModelColorProps> = ({optionData}) => {
  const exterior = optionData!.extra.exterior;
  const [groupName1, groupName2] = [Object.keys(exterior)[1], Object.keys(exterior)[2]];

  const defaultGroup = groupName1;
  const defaultColorText:string = exterior[groupName1].colors[0].name;
  const defaultColor = defaultColorText.substring(0, defaultColorText.indexOf("["));
  const defaultImage:string = SERVER  + exterior[groupName1].colors[0].images[1].path;

  const [colorState, setColorState] = useState<{node:ReactNode, imageSource: string}>({node: null, imageSource: defaultImage});
  const clickedGroupRef = useRef<Set<string>>(new Set([defaultGroup]));
  const clickedColorRef = useRef<Set<string>>(new Set([defaultColor]));

  let [groupKR1, groupKR2] = ['', ''];
  if ('glossy' in exterior) {
    groupKR1 = '글로시';
    groupKR2 = 'matte' in exterior ? '매트' : '';
  } else if ('matte' in exterior) {
    groupKR1 = '매트';
  }

  const handleGroupClick = (groupName: string) => {
    if (groupName === 'glossy') {
      setColorState((prevState) => ({
        ...prevState, 
        node: generateColorButton(groupName1)
      }))
    } else {
      setColorState((prevState) => ({
        ...prevState, 
        node: generateColorButton(groupName2)
      }))
    }
    // 클릭한 버튼에 text-white 클래스 추가
    clickedGroupRef.current.clear();
    clickedGroupRef.current.add(groupName);
    const newImage = exterior[groupName].colors[0].images[1].path
    setColorState((prevState) => ({
      ...prevState, 
      imageSource: SERVER + newImage
      }))
  }

  const handleColorClick = (colorName: string, groupName: string, colorIndex: number) => {
    // 클릭한 버튼가 text-white 클래스 추가
    // if (clickedColorRef.current.has(name)) {
    //   clickedColorRef.current.delete(name);
    // } else {
    //   clickedColorRef.current.add(name);
    // }
    clickedColorRef.current.clear();
    clickedColorRef.current.add(colorName);
    const newImage = exterior[groupName].colors[colorIndex].images[1].path;
    setColorState((prevState) => ({
      node: generateColorButton(groupName),
      imageSource: SERVER + newImage
    }))
  }


  const generateColorButton = (groupName: string):ReactNode => {
    return exterior[groupName].colors.map((color: OptionDetail, colorIndex: number) => {
      const text = color.name;
      // const colorCode = colorText.substring(colorText.indexOf("[")); // [sss]
      const colorName = text.substring(0, text.indexOf("[")); // 우유니 화이트
      return (
        <li 
          key={colorName}
          className={`cursor-pointer hover:cursor-pointer ${clickedColorRef.current.has(colorName) ? 'text-white' : ''}`}
          onClick={() => handleColorClick(colorName, groupName, colorIndex)}
        >
          {colorName}
        </li>
      );
    });
  };

  useEffect(()=>{
    setColorState((prevState) => ({
      ...prevState, 
      node: generateColorButton(groupName1)
    }))
  }, []);

  return (
      <section className="min-h-screen bg-slate-900 relative p-[160px]">
        <nav className="absolute z-10 text-[#666666] inline-flex flex-col gap-y-[40px]">
          <ul className="text-[30px] flex gap-x-[24px]">
            <li 
              className={`cursor-pointer hover:cursor-pointer ${clickedGroupRef.current.has(groupName1) ? 'text-white' : ''}`}
              onClick={() => handleGroupClick(groupName1)}
            >
              {groupKR1}
            </li>
            {groupKR2 !== ''
            ? 
              <li
                className={`cursor-pointer hover:cursor-pointer ${clickedGroupRef.current.has(groupName2) ? 'text-white' : ''}`}
                onClick={() => handleGroupClick(groupName2)}
              >
                {groupKR2}
              </li> 
            : null}
          </ul>
          <ul className="text-[24px] text-[#666666] flex flex-col gap-y-[10px]">
            {colorState.node}
          </ul>
        </nav>
        <figure className="absolute top-0 w-full h-full">
          <Image className="w-full" fill src={colorState.imageSource} alt="" />
        </figure>
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#6A6C72] to-[#303135] opacity-30 blur"/>
      </section>
  );
}

export default ModelColor;