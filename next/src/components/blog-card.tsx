import { pb } from "@/db"
import type { Blog } from "@/types"
import Link from "next/link"

type Props = Blog & { contentLenght: number }

export default function BlogCard(props: Props) {

  console.log(props.contentLenght)

  const content = props.content.split(" ").reduce((r, v) => {


    return r.length > props.contentLenght ? r : r + " " + v
  }) + '...'

  const imgUrl = pb.files.getUrl(props, props.thumbnail)
  console.log(imgUrl)


  return (
    <li className="border-[1px] w-96 border-white/30 rounded-md shadow-white shadow-sm">
      <Link href={`/blog/${props.id}`}>
        <img className="w-full object-cover" src={imgUrl} alt="blog " />
        <div className="p-4">

          <h2 className="text-2xl text-balance">{props.title}</h2>
          <br />
          <p>{content}</p>
          <span className="text-blue-400 ">Read more</span>
        </div>
      </Link>
    </li>
  )
}

