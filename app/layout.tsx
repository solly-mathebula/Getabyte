import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Getabyte Tech',
  description: 'Cloud | Cybersecurity | AI | Software Consulting',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-black`}>
      
        <Toaster position="top-right" toastOptions={{ style: { background: "#1e3a8a", color: "#fff" } }} />
      
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
