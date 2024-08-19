'use server';

import { ApiRes, CoreRes, SingleItem, Post, PostComment } from '@/types/index';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const CLIENT = process.env.NEXT_CLIENT_ID;

export async function addPost(
  formData: FormData,
): Promise<ApiRes<SingleItem<Post>>> {
  const session = await auth();
  const postData = {
    type: formData.get('type') || 'info',
    title: formData.get('title'),
    content: formData.get('content'),
  };

  const res = await fetch(`${SERVER}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`,
    },
    body: JSON.stringify(postData),
  });

  return res.json();
}

export async function updatePost(
  formData: FormData,
): Promise<ApiRes<SingleItem<Post>>> {
  const session = await auth();

  const postData = {
    type: formData.get('type') || 'info',
    title: formData.get('title') || '',
    content: formData.get('content') || '',
  };

  const res = await fetch(`${SERVER}/posts/${formData.get('_id')}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`,
    },
    body: JSON.stringify(postData),
  });

  return res.json();
}

export async function deletePost(formData: FormData): Promise<CoreRes> {
  const session = await auth();

  const res = await fetch(`${SERVER}/posts/${formData.get('_id')}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });

  return res.json();
}

export async function addComment(
  postId: string,
  hello: string,
  id: number,
  pwd: string,
  formData: FormData,
): Promise<SingleItem<PostComment>> {
  const session = await auth();

  const res = await fetch(`${SERVER}/posts/${postId}/replies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`,
    },
    body: JSON.stringify(formData),
  });

  return res.json();
}
// (formData: FormData): Promise<ApiResWithValidation<SingleItem<UserData>, UserForm>>

export async function deleteComment(formData: FormData): Promise<CoreRes> {
  console.log(formData);
  const boardName = formData.get('boardName');
  const postId = formData.get('postId');
  const commentId = formData.get('commentId');

  const session = await auth();
  // const accessToken =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEzLCJ0eXBlIjoidXNlciIsIm5hbWUiOiLqsJHrtoDsiJjsl7AiLCJpbWFnZSI6Ii9maWxlcy8wMi1nZW5pc2lzdS91c2VyLW11emkud2VicCIsImlhdCI6MTcyNDAzMTg4MiwiZXhwIjoxNzI0MTE4MjgyLCJpc3MiOiJGRVNQIn0.KH87gOjzHl1rvsM4WykoQHD85Xz2XwQE-rAyihZE-9g';

  // const postId = '1';

  const res = await fetch(`${SERVER}/posts/${postId}/replies/${commentId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`,
      'client-Id': CLIENT,
    },
  });
  // console.log(res);
  redirect(`/${boardName}/${postId}`);
  return res.json();
}
