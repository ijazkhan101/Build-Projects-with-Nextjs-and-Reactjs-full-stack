import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="absolute inset-0 flex justify-content item-center ">
     <h1 className='text-3xl font-bold'>Website Content</h1>
    </main>
  )
}
