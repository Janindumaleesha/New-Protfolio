import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.png'

const Projects = () => {
  const projects = [
    {
      title: 'Ticket Booking System',
      description: 'A comprehensive system for booking tickets online with payment integration and seat selection.',
      image: project1,
      tags: ['React', '.NET Core', 'SQL Server']
    },
    {
      title: 'Student Management System',
      description: 'System for managing student records, attendance, and academic performance.',
      image: project2,
      tags: ['Angular', 'ASP.NET', 'Entity Framework']
    },
    {
      title: 'Point of Sale (POS) System',
      description: 'Retail POS system with inventory management, sales tracking, and reporting features.',
      image: project3,
      tags: ['React', '.NET Core', 'Dapper', 'PostgreSQL']
    },
    {
      title: 'Blink Project',
      description: 'A web application for quick notifications and alerts management.',
      image: project1,
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'PAF Project',
      description: 'Project management system for the PAF organization with task tracking and reporting.',
      image: project2,
      tags: ['Angular', '.NET Core', 'SQL Server']
    },
    {
      title: 'ITMP Project',
      description: 'Information Technology Management Platform for enterprise resource planning.',
      image: project3,
      tags: ['React', 'ASP.NET MVC', 'Dapper']
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
          My Projects
        </h2>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects