// import { auth } from "@/auth";
import Link from 'next/link';

export default function Header({ isMain }: { isMain: string }) {
  // export default async function Header({ isMain }: {isMain:string}) {
  // const session = await auth();
  // console.log('session', session);

  return (
    <header className={isMain}>
      <h1 className="gnb_logo">
        <a href="/">
          <img src="/images/genisisu_logo_w.png" alt={'타이틀이미지'} />
        </a>
      </h1>
      <ul className="gnb">
        <li>
          <ul>
            <li>
              <Link href="/models">모델</Link>
            </li>
            <li>
              <Link href="/info">전시시승</Link>
            </li>
            <li>
              <Link href="#none">고객지원</Link>
            </li>
            <li>
              <Link href="#none">공지사항</Link>
            </li>
            <li>
              <Link href="#none">재니시수연</Link>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <Link href="/login">로그인</Link>
            </li>
            <li>
              <Link href="/signup">회원가입</Link>
            </li>
            <li>
              <Link href="#none">
                <img src="/images/menu_ham.png" alt="" />
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
}
