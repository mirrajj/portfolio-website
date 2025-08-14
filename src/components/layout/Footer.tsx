'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Youtube, Github, Linkedin, Facebook, Instagram, Heart } from 'lucide-react'

const socialLinks = [
  // { name: 'YouTube', icon: Youtube, url: 'https://youtube.com', color: 'hover:text-red-500' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/mirrajj', color: 'hover:text-gray-400' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/emmanuel-adonteng-745ab6321/', color: 'hover:text-blue-500' },
  // { name: 'Facebook', icon: Facebook, url: 'https://facebook.com', color: 'hover:text-blue-600' },
  // { name: 'Instagram', icon: Instagram, url: 'https://instagram.com', color: 'hover:text-pink-500' },
]

const footerLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface/50 border-t border-gray-800">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold mb-4">mirraj</h3>
            <p className="text-gray-400 text-sm mb-4">
              Your go-to Frontend Developer for creating modern, responsive, and user-friendly web experiences.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info and social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-2 mb-6">
              <p className="text-gray-400 text-sm">
                <a href="mailto:jowills21@gmail.com" className="hover:text-white transition-colors">
                  jowills21@gmail.com
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                <a href="tel:+233597362367" className="hover:text-white transition-colors">
                  +233 597 362 367
                </a>
              </p>
            </div>
            
            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 bg-background rounded-lg transition-colors ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
            © {currentYear} All rights reserved. Made with 
            <Heart size={14} className="text-red-500 fill-red-500" />
            by mirraj
          </p>
        </motion.div>
      </div>
    </footer>
  )
}