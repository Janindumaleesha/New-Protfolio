import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import logo from '../assets/janindu.png'
import { useState } from 'react'
import { Menu, X } from 'react-feather'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src={logo} alt="Logo" />
              <span className="ml-2 text-xl font-semibold text-gray-800 dark:text-white">
                Janindu Ariyasinghe
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <Link
              to="/"
              className="text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium"
            >
              Projects
            </Link>
            <Link
              to="/certificates"
              className="text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium"
            >
              Certificates
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium"
            >
              Contact
            </Link>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-4 inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 shadow-lg">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/certificates"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Certificates
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar