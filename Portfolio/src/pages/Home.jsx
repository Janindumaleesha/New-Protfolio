import { motion } from 'framer-motion'
import profileImage from '../assets/images/profile.jpeg'

const Home = () => {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Hi, I'm <span className="text-indigo-600">Janindu Ariyasinghe</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            Associate Software Engineer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            I specialize in building web and mobile applications using modern technologies like React, Angular, and .NET Core.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              Contact Me
            </a>
            <a
              href="/path-to-cv.pdf" // Replace with your actual CV path
              download
              className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              Download CV
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
            <div className="absolute inset-0 bg-indigo-200 dark:bg-indigo-900 rounded-full opacity-20"></div>
            <img
              src={profileImage}
              alt="Janindu Ariyasinghe"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home