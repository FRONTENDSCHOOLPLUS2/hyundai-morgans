import VerticalLayout from './(layout)/VerticalLayout';
import HorizontalLayout from './(layout)/HorizontalLayout';
import ColorLayout from './(layout)/ColorLayout';
import { fetchOption, fetchProduct } from '@/data/fetch/productFetch';

const horizontalArray = ['package', 'add'];
const colorArray = ['interior', 'garnish']; // 'exterior'
const verticalArray = ['engine', 'drivetrain', 'passenger', 'wheel'];

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

      {colorArray.includes(params.option) && (
        <ColorLayout params={params} modelData={modelData} optionData={optionData} />
      )}

      {horizontalArray.includes(params.option) && (
        <HorizontalLayout params={params} modelData={modelData} optionData={optionData} />
      )}
    </>
  );
}
