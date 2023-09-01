import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

/* modifico el titulo de la pestaña */
export const metadata = {
  title: 'SATIC test',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* añado un icono */}
      <head>
        <link rel="shortcut icon" href="https://cdn-icons-png.flaticon.com/512/456/456141.png" type="image/x-icon" sizes='16x16' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}