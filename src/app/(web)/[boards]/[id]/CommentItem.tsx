import Submit from '@/components/Submit';
import { PostComment } from '@/types';
import Link from 'next/link';
const CLIENT = process.env.NEXT_CLIENT_ID;
const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export default function CommentItem({ item }: { item: PostComment }) {
  let image = `${SERVER}/${item.user?.image}`;
  if (!item.user?.image) {
    image = `${SERVER}/files/${CLIENT}/user-jayg.webp`;
  }
  return (
    <div className="border-b-[1px] border-gray-400 border-solid p-2 mb-4">
      <div className="flex justify-between items-center mb-2">
        <img className="w-8 h-4 mr-2" src={image} alt="후로필 이미지" />
        <Link href="" className="font-medium text-lg">
          {item.user?.name}
        </Link>
        <time className="ml-auto text-gray-400" dateTime={item.updatedAt}>
          {item.updatedAt}
        </time>
      </div>
      <div className="flex justify-between items-center mb-2">
        <form action="#">
          <pre className="whitespace-pre-wrap text-base ml-2 mb-4">
            {item.content}
          </pre>
          <Submit bgColor="black" size="medium">
            삭제
          </Submit>
        </form>
      </div>
    </div>
  );
}
