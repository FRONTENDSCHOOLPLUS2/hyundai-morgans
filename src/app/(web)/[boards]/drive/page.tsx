import Submit from '@/components/Submit';
import { addPost } from '@/data/actions/postAction';
import Link from 'next/link';
import React from 'react';

export default function drive({ params }: { params: { boards: string } }) {
  return (
    <main id="drivePage" className="min-w-80 py-32 px-40 dark:bg-white">
      <div className="drive">
        <div className="text-center py-4">

          <h2 className="pb-8 text-5xl font-medium text-black dark:text-black">
            전시시승 체험신청
          </h2>
          {/* 인풋 타입 히든 */}

        </div>
        <section className="mb-24 p-4">
          <form action={addPost}>
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
                  id="model"
                  name="model"
                  className="w-full p-5 border dark:border-gray-300 border-gray-300 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:bg-gray-100"
                  defaultValue="model01"
                >
                  <option value="model00" disabled hidden>

                    시승체험을 원하는 모델을 선택해주세요
                  </option>
                  <option value="model01">G90 BLACK</option>
                  <option value="model02">G90 Long Wheel Base</option>
                  <option value="model03">G90</option>
                  <option value="model04">G80</option>
                  <option value="model05">G80 Electrrified</option>
                  <option value="model06">G70</option>
                  <option value="model07">G70 Shooting Brake</option>
                  <option value="model08">GV80</option>
                  <option value="model09">GV80 COUPE</option>
                  <option value="model10">GV70</option>
                  <option value="model11">GV70 Electrified</option>
                  <option value="model12">GV60</option>
                  <option value="model13">NEOLUN Concept</option>
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
                  defaultValue="address00"
                >
                  <option value="address00" disabled hidden>
                    가까운 전시장을 찾아 선택해주세요
                  </option>
                  <option value="address01">재니시수연 강남</option>
                  <option value="address02">재니시수연 수지</option>
                  <option value="address03">재니시수연 스튜디오 하남</option>
                  <option value="address04">재니시수연 스튜디오 안성</option>
                  <option value="address05">재니시수연 스튜디오 서울</option>
                  <option value="address06">재니시수연 스튜디오 고양</option>

                </select>
              </div>
            </div>

            <label className="block text-xl mb-2" htmlFor="content">
              DETAILS
            </label>
            <textarea
              id="content"
              rows={15}
              placeholder="원하는 상담내용을 입력해주세요"

              className="w-full p-5 text-sm border border-gray-300 bg-gray-50  dark:bg-gray-100 dark:text-black"
              name="content"
            ></textarea>
            {/* <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-500">
              내용은 필수입니다.
            </p> */}


            <div className="flex justify-end my-6">
              <Link
                href={`/${params.boards}`}
                className="border-gray-600 border py-2 px-4 text-md text-black font-semibold ml-2"
              >
                취소
              </Link>
              <Submit>등록</Submit>
            </div>
          </form>
        </section>

        <div className="text-center py-4">

          <h2 className="pb-12 text-5xl font-medium text-black">재니시수연 플레이스</h2>
        </div>
        <section className="mb-20">

          <table className="border-collapse w-full table-fixed">
            <colgroup>
              <col className="w-[30%]" />
              <col className="w-[45%]" />
              <col className="w-[25%]" />
            </colgroup>

            <tbody className="border-t border-solid border-black">
              <tr className="border-b border-solid border-ccc">

                <th className="p-4 whitespace-nowrap font-medium bg-gray-100">재니시수연 강남</th>

                <td className="p-4 whitespace-nowrap font-light">서울시 강남구 영동대로 410</td>
                <td className="p-4 whitespace-nowrap font-light">02-556-9870</td>
              </tr>
              <tr className="border-b border-solid border-ccc">

                <th className="p-4 whitespace-nowrap font-medium bg-gray-100">재니시수연 수지</th>

                <td className="p-4 whitespace-nowrap font-light">경기도 용인시 풍덕천동 860</td>
                <td className="p-4 whitespace-nowrap font-light">1522-8830</td>
              </tr>
              <tr className="border-b border-solid border-ccc">
                <th className="p-4 whitespace-nowrap font-medium bg-gray-100">

                  재니시수연 스튜디오 하남

                </th>
                <td className="p-4 whitespace-nowrap font-light">
                  경기도 하남시 미사대로 750번지 스타필드 하남 2층
                </td>
                <td className="p-4 whitespace-nowrap font-light">031-8072-8381</td>
              </tr>
              <tr className="border-b border-solid border-ccc">
                <th className="p-4 whitespace-nowrap font-medium bg-gray-100">

                  재니시수연 스튜디오 안성
                </th>
                <td className="p-4 whitespace-nowrap font-light">
                  경기도 안성시 공도읍 서동대로 3930-39 스타필드 안성 2F 재니시수연 안성

                </td>
                <td className="p-4 whitespace-nowrap font-light">031-8092-1601</td>
              </tr>
              <tr className="border-b border-solid border-ccc">
                <th className="p-4 whitespace-nowrap font-medium bg-gray-100">

                  재니시수연 스튜디오 서울

                </th>
                <td className="p-4 whitespace-nowrap font-light">서울 강남 언주로 738</td>
                <td className="p-4 whitespace-nowrap font-light">1899-6611</td>
              </tr>
              <tr className="border-b border-solid border-ccc">
                <th className="p-4 whitespace-nowrap font-medium bg-gray-100">

                  재니시수연 스튜디오 고양

                </th>
                <td className="p-4 whitespace-nowrap font-light">
                  경기도 고양시 일산서구 킨텍스로 217-6
                </td>
                <td className="p-4 whitespace-nowrap font-light">1899-6611</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
