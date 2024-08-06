import Link from "next/link";

export default async function RootPage() {
  await new Promise(resolve => setTimeout(resolve, 1000*3));
  return (
    // <main className="container mx-auto mt-10 p-4 transition-color">
    //   <section className="text-center">
    //     <h1 className="text-4xl font-bold mb-4">멋사컴에 오신 것을 환영합니다!</h1>
    //     <p className="text-xl mb-6">다양한 주제의 커뮤니티와 활발한 소통을 위한 플랫폼입니다. 관심사에 따라 참여하고, 의견을 나누세요.</p>
    //     <Link href="/" className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600">커뮤니티 참여하기</Link>
    //   </section>

    //   <section className="mt-16">
    //     <h2 className="text-2xl font-bold mb-4 text-center">주요 기능</h2>
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //       <div className="bg-white p-6 rounded shadow dark:bg-gray-800">
    //         <h3 className="text-xl font-bold mb-2">정보 공유</h3>
    //         <p className="mb-4">다양한 정보와 지식을 공유하세요.</p>
    //         <Link href="/info" className="text-orange-500 hover:underline">바로가기</Link>
    //       </div>
    //       <div className="bg-white p-6 rounded shadow dark:bg-gray-800">
    //         <h3 className="text-xl font-bold mb-2">자유 게시판</h3>
    //         <p className="mb-4">자유롭게 이야기를 나누세요.</p>
    //         <Link href="/free" className="text-orange-500 hover:underline">바로가기</Link>
    //       </div>
    //       <div className="bg-white p-6 rounded shadow dark:bg-gray-800">
    //         <h3 className="text-xl font-bold mb-2">질문 게시판</h3>
    //         <p className="mb-4">궁금한 점을 질문하고 답변을 받아보세요.</p>
    //         <Link href="/qna" className="text-orange-500 hover:underline">바로가기</Link>
    //       </div>
    //     </div>
    //   </section>
    // </main>
    
    <main>
    <section id="event1">
      <article>
        <h2>Hyundai Mogans</h2>
        <article className="title_item">
          <h3>
            GEN<span>I</span>S<span>I</span>SU
          </h3>
          <h3 className="suyeon">YEON</h3>
        </article>
        <button>VIEW MORE</button>
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

    <section id="event2">
      <article>
        <h2>G70</h2>
        <h3>STANDARD</h3>
      </article>
      <section>
        <span className="ev2_prev"></span>
        <figure>
          <img src="/images/g70.png" alt=""/>
        </figure>
        <span className="ev2_next"></span>
      </section>
      
      <div className="ev2_bg">
        <button className="mainBtn">VIEW MORE</button>
      </div>

    </section>
    <section id="event3">
      <article>
        <h2>GENISISUYEON <span>EVENTS</span></h2>
        <h3>재니시수연에서 진행중인 다양한 이벤트를 소개합니다.</h3>
        <button className="mainBtn">VIEW MORE</button>
      </article>
    </section>

    <section id="event4">
      <span className="ev4_prev"></span>
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
  );
}
