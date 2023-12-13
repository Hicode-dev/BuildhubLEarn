// import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './Layout/Navbar'


export const metadata = {
  title: 'BuildHubb',
  description: 'Building builders',
}

export default function RootLayout({ children }) {
  return (


    <html lang="en">
    
      <body>{children}</body>
    </html>


  )
}
