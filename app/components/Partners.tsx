'use client'

import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'

const partners = [
  {
    name: 'Microsoft',
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    width: 160,
    height: 50,
  },
  {
    name: 'AWS',
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    width: 150,
    height: 50,
  },
  {
    name: 'SAP',
    src: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
    width: 150,
    height: 50,
  },
  {
    name: 'IBM',
    src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    width: 150,
    height: 50,
  },
]

const PartnersPage = () => {
  return (
    <>
      <Head>
        <title>Our Technology Partners | Getabyte</title>
        <meta
          name="description"
          content="Getabyte partners with global technology leaders to deliver enterprise-grade cloud, AI, cybersecurity and digital transformation solutions."
        />
      </Head>

      <main
        id="partners"
        className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white text-gray-900"
      >
        {/* Background Glow Effects */}
        <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] bg-yellow-400/20 rounded-full blur-[140px]" />

        {/* Hero Section */}
        <section className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-blue-950 leading-tight">
              Strategic Technology Partnerships
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
              Getabyte collaborates with globally recognized technology
              innovators to architect secure, scalable and future-ready
              enterprise solutions.
            </p>
          </motion.div>
        </section>

        {/* Partners Grid */}
        <section className="relative pb-28 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl p-10 flex items-center justify-center border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500"
              >
                {/* Subtle hover glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-900/5 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  priority
                  className="relative object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Strategic Value Section */}
        <section className="relative pb-32 px-6 md:px-12 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
              Enterprise-Grade Collaboration
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Through our strategic alliances, Getabyte delivers integrated
              cloud ecosystems, advanced analytics, AI-driven automation and
              cybersecurity frameworks tailored to regulated industries such as
              banking, healthcare, retail and telecommunications.
            </p>
          </motion.div>
        </section>
      </main>
    </>
  )
}

export default PartnersPage
