import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-16 bg-purple-700 flex justify-between px-3 items-center text-white'>
      <div className="logo font-bold text-lg">
        <Link href="/">BitLinks</Link>
      </div>

      <ul className='flex justify-center gap-4 items-center'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/shorten">Shorten</Link></li>
        <li><Link href="/contact">Contact</Link></li>

        <li className='flex gap-3'>
          {/* Try Now button (internal link) */}
          <Link href="/shorten">
            <button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold hover:bg-purple-600 cursor-pointer'>
              Try Now
            </button>
          </Link>

          {/* GitHub button (external link) */}
          <a
            href="https://github.com/YOUR_USERNAME/YOUR_REPO" // 👈 change this
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold hover:bg-purple-600 cursor-pointer'>
              GitHub
            </button>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
