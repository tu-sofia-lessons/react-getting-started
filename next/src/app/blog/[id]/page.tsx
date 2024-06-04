import { pb } from '@/db'
import type { Blog } from '@/types'

export default async function Page({ params }: { params: { id: string } }) {



  const blog = await pb.collection("blog").getFirstListItem<Blog>(`id='${params.id}'`)



  return (
    <article className='flex flex-1 items-center flex-col gap-32 container px-12'>
      <h1 className='text-4xl font-bold tracking-widest text-balance text-center'>{blog.title}</h1>
      <p>{blog.content}</p>
    </article>
  )
}
