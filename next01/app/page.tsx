import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link';
export default function Home() {
  return (
    <main className={styles.main}>
     <h1>Next js </h1>
     <p>
      <Link href="/users"> Users</Link>
     </p>
     <Link  href='/about'>About </Link>
    </main>
  )
}
