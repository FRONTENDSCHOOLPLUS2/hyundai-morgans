import { auth } from "@/auth";
import HeaderChild from "./HeaderChild";

export default async function Header() {
  const session = await auth();
  console.log('session', session);

  return (
      <header>
<<<<<<< Updated upstream
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
=======
        <HeaderChild/>
>>>>>>> Stashed changes
      </header>


  );
}