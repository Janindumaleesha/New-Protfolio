import { motion } from 'framer-motion'

const CertificateCard = ({ title, issuer, date, image }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-contain p-4 bg-gray-100 dark:bg-gray-700"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-1">
          <span className="font-medium">Issued by:</span> {issuer}
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-medium">Date:</span> {date}
        </p>
      </div>
    </motion.div>
  )
}

export default CertificateCard