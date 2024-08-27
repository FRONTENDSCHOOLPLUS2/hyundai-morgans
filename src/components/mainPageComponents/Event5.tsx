import AddBoard from '../drive/AddBoard';

// export default function Event5({ boardName, postId }: { postId: string; boardName: string }) {
//   return (
//     <section id="event5">
//       <div className="ev5_wrap">
//         <h2>시승신청</h2>
//         <AddBoard params={{ boards: 'drive' }} />
//         <form action="#">
//           <label htmlFor="ev5_name">
//             <span>NAME</span>
//           </label>
//           <input type="text" id="ev5_name" name="" />

//           <label htmlFor="ev5_phone">
//             <span>PHONE</span>
//           </label>
//           <input type="text" id="ev5_phone" name="" />

//           <label htmlFor="ev5_model">
//             <span>MODEL</span>
//           </label>
//           <select id="ev5_model" name="">
//             <option value="m1">모델1</option>
//             <option value="m2">모델2</option>
//             <option value="m3">모델3</option>
//           </select>

//           <label htmlFor="ev5_address">
//             <span>ADDRESS</span>
//           </label>
//           <select id="ev5_address" name="">
//             <option value="ad1">주소1</option>
//             <option value="ad2">주소2</option>
//             <option value="ad3">주소3</option>
//           </select>

//           <label htmlFor="ev5_details">
//             <span>DETAILS</span>
//           </label>
//           <textarea
//             id="ev5_details"
//             name=""
//             placeholder="원하는 상담내용을 입력해주세요"
//           ></textarea>

//           <Submit className="mainBtn">SEND</Submit>
//         </form>
//       </div>
//       <div className="bgImg"></div>
//     </section>
//   );
// }

export default function Event5({ boardName }: { boardName: string }) {
  return (
    <section id="event5">
      <div className="ev5_wrap">
        <h2>시승신청</h2>
        <AddBoard params={{ boards: boardName }} />
      </div>
      <div className="bgImg"></div>
    </section>
  );
}
