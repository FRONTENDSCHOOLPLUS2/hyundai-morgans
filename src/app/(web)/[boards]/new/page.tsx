import Submit from '@/components/Submit';
import { Metadata } from 'next';
import Link from 'next/link';

export function generateMetadata({
  params,
}: {
  params: { type: string };
}): Metadata {
  const boardName = params.type;
  return {
    title: `${boardName} - 게시글 등록`,
    description: `${boardName} - 게시글을 등록하세요.`,
    openGraph: {
      title: `${boardName} - 게시글 등록`,
      description: `${boardName} - 게시글을 등록하세요.`,
      url: `/${params.type}/new`,
    },
  };
}

export default function Page({ params }: { params: { type: string } }) {
  return (
    <main className="min-w-80 py-32 px-40 dark:bg-white">
      <div className="text-center py-4">
        <h2 className="pb-4 text-5xl font-medium text-black dark:black">
          게시글 등록
        </h2>
      </div>
      <section className="mb-8 p-4">
        <form action={`/${params.type}/1`}>
          <div className="my-4 mb-10">
            <label
              className="block text-xl content-center mb-2"
              htmlFor="title"
            >
              제목
            </label>
            <input
              id="title"
              type="text"
              placeholder="제목을 입력하세요."
              className="w-full py-2 px-4 border dark:border-gray-300 border-gray-300 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:bg-gray-100"
              name="title"
            />
            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-500">
              제목은 필수입니다.
            </p>
          </div>
          <div className="my-4">
            <label
              className="block text-xl content-center mb-2"
              htmlFor="content"
            >
              내용
            </label>
            <textarea
              id="content"
              rows={15}
              placeholder="내용을 입력하세요."
              className="w-full p-4 text-sm border border-gray-300 bg-gray-50 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:bg-gray-100 dark:text-black"
              name="content"
            ></textarea>
            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-500">
              내용은 필수입니다.
            </p>
          </div>
          <hr />
          <div className="flex justify-end my-6">
            <Link
              href={`/info`}
              className="border-gray-600 border py-1 px-4 text-base text-black font-semibold ml-2"
            >
              취소
            </Link>
            <Submit>등록</Submit>
          </div>
        </form>
      </section>
    </main>
  );
}
