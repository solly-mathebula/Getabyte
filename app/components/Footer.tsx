'use client'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#002366] text-white w-full" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
          <Link href="/articles" className="hover:text-yellow-400 transition-colors">Articles</Link>
          <Link href="/#contact" className="hover:text-yellow-400 transition-colors">Contact Us</Link>
        </nav>

        {/* Quick Links / Additional Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>
              <a href="mailto:inquiries@getabyte.co.za" className="hover:text-yellow-400 transition-colors">
                inquiries@getabyte.co.za
              </a>
            </li>
            <li>
              <a href="tel:+27634722727" className="hover:text-yellow-400 transition-colors">
                +27 63 472 2727
              </a>
            </li>
            <li>128 Leslie Ave, Fourways, Sandton, 2191, South Africa</li>
          </ul>
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
