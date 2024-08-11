export default function OrderPage() {
  return (
    <>
      {/* 첫번째 섹션 : 360도 이미지 */}
      <section className="min-h-screen bg-black relative">
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
      <section>두번째섹션</section>

      {/* 세번째 섹션 : 색상선택 옵션 */}
      <section className="min-h-screen bg-black">세번째섹션</section>

      {/* 네번째 섹션 : 외장디자인 설명 */}
      <section>네번쩨 섹션</section>

      {/* 다섯번재 섹션 : 내장디자인 설명 */}
      <section>다섯번째 섹션</section>

      {/* 여섯번째 섹션(마지막) : 테이블 스펙 */}
      <section>마지막 섹션</section>
    </>
  );
}
