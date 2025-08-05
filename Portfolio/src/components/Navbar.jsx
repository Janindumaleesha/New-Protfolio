import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import logo from '../assets/images/Janindu.png'

const Navbar = ({ darkMode, setDarkMode }) => {
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
        </div>
      </div>
    </nav>
  )
}

export default Navbar