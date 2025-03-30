import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Home, User, Code2, Mail } from 'lucide-react';

export const Navigation = () => {
  const links = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/about', icon: User, label: 'About' },
    { to: '/projects', icon: Code2, label: 'Projects' },
    { to: '/contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        className="flex gap-4 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {links.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `relative px-4 py-2 rounded-full transition-colors ${
                isActive ? 'text-white' : 'text-gray-400 hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="bubble"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="flex flex-col items-center gap-1">
                  <Icon className="w-5 h-5" />
                  <span className="text-xs">{label}</span>
                </div>
              </>
            )}
          </NavLink>
        ))}
      </motion.div>
    </nav>
  );
};
