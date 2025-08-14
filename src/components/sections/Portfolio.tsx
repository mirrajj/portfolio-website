'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github, Maximize2 } from 'lucide-react'

// Mock data for now - will be replaced with Sanity data
const mockProjects = [
  {
    _id: '1',
    title: 'E-Commerce Platform',
    category: 'web design',
    description: 'Modern e-commerce solution with seamless checkout',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    _id: '2',
    title: 'Task Management App',
    category: 'app development',
    description: 'Intuitive task management for teams',
    image: '/api/placeholder/600/400',
    technologies: ['React Native', 'Firebase'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    _id: '3',
    title: 'Portfolio Website',
    category: 'wordpress',
    description: 'Custom WordPress theme for creative agency',
    image: '/api/placeholder/600/400',
    technologies: ['WordPress', 'PHP', 'MySQL'],
    liveUrl: 'https://example.com',
    githubUrl: null,
  },
  {
    _id: '4',
    title: 'SaaS Dashboard',
    category: 'web design',
    description: 'Analytics dashboard with real-time data',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    _id: '5',
    title: 'Mobile Banking App',
    category: 'app development',
    description: 'Secure banking application with biometric auth',
    image: '/api/placeholder/600/400',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    liveUrl: null,
    githubUrl: 'https://github.com',
  },
  {
    _id: '6',
    title: 'Blog Platform',
    category: 'wordpress',
    description: 'Multi-author blog with custom plugins',
    image: '/api/placeholder/600/400',
    technologies: ['WordPress', 'JavaScript', 'CSS'],
    liveUrl: 'https://example.com',
    githubUrl: null,
  },
]

interface Project {
  _id: string
  title: string
  category: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string | null
  githubUrl: string | null
}

interface PortfolioProps {
  projects?: Project[]
}

export default function Portfolio({ projects = mockProjects }: PortfolioProps) {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  
  const categories = ['all', 'web design', 'app development', 'wordpress']

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="portfolio" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest projects and creative solutions
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === cat 
                  ? 'bg-white text-black' 
                  : 'bg-transparent text-white border border-gray-600 hover:border-white'
              }`}
            >
              {cat === 'all' ? 'All' : cat.split(' ').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64 rounded-lg overflow-hidden bg-surface">
                  {/* Project image placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 p-6 w-full">
                      <h3 className="text-white text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-3">
                        {project.description}
                      </p>
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <span className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                            <ExternalLink size={16} />
                          </span>
                        )}
                        {project.githubUrl && (
                          <span className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                            <Github size={16} />
                          </span>
                        )}
                        <span className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                          <Maximize2 size={16} />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white">
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal (simplified version) */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-surface rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>
                
                <p className="text-gray-400 mb-4">{selectedProject.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      View Live
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}