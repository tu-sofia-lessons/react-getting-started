import { pb } from "@/db"
import { AboutPageData } from "@/types"

export default async function Page() {
  const aboutInfo = await pb.collection('about').getFirstListItem<AboutPageData>('')


  return (<>

    <section className="flex-1 flex flex-col items-center justify-center">
      <div dangerouslySetInnerHTML={{ __html: aboutInfo.content }}></div>
    </section>

  </>)
}
