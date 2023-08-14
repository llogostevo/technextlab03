import Link from "next/link"

export default function AirFixLayout({
    children,
  }: {
    children: React.ReactNode
  })  {
  return (
    <div className="m-6">
        <Link className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/about/airfix/planes">Planes</Link>
        <Link className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/about/airfix/ships">Ships</Link>
        {children}
    </div>
  )
}
