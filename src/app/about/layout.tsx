import Link from "next/link"

export default function aboutMeLayout({
    children,
  }: {
    children: React.ReactNode
  })  {
  return (
    <div>
      <div className="m-6">
        <Link className="mx-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" href="/about/sport/football">Sport</Link>
        <Link className="mx-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" href="/about/computing/webdev">Computing</Link>
        <Link className="mx-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" href="/about/airfix/ships">AirFix</Link>
        </div>
        {children}
    </div>
  )
}
