'use client';

import Button from '@/components/Button';
import useLocalStorage from '@/hook/useLocalStorage';
import { Cart, Option, OptionItem, Product } from '@/types/product';
import { useModelStore } from '@/zustand/useModel';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface VerticalLayoutProps {
  params: {
    model: string;
    option: string;
  };
  modelData: Product | null;
  optionData: Option[];
}

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

// 3번레이아웃_중앙 정렬 옵션
export default function VerticalLayout({ params, modelData, optionData }: VerticalLayoutProps) {
  const router = useRouter();
  const optionName = params.option;
  const modelName = modelData?.name || '';
  const initialPrice = modelData?.price || 0;
  const modelOptionData = optionData[0].extra.option[optionName][modelName];

  const [storedValue, setValue] = useLocalStorage<Cart>('cart', {
    model: modelName,
    price: initialPrice,
  });
  // price = storedValue.price.toLocaleString('ko-KR');
  // console.log(storedValue);

  const defaultImage = SERVER + modelOptionData[0].image?.path || '';
  const [optionState, setOptionState] = useState<{
    node: ReactNode;
    prevPrice: number;
    newPrice: number;
    imageSource: string;
  }>({
    node: null,
    prevPrice: storedValue.price,
    newPrice: storedValue.price,
    imageSource: defaultImage,
  });
  const defaultOptionItem = modelOptionData[0].topText;
  const clickedOptionRef = useRef<Set<string>>(new Set([defaultOptionItem]));

  const { steps } = useModelStore();
  const currentStep = steps.indexOf(optionName);
  const nextStep = steps[currentStep + 1];
  const prevStep = steps[currentStep - 1] === 'detail' ? '' : steps[currentStep - 1];

  const handleOptionClick = (optionName: string, optionIndex: number, optionPrice: number) => {
    clickedOptionRef.current.clear();
    clickedOptionRef.current.add(optionName);
    const newImage = SERVER + modelOptionData[optionIndex].image?.path;
    const newPrice =
      optionPrice !== 0
        ? optionState.newPrice + optionPrice
        : optionState.newPrice === storedValue.price
        ? optionState.newPrice
        : optionState.newPrice - optionPrice;
    setOptionState({
      node: generateOptionButton(),
      prevPrice: optionState.newPrice,
      newPrice: newPrice,
      imageSource: newImage,
    });
  };

  const isOptionActive = (option: string) =>
    clickedOptionRef.current.has(option) ? 'text-white' : 'text-[#666666]';

  const generateOptionButton = (): ReactNode => {
    const lastIndex = modelOptionData.length - 1;
    return modelOptionData.map((item: OptionItem, index: number) => {
      const { title, topText, price } = item;
      const isBolder = index === lastIndex ? 'border-b-[1px]' : '';
      return (
        <tr
          key={index}
          onClick={() => handleOptionClick(topText, index, price)}
          className={`flex items-center text-[30px] ${isOptionActive(
            topText
          )} gap-x-[86px] border-t-[1px] ${isBolder} border-[#a4a4a4] py-[15px] pl-[15px] cursor-pointer`}
        >
          <td className="font-Hyundai-sans" data-value="">
            {topText}
          </td>
          <td className="font-Hyundai-sans" data-value="">
            + {price.toLocaleString('ko-KR')} 원
          </td>
        </tr>
      );
    });
  };

  const clickButton = (e: React.MouseEvent<HTMLButtonElement>, direction?: string) => {
    e.preventDefault();
    const step = direction === 'prev' ? prevStep : nextStep;
    router.push(`/models/${params.model}/${step}`);
    setValue({
      model: modelName,
      price: optionState.newPrice,
    });
  };

  useEffect(() => {
    setOptionState((prevState) => ({
      ...prevState,
      node: generateOptionButton(),
    }));
  }, []);

  return (
    <>
      <section className="h-screen relative flex flex-col-reverse">
        <article className="flex flex-col absolute items-center w-[1440px] right-[50px] top-[50px]">
          <figure className="w-[650px]">
            <img src={optionState.imageSource} className="w-full" alt="" />
          </figure>
          <h4 className="mb-[20px]">상기 이미지는 차량의 대표 이미지로 적용되어 있습니다.</h4>

          <article className="w-[1200px] h-[165px] overflow-scroll">
            <table className="w-full">
              <tbody>
                {/* 옵션 항목 렌더링 */}
                {optionState.node}
              </tbody>
            </table>
          </article>
        </article>
        <article className="w-full absolute bottom-[120px] flex items-end z-10 justify-center ">
          <div className="flex gap-x-[20px]">
            <Button size="custom" onClick={(e) => clickButton(e, 'prev')}>
              이전
            </Button>
            <Button color="black" bgColor="white" size="custom" onClick={clickButton}>
              다음
            </Button>
          </div>
          <div className="absolute right-12">
            <aside className="font-Hyundai-sans border-[1px] border-[#666666] flex flex-col justify-center px-[30px] pt-[10px]">
              <p className="text-[15px] text-[#a4a4a4]">예상가격</p>
              <span className="text-[30px] font-bold mt-[-10px]">
                {optionState.newPrice.toLocaleString('ko-KR')}
                <span className="text-[20px] align-middle"> 원</span>
              </span>
            </aside>
          </div>
        </article>
      </section>
    </>
  );
}
