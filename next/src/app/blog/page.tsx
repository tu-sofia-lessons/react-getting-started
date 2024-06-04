import BlogCard from "@/components/blog-card"
import { pb } from "@/db"
import type { Blog } from "@/types"

export default async function Page() {
  const blogs = await pb.collection("blog").getFullList<Blog>()

  console.log(blogs)

  return (<>
    <section className="flex-1 flex items-center justify-center flex-col gap-20">
      <h1 className="text-9xl font-bold bg-[url(https://demo-next-db-pb.app.jet-black.xyz/api/files/9ac7qkokj79w5ku/ndzqwpsrym2l2z7/i_stock_1010529628_1024x683_yuVMRAsb55.jpg)] text-transparent bg-clip-text bg-left-bottom bg-cover">Blogs</h1>
      <ul className="flex gap-20 flex-col lg:flex-row">
        {blogs.map((blog) => {
          return <BlogCard {...blog} contentLenght={50} />
        })}
      </ul>
    </section>
  </>)
}
