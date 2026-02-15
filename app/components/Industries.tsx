'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  FiCreditCard,
  FiHeart,
  FiPhone,
  FiShoppingCart,
  FiTruck,
  FiDatabase
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import { useRouter } from 'next/navigation'

const iconMap: Record<string, IconType> = {
  FiCreditCard: FiCreditCard,
  FiHeart: FiHeart,
  FiPhone: FiPhone,
  FiShoppingCart: FiShoppingCart,
  FiTruck: FiTruck,
  FiDatabase: FiDatabase,
}

const industries: {
  name: string
  description: string
  icon: keyof typeof iconMap
  link: string
}[] = [
  {
    name: 'Banking & Finance',
    description: 'Expertise in financial solutions, digital banking, compliance, and risk management.',
    icon: 'FiCreditCard',
    link: '/industries#Banking',
  },
  {
    name: 'Healthcare',
    description: 'Providing innovative healthcare IT solutions and patient care technologies.',
    icon: 'FiHeart',
    link: '/industries#Healthcare',
  },
  {
    name: 'Telecommunications',
    description: 'Optimizing telecom networks, cloud infrastructure, and customer experience platforms.',
    icon: 'FiPhone',
    link: '/industries#Telecommunications',
  },
  {
    name: 'Retail',
    description: 'Enhancing retail operations with e-commerce, supply chain, and CRM solutions.',
    icon: 'FiShoppingCart',
    link: '/industries#Retail',
  },
  {
    name: 'Automotive',
    description: 'Driving innovation in automotive software, IoT, and manufacturing automation.',
    icon: 'FiTruck',
    link: '/industries#Automotive',
  },
  {
    name: 'Mining',
    description: 'Specializing in mining automation, safety solutions, and resource management.',
    icon: 'FiDatabase',
    link: '/industries#Mining',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Industries() {
  const router = useRouter()

  return (
    <section id="industries" className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      {/* Section Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-[#D4AF37] mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Industries Expertise
      </motion.h2>

      {/* Industries Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {industries.map(({ name, description, icon, link }) => {
          const IconComponent: IconType | undefined = iconMap[icon]

          return (
            <motion.div
              key={name}
              className="relative flex flex-col bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition cursor-pointer border border-gray-100 hover:border-[#D4AF37]"
              variants={cardVariants}
              whileHover={{ y: -4 }}
              onClick={() => router.push(link)}
            >
              <div className="flex items-center gap-3 mb-4">
                {IconComponent && <IconComponent className="text-[#D4AF37]" size={24} />}
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{name}</h3>
              </div>
              <p className="text-gray-600 flex-grow">{description}</p>
              <div className="mt-4 text-[#D4AF37] font-semibold hover:text-yellow-400 transition flex items-center gap-1">
                Explore More →
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
