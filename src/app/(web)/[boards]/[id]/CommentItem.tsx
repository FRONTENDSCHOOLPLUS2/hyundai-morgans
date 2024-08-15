import Submit from '@/components/Submit';
import { PostComment } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
const CLIENT = process.env.NEXT_CLIENT_ID;
const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export default function CommentItem({ item }: { item: PostComment }) {
  let image = `${SERVER}/${item.user?.image}`;
  if (!item.user?.image) {
    image = `${SERVER}/files/${CLIENT}/user-jayg.webp`;
  }
  return (
    <div className="shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <img
          className="w-8 h-4 mr-2 rounded-full"
          src={image}
          alt="후로필 이미지"
        />
        <Link href="" className="text-orange-400">
          {item.user?.name}
        </Link>
        <time className="ml-auto text-gray-500" dateTime={item.updatedAt}>
          {item.updatedAt}
        </time>
      </div>
      <div className="flex justify-between items-center mb-2">
        <form action="#">
          <pre className="whitespace-pre-wrap text-sm">{item.content}</pre>
          <Submit bgColor="red" size="sm">
            삭제
          </Submit>
        </form>
      </div>
    </div>
  );
}
