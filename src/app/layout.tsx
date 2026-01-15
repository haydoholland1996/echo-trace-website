import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
      title: 'Echo Trace | Premium American-Made Suppressors',
      description: 'Precision-engineered suppressors for the modern era. American craftsmanship meets cutting-edge technology.',
}

export default function RootLayout({
      children,
}: {
      children: React.ReactNode
}) {
      return (
              <html lang="en">
                    <body className={`${inter.className} bg-et-black text-white antialiased`}>
                        {children}
                    </body>body>
              </html>html>
            )
}</html>
