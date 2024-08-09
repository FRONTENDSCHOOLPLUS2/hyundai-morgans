import Link from "next/link";
import Theme from "../Theme";
import { auth } from "@/auth";
import MainMenu from "./MainMenu";
import LoginInfo from "./LoginInfo";

export default async function Header() {
  const session = await auth();
  console.log('session', session);

  return (
    // ---- 기존 헤더 ----
    // <header className="px-8 min-w-80 bg-slate-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 transition-color duration-500 ease-in-out">
    //   <nav className="flex flex-wrap justify-center items-center p-4 md:flex-nowrap md:justify-between">
    //     <div className="w-1/2 order-1 md:w-auto">
    //       <Link href="/" className="flex items-center gap-2">
    //         <img className="mr-3 h-6 sm:h-9" src="/images/favicon.svg" width="40" height="40" alt="로고 이미지" />
    //         <span className="text-lg font-bold">멋사컴</span>
    //       </Link>
    //     </div>
        
    //     <MainMenu />

    //     <div className="w-1/2 order-1 flex justify-end items-center md:order-2 md:w-auto">

    //       { session?.user ? (
    //         <LoginInfo name={session.user.name!} image={session.user.image} />
    //       ) : (
    //         <div className="flex justify-end">
    //           <Link href="/login" className="bg-orange-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">로그인</Link>
    //           <Link href="/signup" className="bg-gray-900 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">회원가입</Link>
    //         </div>
    //       ) }

    //       <Theme />

    //     </div>
    //   </nav>
    // </header>

      <header>
        <h1 className="gnb_logo">
          <a href="#none"><img src="/images/genisisu_logo_w.png" alt={'타이틀이미지'}/> </a>
        </h1>
        <ul className="gnb">
          <li>
            <ul>
              <li><a href="/models">모델</a></li>
              <li><a href="#none">전시시승</a></li>
              <li><a href="#none">고객지원</a></li>
              <li><a href="#none">공지사항</a></li>
              <li><a href="#none">재니시수연</a></li>
            </ul>
          </li>
          <li>
            <ul>
              <li><a href="#none">로그인</a></li>
              <li><a href="#none">회원가입</a></li>
              <li><a href="#none"><img src="/images/menu_ham.png" alt=""/></a></li>
            </ul>
          </li>
        </ul>
      </header>


  );
}