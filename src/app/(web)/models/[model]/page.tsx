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
          <p className="text-[20px] font-light">가장 순수한 블랙은 가장 어둡지만, 그렇기에 제네시스의 본질을 돋보이게 합니다. 근본부터 새로운 완벽한 블랙을 구현하기 위해 서로  다른 질감과 광택의 조화, 반사되고 흡수되는 빛의 양까지 제네시스만의 방식으로 섬세하게 그리고 끊임없이 탐구했습니다. 제네시스의 디자인 철학인'역동적인 우아함'으로 재해석한 진정한 블랙의 경험을 제네시스 G90 Black으로 선사합니다.</p>
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
        <figure className="absolute right-0">
          <img src="/images/detail/defaultCar.png" alt="" />
        </figure>
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#6A6C72] to-[#303135] opacity-30 blur"/>

        {/* 
                  
          position: absolute;
          width: 2518px;
          height: 274px;
          left: -299px;
          top: 2095px;

          background: linear-gradient(180deg, #6A6C72 0%, #303135 100%);
          opacity: 0.3;
          box-shadow: 6px 4px 4px rgba(0, 0, 0, 0.25);
          filter: blur(6.3px);

        
        
        */}
      </section>

      {/* 네번째 섹션 : 외장디자인 설명 */}
      <section className="bg-indigo-950">네번쩨 섹션</section>

      {/* 다섯번재 섹션 : 내장디자인 설명 */}
      <section>다섯번째 섹션</section>

      {/* 여섯번째 섹션(마지막) : 테이블 스펙 */}
      <section className="bg-indigo-950">마지막 섹션</section>
    </>
  );
}
