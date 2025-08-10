import { motion } from 'framer-motion'
import { FiLinkedin, FiGithub, FiMail, FiPhone } from 'react-icons/fi'
import { FaMedium } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="pt-25 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#3700FF] to-[#00EEFF] mb-12"
      >
        Contact Me
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#3700FF]/10 to-[#00EEFF]/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3700FF] to-[#00EEFF] mb-6">
            Get In Touch
          </h3>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-gradient-to-r from-[#3700FF] to-[#00EEFF] p-3 rounded-xl">
                <FiMail className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">Email</h4>
                <a
                  href="mailto:janindumaleesha99@gmail.com"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#3700FF] to-[#00EEFF] hover:underline"
                >
                  janindumaleesha99@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-gradient-to-r from-[#3700FF] to-[#00EEFF] p-3 rounded-xl">
                <FiPhone className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">Phone</h4>
                <a
                  href="tel:+94778567109"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#3700FF] to-[#00EEFF] hover:underline"
                >
                  +94 77 856 7109
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-gradient-to-r from-[#3700FF] to-[#00EEFF] p-3 rounded-xl">
                <FiLinkedin className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/janindu-ariyasinghe-85657220a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#3700FF] to-[#00EEFF] hover:underline"
                >
                  linkedin.com/in/janindu-ariyasinghe
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-gradient-to-r from-[#3700FF] to-[#00EEFF] p-3 rounded-xl">
                <FiGithub className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">GitHub</h4>
                <a
                  href="https://github.com/Janindumaleesha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#3700FF] to-[#00EEFF] hover:underline"
                >
                  github.com/Janindumaleesha
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-gradient-to-r from-[#3700FF] to-[#00EEFF] p-3 rounded-xl">
                <FaMedium className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">Medium</h4>
                <a
                  href="https://medium.com/@janindumaleesha99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#3700FF] to-[#00EEFF] hover:underline"
                >
                  medium.com/@janindumaleesha99
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#00EEFF]/10 to-[#3700FF]/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00EEFF] to-[#3700FF] mb-6">
            Send Me a Message
          </h3>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00EEFF] dark:bg-gray-800/50 dark:text-white backdrop-blur-sm"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00EEFF] dark:bg-gray-800/50 dark:text-white backdrop-blur-sm"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00EEFF] dark:bg-gray-800/50 dark:text-white backdrop-blur-sm"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-[#3700FF] to-[#00EEFF] text-white rounded-xl hover:opacity-90 transition-opacity duration-300 shadow-lg font-medium"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact