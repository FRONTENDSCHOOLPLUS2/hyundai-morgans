export default function OrderPage() {
  return (
    <>
      {/* 첫번째 섹션 : 360도 이미지 */}
      <section className="min-h-screen bg-black relative z-10">
        {/* 이미지 영역 */}
        <article className="absolute top-[80px] right-[85px] w-[calc(100vw-300px)] grid grid-cols-1 justify-items-center">
          <figure className="max-h-[500px] overflow-hidden">
            <img src="/images/detail/defaultCar.png" className="object-cover h-[100%] scale-150 " alt="" />
          </figure>
          <h2 className="text-[40px] font-Hyundai-sans">G90 Black</h2>
          <h3 className="text-[30px] text-[#a4a4a4]">
            시작가격 <span className="text-white font-Hyundai-sans">123,123,123</span>
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
          근본부터 새로운 완벽한 블랙을 구현하기 위해 서로  다른 질감과 광택의 조화, 반사되고 흡수되는 빛의 양까지 제네시스만의 방식으로 섬세하게 그리고 끊임없이 탐구했습니다. 
          제네시스의 디자인 철학인'역동적인 우아함'으로 재해석한 진정한 블랙의 경험을 제네시스 G90 Black으로 선사합니다.</p>
        </article>
        <figure className="w-[100%] h-[100%] overflow-hidden opacity-60">
          <video className="fixed inset-0 w-full" src="/video/main_video.mp4" muted={true} autoPlay={true} loop={true}/>
        </figure>
      </section>

      {/* 세번째 섹션 : 색상선택 옵션 */}
      <section className="min-h-screen bg-slate-900 relative p-[160px]">
        <nav className="text-[#666666] inline-flex flex-col gap-y-[40px]">
          <ul className="text-[30px] flex gap-x-[24px]">
            <li><a href="#none" className="text-white">글로시</a></li>
            <li><a href="#none">매트</a></li>
          </ul>
          <ul className="text-[24px] text-[#666666] flex flex-col gap-y-[10px]">
            <li><a href="#none" className="text-white">포레스트 블루 투톤</a></li>
            <li><a href="#none">포레스트뭐시기저시기</a></li>
            <li><a href="#none">포레스트뭐시기저시기</a></li>
            <li><a href="#none">포레스트뭐시기저시기</a></li>
            <li><a href="#none">포레스트뭐시기저시기</a></li>
            <li><a href="#none">포레스트뭐시기저시기</a></li>
            <li><a href="#none">포레스트뭐시기저시기</a></li>
            <li><a href="#none">포레스트뭐시기저시기</a></li>
            <li><a href="#none">포레스트뭐시기저시기</a></li>
          </ul>
        </nav>
        <figure className="absolute top-0 right-[-200px]">
          <img src="/images/detail/defaultCar.png" alt="" />
        </figure>
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#6A6C72] to-[#303135] opacity-30 blur"/>
      </section>

      {/* 네번째 섹션 : 외장디자인 설명 */}
      <section className="bg-black h-[540px] flex">
        <figure className="bg-slate-400 h-full flex-[1_0_900px] overflow-hidden">
          <img src="/images/detail/outerDesign.jpg" className="w-full h-full object-cover"  alt="" />
        </figure>
        <article className="flex-[1_1_auto] self-center px-[10%]">
            <h3 className="text-[50px] mb-[35px]">새로운 영감을 더하는 블랙</h3>
            <p className="text-[30px] text-[#888] leading-[1.2]">제네시스의 디자인 철학인 '역동적인 우아함'이 
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
            <h3 className="text-[50px] mb-[35px]">섬세함에서 드러나는 블랙의 정수</h3>
            <p className="text-[30px] text-[#888] leading-[1.2]">제네시스의 디자인 철학인 '역동적인 우아함'이 
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
          <img src="/images/detail/spec_1.png" alt="" />
          <h3 className="text-[30px] mb-[120px]">가솔린 3.5 터보 48V 일렉트릭 슈퍼차저</h3>
          <table className="text-[30px]">
            <tbody className="flex flex-col gap-y-[40px]">
              <tr className="flex gap-x-[240px]">
                <th className="w-[300px] text-left">엔진방식</th>
                <td className="text-left">3.5T-GDie-S/C</td>
              </tr>
              <tr className="flex gap-x-[240px]">
                <th className="w-[300px] text-left">엔진방식11111111</th>
                <td className="text-left">3.5T-GDie-S/C</td>
              </tr>
              <tr className="flex gap-x-[240px]">
                <th className="w-[300px] text-left">엔진방식</th>
                <td className="text-left">3.5T-GDie-S/C</td>
              </tr>
              <tr className="flex gap-x-[240px]">
                <th className="w-[300px] text-left">엔진방식11111111</th>
                <td className="text-left">3.5T-GDie-S/C</td>
              </tr>
              <tr className="flex gap-x-[240px]">
                <th className="w-[300px] text-left">엔진방식</th>
                <td className="text-left">3.5T-GDie-S/C</td>
              </tr>
              <tr className="flex gap-x-[240px]">
                <th className="w-[300px] text-left">엔진방식11111111</th>
                <td className="text-left">3.5T-GDie-S/C</td>
              </tr>
              <tr className="flex gap-x-[240px]">
                <th className="w-[300px] text-left">엔진방식</th>
                <td className="text-left">3.5T-GDie-S/C</td>
              </tr>
              <tr className="flex gap-x-[240px]">
                <th className="w-[300px] text-left">엔진방식11111111</th>
                <td className="text-left">3.5T-GDie-S/C</td>
              </tr>
          
             
              
              
            </tbody>
          </table>
        </article>
        <article className="flex flex-col items-center">
          <h2 className="text-[50px] mb-[120px]">제품 외장 스펙</h2>
          <div className="flex">
            <img src="/images/detail/spec_2_1.png" alt="" />
            <img src="/images/detail/spec_2_2.png" alt="" />
            <img src="/images/detail/spec_2_3.png" alt="" />
          </div>

        </article>
      </section>
    </>
  );
}
