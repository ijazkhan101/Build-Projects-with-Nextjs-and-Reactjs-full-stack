import './globals.css'

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
      <body className={`bg-gradient-to-tr from-primary to-secondary h-screen`}>{children}</body>
    </html>
  )
}
