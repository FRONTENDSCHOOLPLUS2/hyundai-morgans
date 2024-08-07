'use client'

import './css/globals.css';

import { Metadata } from 'next';
import HeaderMain from '@/components/layout/HeaderMain';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

// server component에서만 사용 가능
// export const metadata: Metadata = {
//   // url 관련 설정시 metadata 사용될 기본 경로 지정
//   metadataBase: new URL('https://next.fesp.shop'),
//   title: '현대모건스',
//   openGraph: {
//     title: '현대모건스 - 제니시수연',
//     description: 'Hyundai-morgans GenisiSuyeon',
//     url: '/'
//   }
// };

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  const url = usePathname();
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <meta name="description" content="제니시수연 구매 홍보 페이지" /> */}
        <meta name="keywords" content="제니시수연, 재니시수, 현대모간스, 현대모건스" />
        <meta name="author" content="김모건, 이수연, 류재준" />

        <meta property="og:title" content="현대모간스 - 제니시수연" />
        <meta property="og:description" content="유용한 정보를 나누고 공유하세요." />
        <meta property="og:image" content="/images/fesp.webp" />
        <meta property="og:url" content="https://community.fesp.shop" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="현대모간스" />
      </head>
      <body>
        {url === "/" ? <HeaderMain/> : <Header/>}
          {children}
        <Footer/>
      </body>
    </html>
  );
}