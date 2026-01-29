'use client'

import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from "next/image"

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const AITransformationPage = () => {
  return (
    <>
      <Head>
        <title>AI & Digital Transformation | Getabyte</title>
        <meta name="description" content="See how Getabyte transforms businesses using AI, automation, and digital innovation." />
      </Head>

      <main className="relative min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 font-sans">
        {/* Background SVG shapes */}
        <svg
          className="absolute top-0 left-0 w-full h-64 opacity-10 pointer-events-none"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#1F2937" />
            </linearGradient>
          </defs>
          <path
            fill="url(#grad1)"
            fillOpacity="0.2"
            d="M0,160L48,165.3C96,171,192,181,288,186.7C384,192,480,192,576,165.3C672,139,768,85,864,74.7C960,64,1056,96,1152,117.3C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>

        {/* Header */}
        <header className="max-w-7xl mx-auto px-6 py-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-extrabold text-[#D4AF37] tracking-wide drop-shadow-lg"
          >
            AI & Digital Transformation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-4 max-w-3xl mx-auto text-lg text-gray-700"
          >
            See how Getabyte transforms businesses using AI, automation, and digital innovation to create smarter, more efficient enterprises.
          </motion.p>
        </header>

        {/* Content Sections */}
        <section className="max-w-7xl mx-auto px-6 grid gap-20 md:grid-cols-2 md:gap-24 mb-24">
          {/* Section 1 */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-shadow duration-500 cursor-default"
            style={{ perspective: 1200 }}
            whileHover={{ rotateY: 10, rotateX: 5 }}
          >
            <h2 className="text-4xl font-bold text-[#D4AF37] mb-6 tracking-tight">AI-Driven Business Optimization</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We seamlessly integrate machine learning and intelligent automation into your workflows to minimize manual tasks, boost efficiency, and enable smarter decision-making. Our solutions streamline operations, reduce errors, and empower your team to focus on high-value activities, driving growth and innovation while optimizing overall performance across your business processes.
            </p>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative rounded-3xl shadow-2xl overflow-hidden hover:scale-[1.03] transition-transform duration-700 cursor-pointer"
            style={{ perspective: 1200 }}
            whileHover={{ rotateY: -8, rotateX: 4 }}
          >
            {/* Image with subtle 3D parallax effect */}
         

<Image
  src="/images/ai-insight.jpg"
  alt="AI Solutions"
  width={600}
  height={400}
  className="w-full h-auto object-cover rounded-3xl"
  draggable={false}
/>

            {/* Overlay gradient for polish */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl pointer-events-none" />
          </motion.div>

          {/* Section 3 */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative rounded-3xl shadow-2xl overflow-hidden hover:scale-[1.03] transition-transform duration-700 cursor-pointer"
            style={{ perspective: 1200 }}
            whileHover={{ rotateY: 6, rotateX: -5 }}
          >
            <img
              src="/images/digital-transformation.jpg"
              alt="Digital Transformation"
              className="w-full h-auto object-cover rounded-3xl"
              loading="lazy"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl pointer-events-none" />
          </motion.div>

          {/* Section 4 */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-shadow duration-500 cursor-default"
            style={{ perspective: 1200 }}
            whileHover={{ rotateY: 12, rotateX: -7 }}
          >
            <h2 className="text-4xl font-bold text-[#D4AF37] mb-6 tracking-tight">Seamless Digital Experiences</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We help businesses adopt scalable digital ecosystems designed for innovation and customer satisfaction. From cloud-native platforms to intelligent applications, our solutions are tailored to each organization&apos;s needs. By leveraging advanced technologies and flexible architectures, we enable seamless growth, improved efficiency, and a competitive edge, ensuring businesses stay ahead while delivering exceptional experiences to their customers.
            </p>
          </motion.div>
        </section>
      </main>
    </>
  )
}

export default AITransformationPage
