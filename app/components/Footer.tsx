'use client'

import { useState } from 'react'
import Link from 'next/link'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(`Subscribed with: ${email}`)
    setEmail('')
  }

  return (
    <footer className="bg-[#002366] text-white w-full" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Getabyte</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Getabyte is a leading technology consultancy specializing in cloud services, cybersecurity, software development, and AI solutions.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer Navigation" className="flex flex-col space-y-2 text-gray-300 text-sm">
          <Link href="/industries" className="hover:text-yellow-400 transition-colors">Industries Overview</Link>
          <Link href="/solutions" className="hover:text-yellow-400 transition-colors">Solutions Overview</Link>
          <Link href="/#contact" className="hover:text-yellow-400 transition-colors">Contact Us</Link>
        </nav>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter Signup</h3>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="flex-grow px-4 py-2 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="bg-[#D4AF37] hover:bg-[#e6c200] transition-colors text-black font-semibold px-5 py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#0a2040]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 space-y-2 sm:space-y-0">
          <span>&copy; {new Date().getFullYear()} Getabyte. All rights reserved.</span>
          <div className="flex space-x-4">
            <Link href="/#privacy" className="hover:text-yellow-400 transition-colors">Privacy</Link>
            <Link href="/#terms" className="hover:text-yellow-400 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
