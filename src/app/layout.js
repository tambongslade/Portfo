import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kersten Tambong | Full-Stack Developer',
  description: 'Full-stack developer specializing in web and mobile applications. Building digital solutions with Next.js, Flutter, and modern technologies.',
  keywords: ['developer', 'full-stack', 'web developer', 'mobile developer', 'Next.js', 'Flutter', 'React'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
