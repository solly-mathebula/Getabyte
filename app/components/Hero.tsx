'use client'
import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    title: (
      <>
        Empowering Innovation with{' '}
        <span className="text-yellow-400">Secure</span> &{' '}
        <span className="text-yellow-400">Sustainable</span> Technology
      </>
    ),
    description:
      'Getabyte delivers enterprise-grade Cloud, Cybersecurity, AI and Digital Solutions that enable scalable transformation and long-term competitive advantage.',
    img: '/images/p1.jpg',
  },
  {
    title: (
      <>
        Transforming Enterprises Through{' '}
        <span className="text-yellow-400">Artificial Intelligence</span>
      </>
    ),
    description:
      'Harness AI-driven automation, analytics and intelligent systems to accelerate innovation and unlock measurable business value.',
    img: '/images/p2.jpg',
  },
  {
    title: (
      <>
        Advanced <span className="text-yellow-400">Cybersecurity</span>{' '}
        for the Modern Enterprise
      </>
    ),
    description:
      'Protect your infrastructure, data and digital assets with proactive, zero-trust security strategies.',
    img: '/images/p3.jpg',
  },
]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length)

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 8000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Slides */}
      {slides.map((slide, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 bg-cover bg-center"
          initial={{ scale: 1.05 }}
          animate={{
            scale: currentSlide === i ? 1.08 : 1,
            opacity: currentSlide === i ? 1 : 0,
          }}
          transition={{ duration: 6, ease: 'easeInOut' }}
          style={{
            backgroundImage: `url(${slide.img})`,
            zIndex: currentSlide === i ? 10 : 0,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-white"
            >
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
                {slides[currentSlide].title}
              </h1>

              <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
                {slides[currentSlide].description}
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-5">
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start a Conversation
                </a>

                <a
                  href="#services"
                  className="px-8 py-4 rounded-full border border-white/40 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === i
                ? 'w-10 bg-yellow-400'
                : 'w-4 bg-white/40 hover:bg-yellow-400'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
