import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const socialLinks = [
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/gaurav-kumar-2a777812a/' },
    { icon: MdEmail, label: 'Email', href: 'mailto:gauravei16@gmail.com' },
    { icon: FiPhone, label: 'Phone', href: 'tel:8109828220' }
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_yourID', 
      'template_yourID', 
      form,
      'your_public_key'
    ).then(
      () => {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      },
      (error) => {
        setStatus('Failed to send message. Try again.');
        console.error(error);
      }
    );
  };

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
        Contact Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
          <p className="text-gray-400 mb-8">
            Feel free to reach out if you want to discuss a project, work together, or just say hello!
          </p>

          <div className="space-y-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors p-4 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/50"
              >
                <link.icon className="w-6 h-6" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          className="space-y-6"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors font-medium"
          >
            Send Message
          </button>
          {status && <p className="text-white mt-4">{status}</p>}
        </motion.form>
      </div>
    </motion.div>
  );
};