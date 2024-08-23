import Button from '@/components/Button';

interface HorizontalLayoutProps {
  price: string;
  clickNext: (e: React.MouseEvent<HTMLButtonElement>) => void;
  clickPrev: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// 1번레이아웃_기본 default 옵션 사진 가로
export default function HorizontalLayout({ price, clickNext, clickPrev }: HorizontalLayoutProps) {
  return (
    <>
      <section className="h-screen relative">
        <article className="flex absolute items-center w-[1440px] right-[50px] top-[200px]">
          <div className="flex flex-col mr-[40px]">
            <figure className="w-[650px]">
              <img src="/images/detail/optionSamp.png" className="w-full" alt="" />
            </figure>
            <h4 className="mb-[20px] self-center mt-[20px]">
              상기 이미지는 차량의 대표 이미지로 적용되어 있습니다.
            </h4>
          </div>

          <article className="w-[1200px] h-[400px] overflow-scroll border-t-[1px] border-b-[1px]  border-[#a4a4a4]">
            <table className="w-full">
              <tbody>
                <tr className="flex items-center text-[30px] gap-x-[86px] border-t-[1px] border-[#a4a4a4] py-[15px] pl-[15px]">
                  <td className="font-Hyundai-sans" data-value="">
                    (옵션명)
                  </td>
                  <td className="font-Hyundai-sans" data-value="">
                    (옵션1)
                  </td>
                </tr>
                <tr className="flex items-center text-[30px] gap-x-[86px] border-t-[1px] border-[#a4a4a4] py-[15px] pl-[15px]">
                  <td className="font-Hyundai-sans" data-value="">
                    (옵션명)
                  </td>
                  <td className="font-Hyundai-sans" data-value="">
                    (옵션2)
                  </td>
                </tr>
                <tr className="flex items-center text-[30px] gap-x-[86px] border-t-[1px] border-[#a4a4a4] py-[15px] pl-[15px]">
                  <td className="font-Hyundai-sans" data-value="">
                    (옵션명)
                  </td>
                  <td className="font-Hyundai-sans" data-value="">
                    (옵션3)
                  </td>
                </tr>
                <tr className="flex items-center text-[30px] gap-x-[86px] border-t-[1px] border-[#a4a4a4] py-[15px] pl-[15px]">
                  <td className="font-Hyundai-sans" data-value="">
                    (옵션명)
                  </td>
                  <td className="font-Hyundai-sans" data-value="">
                    (옵션4)
                  </td>
                </tr>
                <tr className="flex items-center text-[30px] gap-x-[86px] border-t-[1px] border-[#a4a4a4] py-[15px] pl-[15px]">
                  <td className="font-Hyundai-sans" data-value="">
                    (옵션명)
                  </td>
                  <td className="font-Hyundai-sans" data-value="">
                    (옵션5)
                  </td>
                </tr>
                <tr className="flex items-center text-[30px] gap-x-[86px] border-t-[1px] border-[#a4a4a4] py-[15px] pl-[15px]">
                  <td className="font-Hyundai-sans" data-value="">
                    (옵션명)
                  </td>
                  <td className="font-Hyundai-sans" data-value="">
                    (옵션6)
                  </td>
                </tr>
                {/* 가장 마지막 요소의 class에 border-b-[1px] 클래스를 넣어주세요 */}
                <tr className="flex items-center text-[30px] gap-x-[86px] border-t-[1px] border-[#a4a4a4] py-[15px] pl-[15px]">
                  <td className="font-Hyundai-sans" data-value="">
                    (옵션명)
                  </td>
                  <td className="font-Hyundai-sans" data-value="">
                    (옵션7)
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        </article>
        <article className="w-full absolute bottom-[120px] flex items-end z-10 justify-center ">
          <div className="flex gap-x-[20px]">
            <Button size="custom" onClick={clickPrev}>
              이전
            </Button>
            <Button color="black" bgColor="white" size="custom" onClick={clickNext}>
              다음
            </Button>
          </div>
          <div className="absolute right-12">
            <aside className="font-Hyundai-sans border-[1px] border-[#666666] flex flex-col justify-center px-[30px] pt-[10px]">
              <p className="text-[15px] text-[#a4a4a4]">예상가격</p>
              <span className="text-[30px] font-bold mt-[-10px]">
                {price}
                <span className="text-[20px]">원</span>
              </span>
            </aside>
          </div>
        </article>
      </section>
    </>
  );
}
