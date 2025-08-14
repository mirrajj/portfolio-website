'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Smartphone, Globe, Layers, Zap } from 'lucide-react'

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and performant websites using modern technologies',
    icon: Globe,
    features: ['React/Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'App Development',
    description: 'Creating intuitive mobile and web applications',
    icon: Smartphone,
    features: ['Progressive Web Apps', 'React Native', 'Cross-platform'],
  },
  {
    title: 'UI/UX Design',
    description: 'Designing beautiful and user-friendly interfaces',
    icon: Palette,
    features: ['Figma', 'User Research', 'Prototyping'],
  },
  {
    title: 'WordPress',
    description: 'Custom WordPress themes and plugin development',
    icon: Layers,
    features: ['Custom Themes', 'Plugin Development', 'WooCommerce'],
  },
  {
    title: 'Website Building',
    description: 'Quick website solutions using modern builders',
    icon: Code,
    features: ['Wix', 'Webflow', 'Squarespace'],
  },
  {
    title: 'Performance',
    description: 'Optimizing websites for speed and SEO',
    icon: Zap,
    features: ['Core Web Vitals', 'SEO', 'Analytics'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-surface/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From idea to iconic - I bring your vision to life with cutting-edge technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                <div className="card card-hover h-full">
                  {/* Gradient border effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-4">{service.description}</p>

                    {/* Features */}
                    <ul className="space-y-1">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-sm text-gray-500 flex items-center"
                        >
                          <span className="w-1 h-1 bg-accent rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-300 mb-6">
            Services include: websites • web design • app development
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Let's talk
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}