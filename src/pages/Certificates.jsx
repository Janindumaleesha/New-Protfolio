import { motion } from 'framer-motion'
import CertificateCard from '../components/CertificateCard'
import certificate1 from '../assets/images/certificate1.png'
import certificate2 from '../assets/images/certificate2.png'
import certificate3 from '../assets/images/certificate3.jpg'
import certificate4 from '../assets/images/certificate4.jpg'

const Certificates = () => {
  const certificates = [
    {
      title: 'HTML Certification',
      issuer: 'Sololearn',
      date: 'June 2021',
      image: certificate2
    },
    {
      title: 'CSS Certification',
      issuer: 'Sololearn',
      date: 'July 2021',
      image: certificate1
    },
    {
      title: 'Introduction To C# Certification',
      issuer: 'Sololearn',
      date: 'July 2025',
      image: certificate4
    },
    {
      title: 'C# Intermediate Certification',
      issuer: 'Sololearn',
      date: 'July 2025',
      image: certificate3
    }
  ]

  return (
    <section className="pt-25 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"
      >
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3700FF] to-[#00EEFF] mb-4">
          My Certificates
        </h2>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((certificate, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <CertificateCard
              title={certificate.title}
              issuer={certificate.issuer}
              date={certificate.date}
              image={certificate.image}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Certificates