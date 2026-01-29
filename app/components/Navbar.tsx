'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 300
      setScrolled(window.scrollY > heroHeight - 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ boxShadow: '0 0 0 rgba(0,0,0,0)' }}
      animate={{ boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.25)' : '0 0 0 rgba(0,0,0,0)' }}
      transition={{ duration: 0.3 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#002366] text-white' : 'bg-primary text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-accent">
          Getabyte
        </Link>

        <nav className="hidden md:flex space-x-6 font-medium">
        <Link href="/#industries" className="hover:text-accent transition">Industries</Link>
        <Link href="/#careersinsights" className="hover:text-accent transition">Careers</Link>
          <Link href="/#services" className="hover:text-accent transition">Services</Link>
          <Link href="/#partners" className="hover:text-accent transition">Partners</Link>
          <Link href="/#contact" className="hover:text-accent transition">Contact</Link>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-primary px-4 pb-4 space-y-2">
          <Link href="/#industries" onClick={() => setIsOpen(false)} className="block">Industries</Link>
          <Link href="/#careersinsights" onClick={() => setIsOpen(false)} className="block">Services</Link>
          <Link href="/#services" onClick={() => setIsOpen(false)} className="block">Services</Link>
          <Link href="/#partners" onClick={() => setIsOpen(false)} className="block">Partners</Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)} className="block">Contact</Link>
        </div>
      )}
    </motion.header>
  )
}

export default Navbar
