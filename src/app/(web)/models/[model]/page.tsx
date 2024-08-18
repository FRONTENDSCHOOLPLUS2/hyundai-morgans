import { fetchEssentialOption, fetchProduct, fetchProducts } from "@/data/fetch/productFetch";
import { ImageViewer } from "./ImageViewer";
import ModelColor from "./ModelColor";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export default async function OrderPage ({ params }: { params: { model: string } }) {
  const modelIndex: string = params.model;
  const ModelData = await fetchProduct(params.model);
  let imageArray = ModelData?.extra.detail.view360Images.map(image => SERVER + image.path) || [];

  const optionData = await fetchEssentialOption('20');

  return (
    <>
      {/* 첫번째 섹션 : 360도 이미지 */}
      <section className="min-h-screen bg-black relative z-10">
        {/* 이미지 영역 */}
        <article className="absolute top-[80px] right-[85px] w-[calc(100vw-300px)] grid grid-cols-1 justify-items-center">
          <figure className="max-h-[500px] w-[1000px] overflow-hidden">
            { ModelData && <ImageViewer images={imageArray} />}
            {/* <img src="/images/detail/defaultCar.png" className="object-cover h-[100%] scale-150 " alt="" /> */}
          </figure>
          <h2 className="text-[40px] font-Hyundai-sans">{ModelData?.name.split('-').join(' ').toUpperCase()}</h2>
          <h3 className="text-[30px] text-[#a4a4a4]">
            시작가격 <span className="text-white font-Hyundai-sans">{ModelData?.price}</span>
            <span className="text-[25px] text-white">원</span>
          </h3>
          <div className="text-[30px] flex gap-x-[60px] mt-[20px]">
            <button className="w-[320px] h-[70px]">시승신청</button>
            <button className="w-[320px] h-[70px] text-black bg-white">다음</button>
          </div>
        </article>
      </section>

      {/* 두번째 섹션 : 동영상 or 이미지 fixed 후 text 스크롤링 */}
      <section className="relative w-screen h-[430px] bg-black text-white z-[-1]">
        <article className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[1200px] text-center">
          <h2 className="text-[40px]">완벽한 <strong>블랙</strong>의 탄생</h2>
          <p className="text-[20px] font-light">가장 순수한 블랙은 가장 어둡지만, 그렇기에 제네시스의 본질을 돋보이게 합니다. 
          근본부터 새로운 완벽한 블랙을 구현하기 위해 서로  다른 질감과 광택의 조화, 반사되고 흡수되는 빛의 양까지 제네시스만의 방식으로 섬세하게 그리고 끊임없이 탐구했습니다. 제네시스의 디자인 철학인 &apos;역동적인 우아함&apos;으로 재해석한 진정한 블랙의 경험을 제네시스 G90 Black으로 선사합니다.</p>
        </article>
        <figure className="w-[100%] h-[100%] overflow-hidden opacity-60">
          <video className="fixed inset-0 w-full" src="/video/main_video.mp4" muted={true} autoPlay={true} loop={true}/>
        </figure>
      </section>

      {/* 세번째 섹션 : 색상선택 옵션 */}
      {optionData && <ModelColor optionData={optionData} modelIndex={modelIndex} />}

      {/* 네번째 섹션 : 외장디자인 설명 */}
      <section className="bg-black h-[540px] flex">
        <figure className="bg-slate-400 h-full flex-[1_0_900px] overflow-hidden">
          <img src="/images/detail/outerDesign.jpg" className="w-full h-full object-cover"  alt="" />
        </figure>
        <article className="flex-[1_1_auto] self-center px-[10%]">
            <h3 className="text-[40px] mb-[35px]">새로운 영감을 더하는 블랙</h3>
            <p className="text-[20px] text-[#888] leading-[1.2]">제네시스의 디자인 철학인 &apos;역동적인 우아함&apos;이 
              블랙을 더 깊이 있게 만들어 줍니다. 
              완벽한 블랙이 파라볼릭 라인1의 우아한 선을 
              뚜렷하게 강조해, 차량을 이루고 있는 
              곡선과 직선을 조화롭게 드러냅니다.
            </p>
        </article>
      </section>

      {/* 다섯번재 섹션 : 내장디자인 설명 */}
      <section className="bg-black min-h-[450px] flex">
        <article className="flex-[1_1_auto] self-center px-[10%]">
            <h3 className="text-[40px] mb-[35px]">섬세함에서 드러나는 블랙의 정수</h3>
            <p className="text-[20px] text-[#888] leading-[1.2]">제네시스의 디자인 철학인 &apos;역동적인 우아함&apos;이 
            세심하게 설계된 실내 요소들에 깊이 있는 블랙을 더해, 차분하면서도 우아한 실내 인테리어 디자인을 완성했습니다. 
            단순히 어둡기만 한 공간이 아닌, 한 차원 더 높은 블랙 공간을 구현하기 위해 각각 다른 톤과 명도를 적용해 입체감이 드러나도록 했습니다. 
            눈길이 잘 닿지 않는 작은 소재까지도 섬세하게 디자인함으로써 차별화된 블랙 경험을 선사합니다.
            </p>
        </article>
        <figure className="bg-slate-400 h-full flex-[1_0_900px] overflow-hidden">
          <img src="/images/detail/innerDesign.jpg" className="w-full h-full object-cover"  alt="" />
        </figure>
      </section>

      {/* 여섯번째 섹션(마지막) : 테이블 스펙 */}
      <section className="bg-white text-black px-[160px] py-[200px] box-border flex flex-col items-center gap-y-[270px]">
        <article className="flex flex-col items-center">

          <h2 className="text-[50px]">제품 엔진 스펙</h2>
          <table>
            
            <tbody>
              {/* 엔진이 3개일때 grid-cols-4, 2개일때는 grid-cols-3, 1개일때는 grid-cols-2 */}
              <tr className="grid grid-cols-2 gap-x-[120px]">
                <th className=""></th>

                {/* default - 엔진1개 */}
                <td className="col-span-2">
                  <img src="/images/detail/spec_1.png" className="w-full" alt="" />
                  <h3 className="text-[30px] mb-[120px] text-center">가솔린 3.5 터보 48V 일렉트릭 슈퍼차저</h3>
                </td>


                {/* 엔진이 1개일 때 써주세요 */}
                {/* <td className="col-span-2">
                  <img src="/images/detail/spec_1.png" className="w-full" alt="" />
                  <h3 className="text-[30px] mb-[120px] text-center">가솔린 3.5 터보 48V 일렉트릭 슈퍼차저</h3>
                </td> */}

                {/* 엔진이 2개일때 써주세요 */}
                {/* <td className="">
                  <img src="/images/detail/spec_1.png" className="w-full" alt="" />
                  <h3 className="text-[15px] mb-[120px] text-center">가솔린 3.5 터보 48V 일렉트릭 슈퍼차저</h3>
                </td>
                <td className="">
                  <img src="/images/detail/spec_1.png" className="w-full" alt="" />
                  <h3 className="text-[15px] mb-[120px] text-center">가솔린 3.5 터보 48V 일렉트릭 슈퍼차저</h3>
                </td> */}


                {/* 엔진이 3개일때 써주세요 */}
                {/* <td className="">
                  <img src="/images/detail/spec_1.png" className="w-full" alt="" />
                  <h3 className="text-[13px] mb-[120px] text-center">가솔린 3.5 터보 48V 일렉트릭 슈퍼차저</h3>
                </td> */}
              </tr>
            </tbody>
          </table>


          <table className="text-[30px]">
            <tbody className="flex flex-col gap-y-[40px]">
              {/* 2번째, 3번째 엔진이 추가될때마다 td를 복사해서 넣어주셔야 합니다*/}
              {/* 엔진이 3개일때 tr마다 grid-cols-4, 2개일때는 grid-cols-3, 1개일때는 grid-cols-2 */}
              <tr className="grid grid-cols-2 gap-x-[120px]">
                <th className="text-left">엔진방식</th>
                <td className="text-center">3.5T-GDie-S/C</td>
              </tr>
              <tr className="grid grid-cols-2 gap-x-[120px]">
                <th className="text-left">엔진방식</th>
                <td className="text-center">3.5T-GDie-S/C</td>
              </tr>

            </tbody>
          </table>
        </article>
        <article className="flex flex-col items-center">
          <h2 className="text-[50px] mb-[120px]">제품 외장 스펙</h2>
          <div className="flex">
            {/* 엔진 갯수가 추가될때마다 img 태그 복사해서 경로붙여넣어주세요 */}
            <img src="/images/detail/spec_2_1.png" alt="" />
            <img src="/images/detail/spec_2_2.png" alt="" />
            <img src="/images/detail/spec_2_3.png" alt="" />
          </div>

        </article>
      </section>
    </>
  );
}
