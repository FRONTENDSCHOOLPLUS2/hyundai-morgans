'use client'

import { useEffect, useState } from "react"

export default function MainPagenation (){
    const [liLength, setLiLength] = useState(0);
    const [viewHeight, setViewHeight] = useState(0);
    const [currScroll, setCurrScroll] = useState(0);
    const [scrollTf, setScrollTf] = useState(true);


    // 현재 스크롤값과 브라우저 height값, li의 갯수 지정
    useEffect(()=>{
      function checkScroll() {setCurrScroll(window.scrollY)}; 
      function checkHeight(){setViewHeight(window.innerHeight)};

      // 첫 마운트시 지정
      checkScroll();
      checkHeight();


      window.addEventListener('scroll',checkScroll);
      window.addEventListener('resize',checkHeight);

      return () => {
        window.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkHeight);
      };
    },[])

    // 스크롤값과 브라우저 height값을 실시간으로 비교하여 스크롤 할때마다 checkTf에 boolean값 지정
    useEffect(()=>{
      function checkTf(){setScrollTf(currScroll <= viewHeight)};
      window.addEventListener('scroll',checkTf);
    },[currScroll,viewHeight])

    
    // 첫마운트시 li 전체 갯수와 두번째 section의 높이값 지정
    useEffect(()=>{
      const liLen = document.querySelectorAll('.main_pagenation li')
      setLiLength(liLen.length);
      const ev2 : HTMLSelectElement | null  = document.querySelector('#event2')
      let ev2H = ev2!.offsetTop;
    

      // 마우스 휠에 따른 함수
      const handleWheel = (e:WheelEvent) => {
        e.preventDefault();
        let wheelTimer;
        if (e.deltaY > 0) {
          clearTimeout(wheelTimer);
          wheelTimer = setTimeout(()=>{
            window.scrollTo({
              top:ev2H,
              left:0,
              behavior:'smooth'
            });

            // 마우스 휠이 다 멈추고 이동한 뒤에 scroll rock을 풀어주는(scrollTf를 false로 변경) 콜백
            setTimeout(()=>{
              setScrollTf(false)
            },1000)
          },300)
        }
      }

      // 현재 스크롤값과 2번째 section까지의 height값을 비교하여 true이면 마우스 휠 이벤트 실행, 조건을 벗어나면 이벤트 remove
      if (scrollTf) {
        window.addEventListener('wheel',handleWheel, {passive:false})
      } 
      return() => {
        window.removeEventListener('wheel',handleWheel)
      };

    },[scrollTf])

    // LNB 클릭 이벤트
    const liPaging = (e:React.MouseEvent<HTMLAnchorElement>, i:number) :void => {
      e.preventDefault();
      window.scrollTo({
        top:viewHeight * (i-1),
        left:0,
        behavior:'smooth'
      })
    }

  return(
    <ul className="main_pagenation">
      {/* section 갯수가 정해져잇는 정적인 페이지라 반복문 돌지 않았음 */}
      <li><a href="#none" onClick={(e) => liPaging(e,1)}></a></li>
      <li><a href="#none" onClick={(e) => liPaging(e,2)}></a></li>
      <li><a href="#none" onClick={(e) => liPaging(e,3)}></a></li>
      <li><a href="#none" onClick={(e) => liPaging(e,4)}></a></li>
      <li><a href="#none" onClick={(e) => liPaging(e,5)}></a></li>
    </ul> 
  )
}