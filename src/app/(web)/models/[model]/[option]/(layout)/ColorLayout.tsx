'use client';

import Button from '@/components/Button';

interface ColorLayoutProps {
  price: string;
  clickNext: (e: React.MouseEvent<HTMLButtonElement>) => void;
  clickPrev: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// 2번레이아웃_컬러칩 옵션
export default function ColorLayout({ price, clickNext, clickPrev }: ColorLayoutProps) {
  return (
    <>
      <section className="h-screen relative flex flex-col-reverse">
        <article className="flex flex-col absolute items-center w-[1440px] right-[50px] top-[50px]">
          <figure className="w-[700px]">
            <img
              src="/images/genesis-kr-gv70-facelift-sport-glossy-colors-uyuni-white-large.png"
              className="w-full"
              alt=""
            />
          </figure>
          <h4>상기 이미지는 차량의 대표 이미지로 적용되어 있습니다.</h4>

          <table>
            <tbody>
              <tr className="">
                <td className="pl-[15px]">(옵션분류)</td>
              </tr>
              <tr className="flex items-center text-[30px] gap-x-[86px] border-t-[1px] border-[#a4a4a4] pt-[30px] pl-[15px] mb-[68px]">
                <td className="font-Hyundai-sans">(옵션명)</td>
                <td>
                  <ul className="flex gap-x-[20px]">
                    <li className="w-[95px] h-[50px]">
                      <a href="#none" className="block bg-white w-[100%] h-[100%] rounded-sm">
                        {' '}
                      </a>
                    </li>
                    <li className="w-[95px] h-[50px]">
                      <a href="#none" className="block bg-white w-[100%] h-[100%] rounded-sm">
                        {' '}
                      </a>
                    </li>
                    <li className="w-[95px] h-[50px]">
                      <a href="#none" className="block bg-white w-[100%] h-[100%] rounded-sm">
                        {' '}
                      </a>
                    </li>
                    <li className="w-[95px] h-[50px]">
                      <a href="#none" className="block bg-white w-[100%] h-[100%] rounded-sm">
                        {' '}
                      </a>
                    </li>
                    <li className="w-[95px] h-[50px]">
                      <a href="#none" className="block bg-white w-[100%] h-[100%] rounded-sm">
                        {' '}
                      </a>
                    </li>
                    <li className="w-[95px] h-[50px]">
                      <a href="#none" className="block bg-white w-[100%] h-[100%] rounded-sm">
                        {' '}
                      </a>
                    </li>
                    <li className="w-[95px] h-[50px]">
                      <a href="#none" className="block bg-white w-[100%] h-[100%] rounded-sm">
                        {' '}
                      </a>
                    </li>
                    <li className="w-[95px] h-[50px]">
                      <a href="#none" className="block bg-white w-[100%] h-[100%] rounded-sm">
                        {' '}
                      </a>
                    </li>
                    <li className="w-[95px] h-[50px]">
                      <a href="#none" className="block bg-white w-[100%] h-[100%] rounded-sm">
                        {' '}
                      </a>
                    </li>
                    <li className="w-[95px] h-[50px]">
                      <a href="#none" className="block bg-white w-[100%] h-[100%] rounded-sm">
                        {' '}
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>

              <tr className="">
                <td className="pl-[15px]">(옵션분류)</td>
              </tr>
              <tr className="flex items-center text-[30px] gap-x-[86px] border-t-[1px] border-[#a4a4a4] pt-[30px] pl-[15px]">
                <td className="font-Hyundai-sans">(옵션명)</td>
                <td>
                  <ul className="flex gap-x-[20px]">
                    <li className="w-[95px] h-[50px]">
                      <a href="#none" className="block bg-white w-[100%] h-[100%] rounded-sm">
                        {' '}
                      </a>
                    </li>
                    <li className="w-[95px] h-[50px]">
                      <a href="#none" className="block bg-white w-[100%] h-[100%] rounded-sm">
                        {' '}
                      </a>
                    </li>
                    <li className="w-[95px] h-[50px]">
                      <a href="#none" className="block bg-white w-[100%] h-[100%] rounded-sm">
                        {' '}
                      </a>
                    </li>
                    <li className="w-[95px] h-[50px]">
                      <a href="#none" className="block bg-white w-[100%] h-[100%] rounded-sm">
                        {' '}
                      </a>
                    </li>
                    <li className="w-[95px] h-[50px]">
                      <a href="#none" className="block bg-white w-[100%] h-[100%] rounded-sm">
                        {' '}
                      </a>
                    </li>
                    <li className="w-[95px] h-[50px]">
                      <a href="#none" className="block bg-white w-[100%] h-[100%] rounded-sm">
                        {' '}
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
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
              <p className="text-[15px] text-[#a4a4a4]">예상 가격</p>
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
