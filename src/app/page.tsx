import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import MainPagenation from "../components/mainPageComponents/MainPagenation";
import Event2 from "@/components/mainPageComponents/Event2";
import { fetchProducts } from "@/data/fetch/productFetch";


export default async function RootPage() {
  const res = await fetchProducts();
  const modelData = res.filter(test => test.extra.category.includes("promotion"))
  // const modelImg = data.filter(test => test.extra.category.includes("promotion")).map((modelImage) => modelImage.mainImages[0].path)




  return ( 
    <>
      <MainPagenation/>
      <main className="mainPage">
      <section id="event1">
        <article>
          <h2>Hyundai Mogans</h2>
          <article className="title_item">
            <h3>
              GEN<span>I</span>S<span>I</span>SU
            </h3>
            <h3 className="suyeon">YEON</h3>
          </article>
          <button className="mainBtn">VIEW MORE</button>
        </article>

        <figure>
          <video src="/video/main_video.mp4" muted={true} autoPlay={true} loop={true}></video>
        </figure>

        <aside className="progress_bar">
          <span>G90 BLACK</span>
          <div className="timeline">
            <div></div>
          </div>
          <span>CONCEPT CAR</span>
        </aside>
      </section>

      <Event2 data={modelData}/>
      <section id="event3">
        <article>
          <h2>GENISISUYEON <span>EVENTS</span></h2>
          <h3>재니시수연에서 진행중인 다양한 이벤트를 소개합니다.</h3>
          <button className="mainBtn">VIEW MORE</button>
        </article>
      </section>

      <section id="event4">
        <div className="ev4_wrap">
          <article>
            <h2>GENISISUYEON <span>AWARDS</span></h2>
            <h3>재니시수연의 고유한 감각을 반영한 현대적 공간으로 여러분을 초대합니다.<br/>
              제네시스에 관한 다양한 체험으로 당신만의 제네시스를 찾는 여정을 지원합니다.</h3>
            <button className="mainBtn">VIEW MORE</button>
          </article>
          <figure>
            <img src="" alt=""/>
          </figure>
          <ul className="ev4_navi">
            <li className="on"><a href="#none"></a></li>
            <li><a href="#none"></a></li>
            <li><a href="#none"></a></li>
            <li><a href="#none"></a></li>
          </ul>
        </div>
        <span className="ev4_next"></span>
        <span className="ev4_prev"></span>
        <div className="bgImg"></div>
      </section>


      <section id="event5">
        <div className="ev5_wrap">
          <h2>CONTACT US</h2>
          <form action="#none">
            <label htmlFor="ev5_name"><span>NAME</span></label>
            <input type="text" id="ev5_name" name=""/>
            
            <label htmlFor="ev5_phone"><span>PHONE</span></label>
            <input type="text" id="ev5_phone" name=""/>
            
            <label htmlFor="ev5_model"><span>MODEL</span></label>
            <select id="ev5_model" name="">
              <option value="m1">모델1</option>
              <option value="m2">모델2</option>
              <option value="m3">모델3</option>
            </select>

            <label htmlFor="ev5_address"><span>ADDRESS</span></label>
            <select id="ev5_address" name="">
              <option value="ad1">주소1</option>
              <option value="ad2">주소2</option>
              <option value="ad3">주소3</option>
            </select>
        
            <label htmlFor="ev5_details"><span>DETAILS</span></label>
            <textarea id="ev5_details" name="" placeholder="원하는 상담내용을 입력해주세요"></textarea>
      
            <button type="submit" className="mainBtn">SEND</button>
          </form>
        </div>
        <div className="bgImg"></div>
      </section>
    </main>
    </>
  );
}
