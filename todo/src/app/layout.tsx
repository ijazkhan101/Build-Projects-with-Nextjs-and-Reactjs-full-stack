import './globals.css'
import { Inter} from 'next/font/google'
const inter = Inter({ subsets : ['latin']})
export const metadata = {
  title: 'Todo App With Next.js 13.4',
  description: 'Todo App With Next.js 13.4, Vercel Storage and Drizzle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-tr from-primary to-secondary h-screen`}>{children}</body>
    </html>
  )
}
