import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import MainPagenation from "../components/mainPageComponents/MainPagenation";
import Event2 from "@/components/mainPageComponents/Event2";
import { fetchProducts } from "@/data/fetch/productFetch";
import Event4 from "@/components/mainPageComponents/Event4";
import Event1 from "@/components/mainPageComponents/Event1";


export default async function RootPage() {
  const res = await fetchProducts();
  const modelData = res.filter(item => !item.extra.category.includes("option"))

  return ( 
    <>
      <MainPagenation/>
      <main className="mainPage">

      <Event1/>
      <Event2 data={modelData}/>
      <section id="event3">
        <article>
          <h2>GENISISUYEON <span>EVENTS</span></h2>
          <h3>재니시수연에서 진행중인 다양한 이벤트를 소개합니다.</h3>
          <button className="mainBtn">VIEW MORE</button>
        </article>
      </section>

      <Event4/>


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
