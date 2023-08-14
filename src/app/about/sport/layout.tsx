import Link from "next/link"

export default function aboutMeLayout({
    children,
  }: {
    children: React.ReactNode
  })  {
  return (
    <div>
      <div className="m-6">
        <Link className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/about/sport/football">Football</Link>
        <Link className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/about/sport/webdev">Running</Link>
        <Link className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"href="/about/sport/webdev">Hiking</Link>
        <Link className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/about/sport/ships">Photography</Link>
        </div>
        {children}
    </div>
  )
}
