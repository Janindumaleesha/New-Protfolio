import { motion } from 'framer-motion'
import SkillBar from '../components/SkillBar'

const About = () => {
  const skills = [
    { skill: '.NET Core', percentage: 85 },
    { skill: 'React', percentage: 80 },
    { skill: 'Angular', percentage: 75 },
    { skill: 'SQL Server', percentage: 80 },
    { skill: 'Entity Framework', percentage: 75 },
    { skill: 'Docker', percentage: 65 },
  ]

  return (
    <section className="pt-25 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3700FF] to-[#00EEFF] mb-4">
          About Me
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#3700FF] to-[#00EEFF]">
              Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Associate Software Engineer with a degree in Information Technology from Sri Lanka Institute of Information
              Technology. Skilled in front-end development using React and back-end development with .NET Core.
              Proficient in working with SQL Server databases. Experienced in developing web applications, including POS
              systems, and mobile applications.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#3700FF] to-[#00EEFF]">
              Work Experience
            </h3>
            <div className="space-y-8">
              <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-4 before:w-4 before:rounded-full before:bg-gradient-to-r before:from-[#3700FF] before:to-[#00EEFF]">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Associate Software Engineer, APP360 (PVT) Ltd.
                </h4>
                <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">Jul 2025 - Present</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-gradient-to-r from-[#3700FF] to-[#00EEFF] mr-3"></span>
                    <span className="text-gray-600 dark:text-gray-300">Developed and maintained backend services for a Flutter-based mobile application using .NET Core</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-gradient-to-r from-[#3700FF] to-[#00EEFF] mr-3"></span>
                    <span className="text-gray-600 dark:text-gray-300">Designed and optimized SQL Server databases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-gradient-to-r from-[#3700FF] to-[#00EEFF] mr-3"></span>
                    <span className="text-gray-600 dark:text-gray-300">Collaborated with frontend Flutter developers to integrate APIs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-gradient-to-r from-[#3700FF] to-[#00EEFF] mr-3"></span>
                    <span className="text-gray-600 dark:text-gray-300">Reduced system downtime by 25–30% through effective debugging</span>
                  </li>
                </ul>
              </div>

              <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-4 before:w-4 before:rounded-full before:bg-gradient-to-r before:from-[#3700FF] before:to-[#00EEFF]">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Software Engineer Intern, APP360 (PVT) Ltd.
                </h4>
                <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">Jul 2024 - Jul 2025</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-gradient-to-r from-[#3700FF] to-[#00EEFF] mr-3"></span>
                    <span className="text-gray-600 dark:text-gray-300">Developed and maintained two live web applications using React, Next.js and .NET Core</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-gradient-to-r from-[#3700FF] to-[#00EEFF] mr-3"></span>
                    <span className="text-gray-600 dark:text-gray-300">Designed and optimized SQL Server databases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-gradient-to-r from-[#3700FF] to-[#00EEFF] mr-3"></span>
                    <span className="text-gray-600 dark:text-gray-300">Collaborated on bug fixing and performance tuning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#3700FF] to-[#00EEFF]">
              Education
            </h3>
            <div className="space-y-6">
              <div className="relative pl-6 pb-6 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  BSc(Hons) Information Technology
                </h4>
                <p className="text-gray-500 dark:text-gray-400 mb-2 text-sm">
                  Sri Lanka Institute of Information Technology, Malabe
                </p>
                <p className="text-sm bg-gradient-to-r from-[#3700FF] to-[#00EEFF] bg-clip-text text-transparent font-medium">
                  Jun 2019 - Jun 2023
                </p>
              </div>

              <div className="relative pl-6 pb-6 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  GCE A/L Examination
                </h4>
                <p className="text-gray-500 dark:text-gray-400 mb-2 text-sm">
                  Bandaranayake College, Gampaha (Commerce Stream)
                </p>
                <p className="text-sm bg-gradient-to-r from-[#3700FF] to-[#00EEFF] bg-clip-text text-transparent font-medium">
                  May 2016 - Aug 2018
                </p>
              </div>

              <div className="relative pl-6">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  GCE O/L Examination
                </h4>
                <p className="text-gray-500 dark:text-gray-400 mb-2 text-sm">
                  Bandaranayake College, Gampaha
                </p>
                <p className="text-sm bg-gradient-to-r from-[#3700FF] to-[#00EEFF] bg-clip-text text-transparent font-medium">
                  Jan 2010 - Dec 2015
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#3700FF] to-[#00EEFF]">
              Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.skill}</span>
                    <span className="text-sm bg-gradient-to-r from-[#3700FF] to-[#00EEFF] bg-clip-text text-transparent font-bold">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="h-2.5 rounded-full" 
                      style={{
                        width: `${skill.percentage}%`,
                        background: 'linear-gradient(90deg, #3700FF 0%, #00EEFF 100%)'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About