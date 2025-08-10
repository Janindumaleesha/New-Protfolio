import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import profileImage from '../assets/images/profile.jpeg'

const Home = () => {
  return (
    <section className="pt-35 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3700FF] to-[#00EEFF]">Janindu Ariyasinghe</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            Associate Software Engineer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            I specialize in building web and mobile applications using modern technologies like React, Angular, and .NET Core.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg transition-all duration-300 bg-gradient-to-r from-[#3700FF] to-[#00EEFF] text-white hover:shadow-lg hover:shadow-[#3700FF]/30"
            >
              Contact Me
            </Link>
            <a
              href="https://drive.google.com/file/d/1Ni7VYIMYtbWQSNYhpmbEDnCZmzpiHpCi/view?usp=sharing"
              download
              className="px-6 py-3 rounded-lg transition-all duration-300 border-2 border-transparent bg-gradient-to-r from-[#3700FF] to-[#00EEFF] bg-clip-padding hover:shadow-lg hover:shadow-[#3700FF]/20 relative group"
            >
              <span className="absolute inset-0 bg-white dark:bg-gray-900 rounded-[calc(0.5rem-2px)] group-hover:opacity-90 transition-opacity duration-300"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#3700FF] to-[#00EEFF]">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3700FF] to-[#00EEFF] opacity-20 blur-xl"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3700FF] to-[#00EEFF] opacity-10 animate-pulse"></div>
            <img
              src={profileImage}
              alt="Janindu Ariyasinghe"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg hover:shadow-xl hover:shadow-[#3700FF]/30 transition-shadow duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home