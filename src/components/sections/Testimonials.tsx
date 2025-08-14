'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

// Mock data - will be replaced with Sanity data
const mockTestimonials = [
  {
    _id: '1',
    clientName: 'Sarah Johnson',
    clientRole: 'CEO',
    clientCompany: 'Tech Startup',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    clientImage: '/api/placeholder/100/100',
    rating: 5,
  },
  {
    _id: '2',
    clientName: 'Michael Chen',
    clientRole: 'Product Manager',
    clientCompany: 'Digital Agency',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    clientImage: '/api/placeholder/100/100',
    rating: 5,
  },
  {
    _id: '3',
    clientName: 'Emily Davis',
    clientRole: 'Marketing Director',
    clientCompany: 'E-commerce Brand',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    clientImage: '/api/placeholder/100/100',
    rating: 5,
  },
]

interface Testimonial {
  _id: string
  clientName: string
  clientRole: string
  clientCompany: string
  testimonial: string
  clientImage: string
  rating: number
}

interface TestimonialsProps {
  testimonials?: Testimonial[]
}

export default function Testimonials({ testimonials = mockTestimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What clients have to say..
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote decoration */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-accent/20">
              <Quote size={60} />
            </div>

            {/* Testimonial carousel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="text-center px-4 md:px-12"
              >
                {/* Client avatar */}
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 p-0.5">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <span className="text-2xl font-bold">
                        {testimonials[currentIndex].clientName.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Rating stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={`${
                        i < testimonials[currentIndex].rating
                          ? 'text-yellow-500 fill-yellow-500'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].testimonial}"
                </p>

                {/* Client info */}
                <div>
                  <h4 className="font-semibold text-lg">
                    {testimonials[currentIndex].clientName}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[currentIndex].clientRole} at{' '}
                    <span className="text-accent">
                      {testimonials[currentIndex].clientCompany}
                    </span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-surface hover:bg-surface/80 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-surface hover:bg-surface/80 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-accent'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Additional testimonials grid (optional) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mt-16"
          >
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-surface rounded-lg p-6"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={`${
                        i < testimonial.rating
                          ? 'text-yellow-500 fill-yellow-500'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                  "{testimonial.testimonial}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 p-0.5">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <span className="text-xs font-bold">
                        {testimonial.clientName.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium">{testimonial.clientName}</h5>
                    <p className="text-xs text-gray-500">{testimonial.clientCompany}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}