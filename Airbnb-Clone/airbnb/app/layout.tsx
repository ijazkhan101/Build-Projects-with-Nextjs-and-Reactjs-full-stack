import Navbar from './components/navbar/Navbar';
import './globals.css'
import {Nunito} from 'next/font/google'
export const metadata = {
  title: 'Airbnb',
  description: 'Full Stack Airbnb Clone with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth',
}

const font = Nunito({
  subsets: ['latin'],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}</body>
    </html>
  )
}
