'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ModelLnb ({params}: {params: { model: string }}) {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path ? 'text-white' : '';
  return(
    <ul className="absolute top-[220px] left-[80px] text-[#666666] flex flex-col gap-y-2.5 font-light text-xl z-20">
    {/* To.모건 : 활성화된 페이지의 title에 text-white class를 붙여주세요 */}
      <li className={isActive(`/models/${params.model}`)}>
        <Link href={`/models/${params.model}`}>모델 상세</Link>
      </li>
      <li className={isActive(`/models/${params.model}/engine`)}>
        <Link href={`/models/${params.model}/engine`}>엔진 타입</Link>
      </li>
      <li className={isActive(`/models/${params.model}/drivetrain`)}>
        <Link href={`/models/${params.model}/drivetrain`}>구동 타입</Link>
      </li>
      <li className={isActive(`/models/${params.model}/passenger`)}>
        <Link href={`/models/${params.model}/passenger`}>시트 구성</Link>
      </li>
      <li className={isActive(`/models/${params.model}/exterior`)}>
        <Link href={`/models/${params.model}/exterior`}>외장 컬러</Link>
      </li>
      <li className={isActive(`/models/${params.model}/interior`)}>
        <Link href={`/models/${params.model}/interior`}>내장디자인 & 컬러</Link>
      </li>
      <li className={isActive(`/models/${params.model}/garnish`)}>
        <Link href={`/models/${params.model}/garnish`}>내장 가니쉬</Link>
      </li>
      <li className={isActive(`/models/${params.model}/wheel`)}>
        <Link href={`/models/${params.model}/wheel`}>휠 & 타이어</Link>
      </li>
      <li className={isActive(`/models/${params.model}/package`)}>
        <Link href={`/models/${params.model}/package`}>패키지</Link>
      </li>
      <li className={isActive(`/models/${params.model}/add`)}>
        <Link href={`/models/${params.model}/add`}>선택 품목</Link>
      </li>
      <li className={isActive(`/models/${params.model}/payment`)}>
        <Link href={`/models/${params.model}/payment`}>결제</Link>
      </li>
    </ul>
  )
}