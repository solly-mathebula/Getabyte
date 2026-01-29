'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Services data
const services = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect your enterprise against evolving threats with Getabyte’s proactive, compliance-driven cybersecurity strategies.',
    approach: 'We combine real-time threat detection with layered defense models and align with international standards like ISO 27001 and NIST.',
    value: 'This minimizes breaches, improves trust, and ensures regulatory compliance across sectors.',
    visuals: ['Zero Trust Model', 'Threat Intelligence', 'SIEM Integration', 'Incident Response']
  },
  {
    id: 'cloud',
    title: 'Cloud Engineering',
    description: 'Design and deploy resilient cloud infrastructures that scale with your business.',
    approach: 'Our architects leverage AWS, Azure, and GCP with DevOps pipelines, disaster recovery, and zero-downtime deployment.',
    value: 'Delivers agility, reduced costs, and future-ready enterprise scalability.',
    visuals: ['Kubernetes Orchestration', 'Terraform IaC', 'Cloud DR Plans', 'Serverless Architecture']
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    description: 'Unlock actionable insights with real-time dashboards and AI-powered reporting.',
    approach: 'From ETL pipelines to predictive modeling, we tailor data systems that align with your KPIs.',
    value: 'Empowers data-driven decisions, customer intelligence, and operational efficiency.',
    visuals: ['ETL Pipelines', 'ML Models', 'BI Dashboards', 'Data Lakes']
  },
  {
    id: 'testing',
    title: 'Software Testing',
    description: 'Ensure reliability, performance, and quality across software lifecycles.',
    approach: 'We use test automation, CI integration, and real-user testing for full SDLC coverage.',
    value: 'Delivers faster time-to-market with fewer defects and greater resilience.',
    visuals: ['Automated Suites', 'Performance Benchmarks', 'Security Testing', 'Cross-Browser Checks']
  },
  {
    id: 'engineering',
    title: 'Application Engineering',
    description: 'Build high-performing, scalable software with modular architecture.',
    approach: 'Our agile squads specialize in full-stack development, DevSecOps, and microservices.',
    value: 'Drives innovation with reusable, cloud-native systems that evolve with business goals.',
    visuals: ['Agile Sprints', 'CI/CD Pipelines', 'Microservices Design', 'Code Quality Audits']
  },
  {
    id: 'iot',
    title: 'IoT Solutions',
    description: 'Transform operations with sensor-based intelligence and edge analytics.',
    approach: 'We architect IoT ecosystems that collect, process, and act on data at the edge.',
    value: 'Boosts automation, visibility, and predictive maintenance across assets.',
    visuals: ['Sensor Networks', 'Edge Processing', 'Device Management', 'Predictive Analytics']
  }
]

export default function MainServices() {
  const [activeId, setActiveId] = useState(services[0].id)

  useEffect(() => {
    const handleScroll = () => {
      let lastVisibleId = services[0].id
      for (const s of services) {
        const el = document.getElementById(s.id)
        if (el && el.getBoundingClientRect().top < window.innerHeight / 2) {
          lastVisibleId = s.id
        }
      }
      setActiveId(lastVisibleId)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Side Navigation */}
      <nav className="md:w-64 sticky top-0 z-20 bg-[#001F3F] text-white h-screen hidden md:flex flex-col px-6 py-10 space-y-4">
        {services.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`py-2 px-3 rounded-md text-sm transition ${
              activeId === s.id ? 'bg-yellow-400 text-black font-bold' : 'hover:bg-yellow-300 hover:text-black'
            }`}
          >
            {s.title}
          </a>
        ))}
      </nav>

      {/* Mobile Select Nav */}
      <div className="md:hidden sticky top-0 z-30 bg-[#001F3F] px-4 py-3">
        <select
          className="w-full p-2 bg-yellow-400 text-black rounded font-semibold"
          onChange={(e) =>
            document.getElementById(e.target.value)?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {services.map((service) => (
          <section
            key={service.id}
            id={service.id}
            className="px-6 md:px-20 py-20 border-b border-gray-200 scroll-mt-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-yellow-500 mb-4">{service.title}</h2>
              <p className="text-lg text-gray-700 max-w-3xl mb-6">{service.description}</p>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div>
                  <h4 className="text-xl font-semibold text-black mb-2">Our Approach</h4>
                  <p className="text-gray-600 text-sm">{service.approach}</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-black mb-2">Value to Clients</h4>
                  <p className="text-gray-600 text-sm">{service.value}</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-black mb-2">Sustainability</h4>
                  <p className="text-gray-600 text-sm">
                    Getabyte integrates sustainable tech practices in every solution—reducing digital carbon footprint and enhancing system longevity.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {service.visuals.map((item, index) => (
                  <motion.div
                    key={item}
                    className="bg-yellow-100 hover:bg-yellow-300 transition-all text-center p-5 rounded-xl shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-sm font-medium text-yellow-900">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        ))}
      </main>
    </div>
  )
}
