import { Post } from '@/types';
import Link from 'next/link';

export default function ListItem({ item }: { item: Post }) {
  console.log('item', item);
  return (
    <tr className="border-b border-gray-200 hover:bg-pink-100 dark:hover:bg-pink-100 transition duration-300 ease-in-out">
      <td className="p-2 text-center">{item._id}</td>
      <td className="p-2 truncate indent-4">
        <Link href={`/${item.type}/${item._id}`} className="cursor-pointer">
          {item.title} 차량 시승 신청 합니다.
        </Link>
      </td>
      {/* <td className="p-2 text-center truncate">{item.user.name}</td> */}
      <td className="p-2 text-center truncate">{item.extra?.name}</td>
      <td className="p-2 text-center hidden sm:table-cell">{item.views}</td>
      <td className="p-2 text-center hidden sm:table-cell">{item.replies?.length || 0}</td>
      <td className="p-2 truncate text-center hidden sm:table-cell">{item.updatedAt}</td>
    </tr>
  );
}
