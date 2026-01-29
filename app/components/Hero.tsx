'use client'
import { useEffect, useState, useRef } from 'react'
import { motion, useViewportScroll, useTransform, AnimatePresence } from 'framer-motion'

const slides = [
  {
    title: (
      <>
        Empowering Innovation with <span className="text-accent">Secure</span>,{' '}
        <span className="text-accent">Sustainable</span> Technology
      </>
    ),
    description:
      'Getabyte delivers cutting-edge Cloud, Cybersecurity, AI, and Software Solutions — helping enterprises scale responsibly while advancing a greener digital future.',
    img: '/images/p1.jpg',
    buttons: (
      <>
        <a
          href="#contact"
          className="bg-accent text-primary font-semibold px-6 py-3 rounded-xl hover:shadow-glow transition"
          aria-label="Talk to Us"
        >
          Talk to Us
        </a>
        <a
          href="#services"
          className="border border-accent text-accent px-6 py-3 rounded-xl hover:bg-accent hover:text-primary transition"
          aria-label="View Our Services"
        >
          Our Services
        </a>
      </>
    ),
  },
  {
    title: (
      <>
        Leveraging <span className="text-accent">Artificial Intelligence</span> to Transform Client Solutions
      </>
    ),
    description:
      'Harness AI-driven automation and insights to accelerate business growth and create smarter customer experiences.',
    img: '/images/p2.jpg',
    buttons: (
      <a
        href="#ai-solutions"
        className="bg-accent text-primary font-semibold px-6 py-3 rounded-xl hover:shadow-glow transition"
        aria-label="Learn more about AI solutions"
      >
        Learn More
      </a>
    ),
  },
  {
    title: (
      <>
        Stay Ahead with <span className="text-accent">Cybersecurity</span> Trends
      </>
    ),
    description:
      'Explore the latest advancements in cybersecurity to protect your enterprise from emerging threats and vulnerabilities.',
    img: '/images/p3.jpg',
    buttons: (
      <a
        href="/blog/cybersecurity-trends"
        className="bg-accent text-primary font-semibold px-6 py-3 rounded-xl hover:shadow-glow transition"
        aria-label="Read more about cybersecurity trends"
      >
        Read More
      </a>
    ),
  },
]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { scrollY } = useViewportScroll()
  const yText = useTransform(scrollY, [0, 300], [0, -40])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  useEffect(() => {
    timeoutRef.current = setInterval(nextSlide, 7000)
    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current)
      }
    }
  }, [])
  

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const swipeStart = useRef(0)
  const swipeHandlers = {
    onTouchStart: (e: React.TouchEvent) => {
      swipeStart.current = e.touches[0].clientX
    },
    onTouchEnd: (e: React.TouchEvent) => {
      const delta = e.changedTouches[0].clientX - swipeStart.current
      if (delta > 50) prevSlide()
      if (delta < -50) nextSlide()
    },
  }

  return (
    <section className="relative h-screen w-full overflow-hidden" {...swipeHandlers}>
      {/* Background Slides with Ken Burns Effect */}
      {slides.map((slide, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          initial={{ scale: 1.05 }}
          animate={{
            scale: currentSlide === i ? 1.1 : 1,
            opacity: currentSlide === i ? 1 : 0,
          }}
          transition={{ duration: 7, ease: 'easeInOut' }}
          style={{
            backgroundImage: `url(${slide.img})`,
            zIndex: currentSlide === i ? 10 : 0,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        </motion.div>
      ))}

      {/* Slide Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-4 max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            style={{ y: yText }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 drop-shadow-md">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {slides[currentSlide].buttons}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
        {slides.map((_, i) => (
          <div key={i} className="relative w-6 h-6">
            <button
              onClick={() => setCurrentSlide(i)}
              className={`w-4 h-4 rounded-full absolute left-1 top-1 transition ${
                currentSlide === i ? 'bg-accent' : 'bg-white/30 hover:bg-accent'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
            {currentSlide === i && (
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 7, ease: 'linear' }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-6 border-b-2 border-r-2 border-white transform rotate-45 opacity-80"
        />
      </div>
    </section>
  )
}

export default Hero
