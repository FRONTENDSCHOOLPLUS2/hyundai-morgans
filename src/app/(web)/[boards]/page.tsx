import Pagination from '@/components/Pagination';
import Search from '@/components/Search';
import { Metadata } from 'next';
import ListItem from './ListItem';
import { fetchPosts } from '@/data/fetch/postFetch';
import Link from 'next/link';

export function generateMetadata({
  params,
}: {
  params: { boards: string };
}): Metadata {
  const boardName = params.boards;
  return {
    title: `${boardName} - 전시시승`,
    description: `${boardName} 게시판입니다.`,
    openGraph: {
      title: `${boardName} - 전시시승`,
      description: `${boardName} 게시판입니다.`,
      url: `/${params.boards}`,
      images: {
        url: '/images/fesp.webp',
      },
    },
  };
}

export default async function Page({ params }: { params: { boards: string } }) {
  const data = await fetchPosts(params.boards); // API 서버 호출
  const list = data.map((item) => <ListItem key={item._id} item={item} />); // 요소를 반복문으로 생성해줄 때 key값 필수
  // const list = [<ListItem key={1} />, <ListItem key={2} />];
  return (
    <main className="min-w-80 py-32 px-40 dark:bg-white">
      <div className="text-center py-4">
        <h2 className="pb-20 text-5xl font-medium text-black dark:black">
          전시시승
        </h2>
      </div>
      <div className="flex justify-end mr-4 mb-8">
        <Search />
        <Link
          href={`/${params.boards}/new`}
          className="bg-black py-1 px-4 text-base text-white font-semibold ml-2"
        >
          신청하기
        </Link>
      </div>
      <section className="pt-10">
        <table className="border-collapse w-full table-fixed">
          <colgroup>
            <col className="w-[10%] sm:w-[10%]" />
            <col className="w-[60%] sm:w-[55%]" />
            <col className="w-[30%] sm:w-[15%]" />
            {/* <col className="w-0 sm:w-[10%]" /> */}
            {/* <col className="w-0 sm:w-[10%]" /> */}
            <col className="w-0 sm:w-[20%]" />
          </colgroup>
          <thead>
            <tr className="border-b border-solid border-gray-600">
              <th className="p-2 whitespace-nowrap font-semibold">번호</th>
              <th className="p-2 whitespace-nowrap font-semibold">제목</th>
              <th className="p-2 whitespace-nowrap font-semibold">글쓴이</th>
              {/* <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">
                조회수
              </th>
              <th className="p-2 whitespace-nowrap font-medium hidden sm:table-cell">
                댓글수
              </th> */}
              <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">
                작성일
              </th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
        <hr />

        <Pagination />
      </section>
    </main>
  );
}
