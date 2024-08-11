export default function OrderPage () {
    return (
        <main className="text-white">

            {/* 첫번째 섹션 */}
            <section className="min-h-screen bg-black relative">

              {/* 상단 가로 드롭다운 메뉴 */}
              <nav className="flex items-end absolute top-[15px] left-[85px]">
                <button className="grid col-auto font-Hyundai-sans w-[230px] h-[70px] pt-[8px] px-[20px]">
                  <span className="col-start-1 text-[13px] self-end text-left ">GENISISUYEON</span>
                  <span className="col-start-1 text-[22px] self-start text-left font-black">G90 Black</span>
                  <div className="col-start-2 row-start-1 row-span-2 self-center justify-self-end w-[10px] h-[20px]">
                    <img src="/images/btn_next.png" className="object-cover" alt="" />
                  </div>
                </button>
                <ul className="flex">
                  <li>
                    <a href="#none" className="grid col-auto font-Hyundai-sans w-[150px] h-[50px] pt-[8px] px-[20px] border-[#777] border-[1px]">
                      <span className="col-start-1 text-[10px] self-end text-left ">GENISISUYEON</span>
                      <span className="col-start-1 text-[17px] self-start text-left font-medium">G90 Black</span>
                    </a>
                  </li>
                  <li>
                    <a href="#none" className="grid col-auto font-Hyundai-sans w-[150px] h-[50px] pt-[8px] px-[20px] border-[#777] border-[1px]">
                      <span className="col-start-1 text-[10px] self-end text-left ">GENISISUYEON</span>
                      <span className="col-start-1 text-[17px] self-start text-left font-medium">G90 Black</span>
                    </a>
                  </li>
                  <li>
                    <a href="#none" className="grid col-auto font-Hyundai-sans w-[150px] h-[50px] pt-[8px] px-[20px] border-[#777] border-[1px]">
                      <span className="col-start-1 text-[10px] self-end text-left ">GENISISUYEON</span>
                      <span className="col-start-1 text-[17px] self-start text-left font-medium">G90 Black</span>
                    </a>
                  </li>
                  <li>
                    <a href="#none" className="grid col-auto font-Hyundai-sans w-[150px] h-[50px] pt-[8px] px-[20px] border-[#777] border-[1px]">
                      <span className="col-start-1 text-[10px] self-end text-left ">GENISISUYEON</span>
                      <span className="col-start-1 text-[17px] self-start text-left font-medium">G90 Black</span>
                    </a>
                  </li>
                </ul>
              </nav>

              {/* 좌측 LNB */}
              <ul>
                <li><a href="#none">모델 상세</a></li>
                ``
              </ul>

              {/* 이미지 영역 */}
              <article>
                <h2>G90 Black</h2>
                <h3>시작가격 <span>123,123,123</span><span>원</span></h3>
                <div>
                  <button>시승신청</button>
                  <button>다음</button>
                </div>
              </article>
              <figure className="absolute inset-0">
                  <img src="/images/detail/genesis_detail_360samp01.jpg" className="object-cover" alt="" />
                </figure>
            </section> 

            {/* 두번째 섹션 : 동영상 or 이미지 fixed 후 text 스크롤링 */}
            <section>
              두번째섹션
            </section>

            {/* 세번째 섹션 : 색상선택 옵션 */}
            <section className="min-h-screen bg-black">
              세번째섹션
            </section>

            {/* 네번째 섹션 : 외장디자인 설명 */}
            <section>
              네번쩨 섹션
            </section>

            {/* 다섯번재 섹션 : 내장디자인 설명 */}
            <section>
              다섯번째 섹션
            </section>

            {/* 여섯번째 섹션(마지막) : 테이블 스펙 */}
            <section>
              마지막 섹션
            </section>
        </main>
    );
}