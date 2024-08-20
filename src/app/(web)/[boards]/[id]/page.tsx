import Submit from '@/components/Submit';
import { Metadata } from 'next';
import Link from 'next/link';
import CommentList from './CommentList';
import { fetchPost } from '@/data/fetch/postFetch';
import { notFound } from 'next/navigation';
import { auth } from '@/auth';

export async function generateMetadata({
  params,
}: {
  params: { boards: string; id: string };
}): Promise<Metadata> {
  const boardName = params.boards;
  const item = await fetchPost(params.id);
  if (item === null) notFound();
  return {
    title: `${boardName} - ${item.title}`,
    description: `${boardName} - ${item.content}`,
    openGraph: {
      title: `${boardName} - ${item.title}`,
      description: `${boardName} - ${item.content}`,
      url: `/${params.boards}/${params.id}`,
    },
  };
}

export async function generateStaticParams() {
  return [
    { boards: 'notice', id: '4' },
    { boards: 'notice', id: '5' },
  ];
}

export default async function Page({
  params,
}: {
  params: { boards: string; id: string };
}) {
  // const item = await model.post.detail(Number(params.id));
  const session = await auth();
  const item = await fetchPost(params.id);
  if (item === null) notFound();

  return (
    <main className="dark:bg-white px-40 py-20">
      <section className="mb-8 p-4">
        <form action={`/${params.boards}`}>
          <div className="font-semibold text-xl">제목 : {item.title}</div>
          <div className="text-right text-gray-400 mb-10">
            작성자 : {item.user?.name}
          </div>
          <div className="mb-4">
            <div>
              <pre className="font-roboto w-full p-2 whitespace-pre-wrap  mb-60">
                {item.content}
              </pre>
            </div>
            <hr />
          </div>
          <div className="flex justify-end my-4">
            <Link
              href={`/${params.boards}`}
              className="bg-black py-1 px-4 text-base text-white font-semibold ml-2"
            >
              목록
            </Link>
            {session?.user?.id === String(item.user?._id) && (
              <>
                <Link
                  href={`/${params.boards}/${params.id}/edit`}
                  className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2"
                >
                  수정
                </Link>
                <Submit bgColor="red">삭제</Submit>
              </>
            )}
          </div>
        </form>
      </section>

      <CommentList params={params} />
    </main>
  );
}
