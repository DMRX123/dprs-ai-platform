import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DPRS - Web & Flutter Development | Custom Websites & Mobile Apps',
  description: 'Professional web development, Flutter app development, iOS, Android, and Windows application development services.',
  keywords: 'web development, flutter developer, app development, website design, cross-platform apps',
  authors: [{ name: 'DPRS' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}