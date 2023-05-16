import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/app/components/Header";
const inter = Inter({ subsets: ['latin'] })
import { Mulish } from 'next/font/google';


const mulish  = Mulish({
  weight : '400',
  subsets : ['latin'],
  display : 'swap'
})

export const metadata = {
  title: 'Movie Website',
  description: 'Movie Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body className={inter.className}>
        <Header></Header>
        {children}
        </body>
    </html>
  )
}
