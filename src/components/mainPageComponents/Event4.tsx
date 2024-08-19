'use client';

import { useEffect, useRef, useState } from "react";

export default function Event4 () {

  const [index, setIndex] = useState(0);
  const ulSel = useRef(null)
  let liItem;

  const bgUrl = [
    "/images/ev4_bg.png",
    "/images/ev4_bg_02.jpg",
    "/images/ev4_bg_03.jpg",
    "/images/ev4_bg_04.jpg",
  ]


  const selClass = (index) => {
    if (ulSel.current) {
      liItem = ulSel.current.querySelectorAll('li')
      liItem.forEach((item,i) => {
        if ( i === index) {
          item.classList.add('on')
        } else {
          item.classList.remove('on')
        }
      })
    }
  }

  useEffect(()=>{
    selClass(index)
    setTimeout(()=>{
      setIndex((prev) => {
        if (prev < liItem.length -1) {
          return prev + 1
        }
        return prev = 0;
      })
    },3500)


  },[index])
  const handleIndexNumPlus = () => {
    setIndex((prev) => {
      if (prev < liItem.length -1) {
        return prev + 1
      }
      return prev = 0;
    })
  }
  const handleIndexNumMinus = () => {
    setIndex((prev) => {
      if (prev <= 0) {
        return 0;
      }
      return prev - 1;
    });
  }


  return(
    <section id="event4">
      <article>
        <div className="ev4_slide" style={{left:`${-100 * index}%`}}>

          <div className="ev4_wrap">
            <article>
              <h2>GENISISUYEON <span>AWARDS</span></h2>
              <h3>재니시수연의 고유한 감각을 반영한 현대적 공간으로 여러분을 초대합니다.<br/>
                제네시스에 관한 다양한 체험으로 당신만의 제네시스를 찾는 여정을 지원합니다.</h3>
              <button className="mainBtn">VIEW MORE{index}</button>
            </article>
            <figure>
              <img src="" alt=""/>
            </figure>
          </div>

          <div className="ev4_wrap">
            <article>
              <h2>SECONDS <span>AWARDS</span></h2>
              <h3>전기차, 그 이상의 시작<br/>
                제네시스에 관한 다양한 체험으로 당신만의 제네시스를 찾는 여정을 지원합니다.</h3>
              <button className="mainBtn">VIEW MORE{index}</button>
            </article>
            <figure>
              <img src="" alt=""/>
            </figure>
          </div>


          <div className="ev4_wrap">
            <article>
              <h2>THIRD <span>AWARDS</span></h2>
              <h3>당신과의 교감을 위해<br/>
              미래를 위한 선택과 감성적 가치의 공존을 추구하는 GV60</h3>
              <button className="mainBtn">VIEW MORE{index}</button>
            </article>
            <figure>
              <img src="" alt=""/>
            </figure>
          </div>


        <div className="ev4_wrap">
            <article>
              <h2>LAST <span>AWARDS</span></h2>
              <h3>전기차, 그 이상의 시작<br/>
                제네시스에 관한 다양한 체험으로 당신만의 제네시스를 찾는 여정을 지원합니다.</h3>
              <button className="mainBtn">VIEW MORE{index}</button>
            </article>
            <figure>
              <img src="" alt=""/>
            </figure>
          </div>


        </div>

       
        
        
      </article>
  
      
  
      <ul className="ev4_navi" ref={ulSel}>
        <li className=""><a href="#none"></a></li>
        <li><a href="#none"></a></li>
        <li><a href="#none"></a></li>
        <li><a href="#none"></a></li>
      </ul>
      <span className="ev4_next" onClick={handleIndexNumPlus}></span>
      <span className="ev4_prev" onClick={handleIndexNumMinus}></span>
      <div className="bgImg" style={{backgroundImage: `url(${bgUrl[index]})`}}></div>
    </section>
  )
}