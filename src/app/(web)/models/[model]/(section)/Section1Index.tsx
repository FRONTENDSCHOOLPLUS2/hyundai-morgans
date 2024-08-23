'use client';

import Link from 'next/link';
import { ImageViewer } from '../ImageViewer';
import { Cart, Product } from '@/types/product';
import { useModelStore } from '@/zustand/useModel';
import { usePathname, useRouter } from 'next/navigation';
import useLocalStorage from '@/hook/useLocalStorage';
import extractTitle from '@/data/extractTitle';
import Button from '@/components/Button';

interface Section1IndexProps {
  modelIndex: string;
  modelData: Product | null;
  imageArray: string[];
}

const initialValue = { model: '', price: 0 };

export default function Section1Index({ modelIndex, modelData, imageArray }: Section1IndexProps) {
  const { steps } = useModelStore();
  const [storedValue, setValue] = useLocalStorage<Cart>('cart', initialValue);
  const router = useRouter();
  const modelName = modelData ? modelData.name : storedValue.model;
  const modelPrice = modelData ? Number(modelData.price) : storedValue.price;

  const [title, subtitle] = extractTitle(modelName);
  const uppercaseName = title.toUpperCase() + ' ' + subtitle.toUpperCase();

  const clickNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const nextStep = `/models/${modelIndex}/${steps[1]}`; // 'engine'
    router.push(nextStep);
    setValue({
      model: modelName,
      price: modelPrice,
    });
  };

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
          시작가격{' '}
          <span className="text-white font-Hyundai-sans">{modelPrice.toLocaleString('ko-KR')}</span>
          <span className="text-[25px] text-white">원</span>
        </h3>
        <div className="flex gap-x-[20px] mt-[20px]">
          {/* <button className="w-[320px] h-[70px]">시승신청</button> */}
          <Link
            href={{ pathname: '/info', query: { model: modelName } }}
            className="w-[200px] h-[37px] font-thin border-2 border-white flex items-center justify-center"
          >
            시승신청
          </Link>
          <Button color="black" bgColor="white" size="custom" onClick={clickNext}>
            다음
          </Button>
        </div>
      </article>
    </section>
  );
}
