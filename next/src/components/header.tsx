import Link from "next/link"

export default function header() {
  return (

    <header className="h-16 flex justify-between items-center px-8 border-b-2 border-white">
      <img src="" alt="" />
      <nav className="flex gap-x-4">
        <Link href='/'>Home</Link>
        <Link href='/blog'>Blogs</Link>
        <Link href='/about'>About</Link>
      </nav>
    </header>
  )
}

