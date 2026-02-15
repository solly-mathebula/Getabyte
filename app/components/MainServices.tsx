'use client'

import Head from 'next/head'
import { motion } from 'framer-motion'
import { LockIcon, ServerIcon, DatabaseIcon, ZapIcon, CodeIcon, GlobeIcon } from 'lucide-react'

const services = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description:
      'Protect your enterprise against evolving threats with Getabyte’s proactive, compliance-driven cybersecurity strategies.',
    approach:
      'We combine real-time threat detection with layered defense models and align with international standards like ISO 27001 and NIST.',
    value:
      'This minimizes breaches, improves trust, and ensures regulatory compliance across sectors.',
    visuals: [
      'Zero Trust Architecture',
      'Threat Intelligence & SIEM',
      'Incident Response & SOC',
      'Regulatory Compliance',
    ],
    Icon: LockIcon,
  },
  {
    id: 'cloud',
    title: 'Cloud Engineering',
    description:
      'Design and deploy resilient cloud infrastructures that scale with your business.',
    approach:
      'Our architects leverage AWS, Azure, and GCP with DevOps pipelines, disaster recovery, and zero-downtime deployment.',
    value:
      'Delivers agility, reduced costs, and future-ready enterprise scalability.',
    visuals: [
      'Hybrid & Multi-Cloud',
      'Kubernetes & Containers',
      'Infrastructure as Code',
      'Disaster Recovery',
    ],
    Icon: ServerIcon,
  },
  {
    id: 'analytics',
    title: 'Data & Analytics',
    description:
      'Unlock actionable insights with real-time dashboards and AI-powered reporting.',
    approach:
      'From ETL pipelines to predictive modeling, we tailor data systems that align with your KPIs.',
    value:
      'Empowers data-driven decisions, customer intelligence, and operational efficiency.',
    visuals: [
      'Modern Data Platforms',
      'Advanced Analytics',
      'Machine Learning Models',
      'Enterprise BI',
    ],
    Icon: DatabaseIcon,
  },
  {
    id: 'testing',
    title: 'Quality Engineering',
    description:
      'Ensure reliability, performance, and quality across software lifecycles.',
    approach:
      'We use test automation, CI integration, and real-user testing for full SDLC coverage.',
    value:
      'Delivers faster time-to-market with fewer defects and greater resilience.',
    visuals: [
      'Test Automation',
      'Performance Engineering',
      'Security Testing',
      'CI/CD Quality Gates',
    ],
    Icon: ZapIcon,
  },
  {
    id: 'engineering',
    title: 'Application Engineering',
    description:
      'Build high-performing, scalable software with modular architecture.',
    approach:
      'Our agile squads specialize in full-stack development, DevSecOps, and microservices.',
    value:
      'Drives innovation with reusable, cloud-native systems that evolve with business goals.',
    visuals: [
      'Microservices Architecture',
      'Cloud-Native Development',
      'DevSecOps',
      'Modern Application Platforms',
    ],
    Icon: CodeIcon,
  },
  {
    id: 'iot',
    title: 'IoT & Intelligent Systems',
    description:
      'Transform operations with sensor-based intelligence and edge analytics.',
    approach:
      'We architect IoT ecosystems that collect, process, and act on data at the edge.',
    value:
      'Boosts automation, visibility, and predictive maintenance across assets.',
    visuals: [
      'Connected Devices',
      'Edge Analytics',
      'Industrial IoT',
      'Predictive Maintenance',
    ],
    Icon: GlobeIcon,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <>
      <Head>
        <title>Getabyte | Enterprise Technology Services</title>
        <meta
          name="description"
          content="Enterprise-grade cybersecurity, cloud, data, application, and intelligent systems services."
        />
      </Head>

      <main className="bg-white text-gray-900 min-h-screen">
        {/* HERO SECTION WITH IMAGE */}
        <section className="relative h-[600px] overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/p1.jpg')" }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 text-center flex flex-col justify-center h-full">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-lg"
            >
              Enterprise Technology Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-4xl mx-auto text-xl md:text-2xl text-gray-200 leading-relaxed drop-shadow-md"
            >
              Getabyte delivers secure, scalable, and data-driven technology services
              designed to modernize platforms, strengthen resilience, and enable
              sustainable digital transformation.
            </motion.p>

            <div className="mt-10 h-1 w-28 bg-[#D4AF37] mx-auto rounded-full" />
          </div>
        </section>

        {/* SERVICES DETAIL SECTIONS */}
        <section className="max-w-7xl mx-auto px-6 py-24 space-y-28">
          {services.map(({ id, title, description, approach, value, visuals, Icon }) => (
            <motion.section
              key={id}
              id={id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-16 items-start"
            >
              {/* TEXT COLUMN */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="text-[#D4AF37]" size={22} />
                  <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">{description}</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-2">
                      Our Approach
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{approach}</p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-2">
                      Business Value
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{value}</p>
                  </div>
                </div>
              </div>

              {/* VISUAL CONTENT PANEL */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-10">
                <div className="border-l-4 border-[#D4AF37] pl-6">
                  <h4 className="text-sm uppercase tracking-wide text-gray-400 mb-6">
                    Core Capabilities
                  </h4>

                  <ul className="space-y-3 text-gray-700">
                    {visuals.map((v) => (
                      <li key={v} className="flex items-start gap-3">
                        <span className="mt-1 w-2 h-2 bg-[#D4AF37] rounded-full" />
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>
          ))}
        </section>
      </main>
    </>
  )
}
