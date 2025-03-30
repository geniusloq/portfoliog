import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Code, Server, Database } from 'lucide-react';

export const About = () => {
  const skills = [
    {
      icon: BrainCircuit,
      title: 'Mainframe Development',
      description: 'Experienced in developing and maintaining enterprise-level mainframe applications using COBOL, JCL, and DB2.'
    },
    {
      icon: Server,
      title: 'Database Management',
      description: 'Proficient in DB2 and VSAM for managing and optimizing large-scale data operations within mainframe environments.'
    },
    {
      icon: Code,
      title: 'Batch Job Automation',
      description: 'Skilled in automating batch job processing using JCL and optimizing workflows for improved efficiency.'
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
        About Me
      </motion.h2>

      <motion.p 
        className="text-xl text-gray-400 mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I am a dedicated Mainframe Developer with expertise in building and optimizing large-scale enterprise applications. Passionate about streamlining legacy systems and ensuring high efficiency and reliability in mainframe environments.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <skill.icon className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-400">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
