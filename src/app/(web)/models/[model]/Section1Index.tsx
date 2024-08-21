'use client';

import Link from 'next/link';
import { ImageViewer } from './ImageViewer';
import { Product } from '@/types/product';
import { useModelStore } from '@/zustand/useModel';

interface Section1IndexProps {
  modelData: Product | null;
  imageArray: string[];
}

export default function Section1Index({ modelData, imageArray }: Section1IndexProps) {
  const modelName = modelData!.name;
  const uppercaseName = modelName?.split('-').join(' ').toUpperCase();
  const { items, steps } = useModelStore();
  const index = items.indexOf(modelName) + 1;
  const nextStep = steps[1]; // 'engine'

  return (
    <section className="min-h-screen bg-black relative z-10">
      {/* 이미지 영역 */}
      <article className="absolute top-[80px] right-[85px] w-[calc(100vw-300px)] grid grid-cols-1 justify-items-center">
        <figure className="max-h-[500px] w-[1000px] overflow-hidden">
          {modelData && <ImageViewer images={imageArray} />}
          {/* <img src="/images/detail/defaultCar.png" className="object-cover h-[100%] scale-150 " alt="" /> */}
        </figure>
        <h2 className="text-[40px] font-Hyundai-sans">{modelName && uppercaseName}</h2>
        <h3 className="text-[30px] text-[#a4a4a4]">
          시작가격 <span className="text-white font-Hyundai-sans">{modelData?.price}</span>
          <span className="text-[25px] text-white">원</span>
        </h3>
        <div className="text-[30px] flex gap-x-[60px] mt-[20px]">
          {/* <button className="w-[320px] h-[70px]">시승신청</button> */}
          <Link
            href={{ pathname: '/info', query: { model: modelName } }}
            className="w-[320px] h-[70px] font-thin border-2 border-white flex items-center justify-center"
          >
            시승신청
          </Link>
          {/* <button className="w-[320px] h-[70px] text-black bg-white">다음</button> */}
          <Link
            href={{ pathname: `/models/${index}/${nextStep}` }}
            className="w-[320px] h-[70px] text-black font-semibold bg-white flex items-center justify-center"
          >
            다음
          </Link>
        </div>
      </article>
    </section>
  );
}
