'use client'

import { Cloud, ShieldCheck, BarChart2, CheckSquare, Layout, NetworkIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const services = [
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description:
      'Enterprise-grade security architecture, AI-driven threat detection, and risk management to protect critical digital assets and ensure regulatory compliance.',
  },
  {
    icon: Cloud,
    title: 'Cloud Engineering',
    description:
      'Design, migration, and modernization of secure, scalable cloud platforms to enable agility, resilience, and cost optimization.',
  },
  {
    icon: BarChart2,
    title: 'Data & Analytics',
    description:
      'Advanced analytics, data platforms, and business intelligence to transform data into actionable insights and predictive decision-making.',
  },
  {
    icon: CheckSquare,
    title: 'Quality Engineering',
    description:
      'Enterprise testing and quality assurance frameworks to ensure reliability, performance, and scalability across mission-critical applications.',
  },
  {
    icon: Layout,
    title: 'Application Engineering',
    description:
      'Modern application design, development, and lifecycle management to deliver secure, scalable, and high-performing digital solutions.',
  },
  {
    icon: NetworkIcon,
    title: 'IoT & Intelligent Systems',
    description:
      'Connected device platforms, real-time data processing, and secure integration to enable intelligent operations and industrial automation.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function ServicesPage() {
  const router = useRouter()

  return (
    <main id='services' className="bg-white text-gray-900">
      {/* HERO (MATCHES TRANSFORMATION PAGE) */}
      <section className="relative overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-semibold tracking-tight"
          >
            Enterprise Technology Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-4xl mx-auto text-xl text-gray-600 leading-relaxed"
          >
            Getabyte delivers enterprise-grade technology capabilities designed to
            modernize platforms, strengthen security, and enable data-driven
            transformation at scale.
          </motion.p>

          <div className="mt-10 h-1 w-28 bg-[#D4AF37] mx-auto rounded-full" />
        </div>
      </section>

      {/* SERVICES GRID (ENTERPRISE STYLE) */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-10">
          {services.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="
                bg-white border border-gray-200 rounded-xl p-8
                hover:shadow-xl hover:border-gray-300
                transition-all duration-300
              "
            >
              <div className="mb-5">
                <Icon className="text-[#D4AF37]" size={32} />
              </div>

              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                {title}
              </h2>

              <p className="text-gray-600 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ENTERPRISE VALUE STATEMENT */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Built for Enterprise Scale, Security & Performance
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Our solutions are designed with enterprise architecture, governance,
            and security at their core — enabling organizations to modernize
            confidently while maintaining operational resilience and regulatory
            compliance.
          </p>
        </div>
      </section>

      {/* EXECUTIVE CTA (MATCHES TRANSFORMATION PAGE) */}
      <section className="bg-[#0B1220] text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Partner with Getabyte to Modernize with Confidence
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Engage our experts to define and execute a secure, scalable
            technology roadmap aligned to your business strategy.
          </p>

          <div className="mt-10">
            <button
              onClick={() => router.push('/solutions')}
              className="inline-block bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-md hover:bg-[#c9a633] transition"
            >
              Explore Our Solutions
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
