'use client';

import { useRouter } from 'next/navigation';
import { useModelStore } from '@/zustand/useModel';
import useLocalStorage from '@/hook/useLocalStorage';
import { Cart } from '@/types/product';
import VerticalLayout from './(layout)/VerticalLayout';
import HorizontalLayout from './(layout)/HorizontalLayout';
import ColorLayout from './(layout)/ColorLayout';

interface OptionList {
  [key: string]: string;
}

const optionList: OptionList = {
  detail: '모델 상세',
  engine: '엔진 타입',
  drivetrain: '구동 타입',
  passenger: '시트 구성',
  exterior: '외장 컬러',
  interior: '내장디자인 & 컬러',
  garnish: '내장가니쉬',
  wheel: '휠 & 타이어',
  package: '패키지',
  add: '선택 품목',
  payments: '결제',
};
const horizontalArray = ['package', 'add'];
const colorArray = ['passenger', 'exterior', 'interior', 'garnish', 'wheel'];
const verticalArray = ['engine', 'drivetrain', 'wheel'];

export default function OptionPage({ params }: { params: { model: string; option: string } }) {
  const router = useRouter();
  const { steps } = useModelStore();
  const modelName = steps[Number(params.model) - 1];
  console.log(modelName);
  const currentStep = steps.indexOf(params.option);
  const nextStep = steps[currentStep + 1];
  const prevStep = steps[currentStep - 1] === 'detail' ? '' : steps[currentStep - 1];

  const [storedValue, setValue] = useLocalStorage<Cart>('cart');
  const price = storedValue.price.toLocaleString('ko-KR');
  // console.log(storedValue);

  const clickNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(`/models/${params.model}/${nextStep}`);
  };

  const clickPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(`/models/${params.model}/${prevStep}`);
  };

  // console.log(params.option in verticalArray);
  // console.log(params.option);

  return (
    <>
      {verticalArray.includes(params.option) && (
        <VerticalLayout
          price={price}
          model={params.model}
          clickNext={clickNext}
          clickPrev={clickPrev}
        />
      )}

      {horizontalArray.includes(params.option) && (
        <HorizontalLayout price={price} clickNext={clickNext} clickPrev={clickPrev} />
      )}

      {colorArray.includes(params.option) && (
        <ColorLayout price={price} clickNext={clickNext} clickPrev={clickPrev} />
      )}
    </>
  );
}
