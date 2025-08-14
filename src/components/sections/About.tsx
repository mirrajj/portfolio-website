'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Download, Code2, Palette, Rocket } from 'lucide-react'

// Mock data - will be replaced with Sanity data
const mockAbout = {
  name: 'Joe',
  role: 'Frontend Developer',
  bio: `I'm a frontend developer with a passion for crafting responsive websites and intuitive user interfaces. With experience in UI/UX design and modern web technologies, I focus on building clean, accessible, and engaging digital experiences. I love turning ideas into polished products that users enjoy.`,
  image: '/api/placeholder/400/400',
  skills: [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      category: 'Design',
      items: ['Figma', 'Photoshop', 'UI/UX Design'],
    },
    {
      category: 'Others',
      items: ['PostgreSQL', 'Node', 'Git', 'Vite'],
    },
    {
      category: 'Tools',
      items: ['Webpack', 'VS Code'],
    },
  ],
  experience: [
    {
      role: 'Frontend Developer',
      company: 'Digiits Agency',
      duration: '2023-2024',
      description: 'Worked on various web projects for clients at Digiits Agency.',
    },
    {
      role: 'Freelance Developer',
      company: 'Freelance',
      duration: '2024-now',
      description: 'Providing freelance web development services.',
    },
  ],
}

interface AboutProps {
  about?: typeof mockAbout
}

export default function About({ about = mockAbout }: AboutProps) {
  return (
    <section id="about" className="section-padding bg-surface/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and basic info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block mb-6">
              {/* Profile image placeholder */}
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">J</span>
                </div>
              </div>
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent/30 rounded-full"
              />
            </div>

            <h3 className="text-3xl font-bold mb-2">{about.name}</h3>
            <p className="text-xl text-accent mb-4">{about.role}</p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </motion.button>
          </motion.div>

          {/* Right side - Bio and details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {about.bio}
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-surface rounded-lg"
              >
                <Code2 className="w-8 h-8 mx-auto mb-2 text-accent" />
                <div className="text-2xl font-bold">2+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-surface rounded-lg"
              >
                <Rocket className="w-8 h-8 mx-auto mb-2 text-accent" />
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-gray-400">Projects Done</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-surface rounded-lg"
              >
                <Palette className="w-8 h-8 mx-auto mb-2 text-accent" />
                <div className="text-2xl font-bold">Client Experience</div>
                <div className="text-sm text-gray-400">Client Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Skills & Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface rounded-lg p-6"
              >
                <h4 className="font-semibold text-accent mb-4">{skillGroup.category}</h4>
                <ul className="space-y-2">
                  {skillGroup.items.map(skill => (
                    <li key={skill} className="text-gray-400 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Experience</h3>
          <div className="max-w-3xl mx-auto">
            {about.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-8 last:pb-0"
              >
                {/* Timeline line */}
                {index !== about.experience.length - 1 && (
                  <div className="absolute left-2 top-8 bottom-0 w-0.5 bg-gray-700" />
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-4 h-4 bg-accent rounded-full" />
                
                <div className="bg-surface rounded-lg p-6">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">{exp.role}</h4>
                    <span className="text-sm text-gray-400">{exp.duration}</span>
                  </div>
                  <p className="text-accent mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}