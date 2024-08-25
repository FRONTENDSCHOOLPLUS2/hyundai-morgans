import Link from 'next/link';
import Submit from '../Submit';
import { addPost } from '@/data/actions/postAction';

export default function AddBoard({ params }: { params: { boards: string } }) {
  return (
    <section className="mb-24 p-4">
      <form action={addPost}>
        <input type="hidden" name="boardName" value={params.boards} />

        <div className="ev5_new_wrap">
          <div className="flex gap-16">
            <div className="flex-1 my-4 mb-10">
              <label className="block text-xl mb-2" htmlFor="name">
                NAME
              </label>
              <input
                id="name"
                type="text"
                placeholder="성함을 남겨주세요"
                className="w-full p-5 border dark:border-gray-300 border-gray-300  dark:bg-gray-100"
                name="name"
              />
            </div>

            <div className="flex-1 my-4 mb-10">
              <label className="block text-xl mb-2" htmlFor="phone">
                PHONE
              </label>
              <input
                id="phone"
                type="text"
                placeholder="연락처를 남겨주세요"
                className="w-full p-5 border dark:border-gray-300 border-gray-300  dark:bg-gray-100"
                name="phone"
              />
            </div>
          </div>

          <div className="flex gap-16">
            <div className="flex-1 my-4 mb-10">
              <label className="block text-xl mb-2" htmlFor="model">
                MODEL
              </label>

              <select
                id="title"
                name="title"
                className="w-full p-5 border dark:border-gray-300 border-gray-300 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:bg-gray-100"
                defaultValue="model"
              >
                <option value="model" disabled hidden>
                  시승체험을 원하는 모델을 선택해주세요
                </option>
                <option value="G90 BLACK">G90 BLACK</option>
                <option value="G90 Long Wheel Base">G90 Long Wheel Base</option>
                <option value="G90">G90</option>
                <option value="G80">G80</option>
                <option value="G80 Electrrified">G80 Electrrified</option>
                <option value="G70">G70</option>
                <option value="G70 Shooting Brake">G70 Shooting Brake</option>
                <option value="GV80">GV80</option>
                <option value="GV80 COUPE">GV80 COUPE</option>
                <option value="GV70">GV70</option>
                <option value="GV70 Electrified">GV70 Electrified</option>
                <option value="GV60">GV60</option>
                <option value="NEOLUN Concept">NEOLUN Concept</option>
              </select>
            </div>

            <div className="flex-1 my-4 mb-10">
              <label className="block text-xl mb-2" htmlFor="address">
                ADDRESS
              </label>

              <select
                id="address"
                name="address"
                className="w-full p-5 border dark:border-gray-300 border-gray-300 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:bg-gray-100"
                defaultValue="address"
              >
                <option value="address" disabled hidden>
                  가까운 전시장을 찾아 선택해주세요
                </option>
                <option value="재니시수연 강남">재니시수연 강남</option>
                <option value="재니시수연 수지">재니시수연 수지</option>
                <option value="재니시수연 스튜디오 하남">재니시수연 스튜디오 하남</option>
                <option value="재니시수연 스튜디오 안성">재니시수연 스튜디오 안성</option>
                <option value="재니시수연 스튜디오 서울">재니시수연 스튜디오 서울</option>
                <option value="재니시수연 스튜디오 고양">재니시수연 스튜디오 고양</option>
              </select>
            </div>
          </div>

          <label className="block text-xl mt-4 mb-2" htmlFor="content">
            DETAILS
          </label>

          <textarea
            id="content"
            rows={15}
            placeholder="원하는 상담내용을 입력해주세요"
            className="w-full p-5 border resize-none border-gray-300 bg-gray-50  dark:bg-gray-100 dark:text-black h-[200px]"
            name="content"
          ></textarea>

          <div className="flex justify-center my-6">
            <Link
              href={`/${params.boards}`}
              className="border-gray-600 border py-2 px-4 text-md text- font-semibold mr-2"
            >
              취소
            </Link>
            <Submit>등록</Submit>
          </div>
        </div>
      </form>
    </section>
  );
}
