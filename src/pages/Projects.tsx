
import { motion } from 'framer-motion';
import connectImage from '../assets/connect.jpg';
import morganImage from '../assets/morgan.jpg';

export const Projects = () => {
  const projects = [
    {
      title: 'Wealth Management - Account Purge',
      description: 'Developed and implemented solutions for identifying and removing inactive user accounts in compliance with firm policies. The project involved data extraction, validation, and deletion from DB2 databases.',
      tags: ['COBOL', 'JCL', 'DB2', 'Changeman', 'TSO', 'VSAM', 'TWS'],
      image: morganImage
    },
    {
      title: 'Connect Heritage - Secure Financial Messaging',
      description: 'Built a secure, integrated messaging service for HSBC, ensuring seamless financial transactions and data exchange. Implemented authorization checks and file-level validation.',
      tags: ['COBOL', 'JCL', 'DB2', 'Endeavour', 'FileAid', 'TSO', 'VSAM'],
      image: connectImage
    }
  ];

  return (
    <motion.div
      className="min-h-screen p-8 pt-16 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h2 
        className="text-4xl font-bold mb-8 text-gradient"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
