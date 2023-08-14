import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="m-4 border-4 border-gray-400">
        <header>
          <h1 className="text-5xl">👟 ⚽ 🧑‍💻 Lloyd Stevens ⛵ 🛩️ 🗺️</h1>
          <div className="m-6">
          <Link className="mx-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" href="/">Home</Link>
          <Link className="mx-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" href="/about">About Me</Link>
          <Link className="mx-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" href="/contact">Contact Me</Link>
          </div>
        </header>
        {children}
        <footer>
          <p>&copy; Lloyd Stevens 2023</p>
        </footer>
        </div>
        </body>
      

    </html>
  )
}
