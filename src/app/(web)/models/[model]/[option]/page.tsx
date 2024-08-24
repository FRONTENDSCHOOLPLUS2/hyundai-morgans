import VerticalLayout from './(layout)/VerticalLayout';
import HorizontalLayout from './(layout)/HorizontalLayout';
import ColorLayout from './(layout)/ColorLayout';
import { fetchOption, fetchProduct } from '@/data/fetch/productFetch';

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

export default async function OptionPage({
  params,
}: {
  params: { model: string; option: string };
}) {
  const modelData = await fetchProduct(params.model);
  const optionData = (await fetchOption(params.option)) || [];
  // console.log(OptionData);
  // if (optionData !== null && modelData !== null) {
  //   optionData[0].extra.option[params.option][modelData.name].map((item) => {
  //     console.log(item.price);
  //   });
  // }

  return (
    <>
      {verticalArray.includes(params.option) && (
        <VerticalLayout params={params} modelData={modelData} optionData={optionData} />
      )}

      {/* {horizontalArray.includes(params.option) && (
        <HorizontalLayout price={price} clickNext={clickNext} clickPrev={clickPrev} />
      )} */}

      {/* {colorArray.includes(params.option) && (
        <ColorLayout price={price} clickNext={clickNext} clickPrev={clickPrev} />
      )} */}
    </>
  );
}
