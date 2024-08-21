import Submit from '@/components/Submit';
import { addPost } from '@/data/actions/postAction';
import Link from 'next/link';

export default function drive({ params }: { params: { boards: string } }) {
  return (
    <main id="drivePage" className="min-w-80 py-32 px-40 dark:bg-white">
      <div className="drive">
        <div className="text-center py-4">
          <h2 className="pb-8 text-5xl font-medium text-black dark:black">
            시승체험 신청
          </h2>
        </div>
        <section className="mb-8 p-4">
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
                  className="w-full p-5 border dark:border-gray-300 border-gray-300 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:bg-gray-100"
                  name="name"
                />
                {/* <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-500">
                  성함은 필수입니다.
                </p> */}
              </div>

              <div className="flex-1 my-4 mb-10">
                <label className="block text-xl mb-2" htmlFor="phone">
                  PHONE
                </label>
                <input
                  id="phone"
                  type="text"
                  placeholder="연락처를 남겨주세요"
                  className="w-full p-5 border dark:border-gray-300 border-gray-300 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:bg-gray-100"
                  name="phone"
                />
                {/* <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-500">
                  연락처는 필수입니다.
                </p> */}
              </div>
            </div>

            <div className="flex gap-16">
              <div className="flex-1 my-4 mb-10">
                <label className="block text-xl mb-2" htmlFor="model">
                  MODEL
                </label>
                <select
                  id="model"
                  name=""
                  className="w-full p-5 border dark:border-gray-300 border-gray-300 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:bg-gray-100"
                >
                  <option value="m1">모델1</option>
                  <option value="m2">모델2</option>
                  <option value="m3">모델3</option>
                </select>
              </div>
              <div className="flex-1 my-4 mb-10">
                <label className="block text-xl mb-2" htmlFor="address">
                  ADDRESS
                </label>
                <select
                  id="address"
                  name=""
                  className="w-full p-5 border dark:border-gray-300 border-gray-300 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:bg-gray-100"
                >
                  <option value="ad1">주소1</option>
                  <option value="ad2">주소2</option>
                  <option value="ad3">주소3</option>
                </select>
              </div>
            </div>

            <label
              className="block text-xl content-center mb-2"
              htmlFor="content"
            >
              DETAILS
            </label>
            <textarea
              id="content"
              rows={15}
              placeholder="원하는 상담내용을 입력해주세요"
              className="w-full p-4 text-sm border border-gray-300 bg-gray-50 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:bg-gray-100 dark:text-black"
              name="content"
            ></textarea>
            {/* <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-500">
              내용은 필수입니다.
            </p> */}

            <div className="flex justify-end my-6">
              <Link
                href={`/${params.boards}`}
                className="border-gray-600 border py-2 px-6 text-lg text-black font-semibold ml-2"
              >
                취소
              </Link>
              <Submit>등록</Submit>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
