import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../app/globals.css'


const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})


export const metadata: Metadata = {
  title: 'Terminal Portfolio | Developer',
  description: 'Interactive terminal-style portfolio showcasing projects and skills',
  keywords: ['portfolio', 'developer', 'terminal', 'interactive'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Terminal Portfolio',
    description: 'Interactive terminal-style portfolio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`} suppressHydrationWarning>
        {children}
      </body>
      <body className={`${inter.variable}`}></body>  
    </html>
  )
}