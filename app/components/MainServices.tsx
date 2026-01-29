'use client'

import Head from 'next/head'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  LockIcon,
  ServerIcon,
  DatabaseIcon,
  ZapIcon,
  CodeIcon,
  GlobeIcon
} from 'lucide-react'

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
      'Zero Trust Model',
      'Threat Intelligence',
      'SIEM Integration',
      'Incident Response'
    ],
    Icon: LockIcon,
    svgAnimation: (
      <svg
        width="120"
        height="120"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto md:mx-0"
      >
        {/* Animated shield with pulsating outline */}
        <circle
          cx="32"
          cy="32"
          r="28"
          stroke="#facc15"
          strokeWidth="2"
          fill="none"
          style={{ animation: 'pulse 2.5s ease-in-out infinite' }}
        />
        <path
          d="M32 12 L44 20 L44 38 L32 52 L20 38 L20 20 Z"
          stroke="#fbbf24"
          strokeWidth="3"
          fill="#fbbf24"
          fillOpacity="0.2"
        />
        <path
          d="M32 24 L38 28 L38 36 L32 40 L26 36 L26 28 Z"
          fill="#fde68a"
        />
        <style jsx>{`
          @keyframes pulse {
            0%, 100% {
              stroke-opacity: 1;
              stroke-width: 2;
            }
            50% {
              stroke-opacity: 0.4;
              stroke-width: 4;
            }
          }
        `}</style>
      </svg>
    )
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
    visuals: ['Kubernetes Orchestration', 'Terraform IaC', 'Cloud DR Plans', 'Serverless Architecture'],
    Icon: ServerIcon,
    svgAnimation: (
      <svg
        width="120"
        height="120"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto md:mx-0"
      >
        {/* Cloud with animated raindrops */}
        <ellipse cx="32" cy="28" rx="20" ry="14" fill="#fbbf24" fillOpacity="0.3" />
        <ellipse cx="32" cy="24" rx="16" ry="12" fill="#facc15" />
        <circle cx="22" cy="40" r="4" fill="#fbbf24" />
        <circle cx="42" cy="40" r="4" fill="#fbbf24" />
        <circle
          cx="22"
          cy="48"
          r="2"
          fill="#fbbf24"
          style={{ animation: 'drop 1.5s infinite ease-in-out' }}
        />
        <circle
          cx="42"
          cy="48"
          r="2"
          fill="#fbbf24"
          style={{ animation: 'drop 1.5s 0.75s infinite ease-in-out' }}
        />
        <style jsx>{`
          @keyframes drop {
            0%, 100% {
              transform: translateY(0);
              opacity: 1;
            }
            50% {
              transform: translateY(8px);
              opacity: 0.4;
            }
          }
        `}</style>
      </svg>
    )
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    description:
      'Unlock actionable insights with real-time dashboards and AI-powered reporting.',
    approach:
      'From ETL pipelines to predictive modeling, we tailor data systems that align with your KPIs.',
    value:
      'Empowers data-driven decisions, customer intelligence, and operational efficiency.',
    visuals: ['ETL Pipelines', 'ML Models', 'BI Dashboards', 'Data Lakes'],
    Icon: DatabaseIcon,
    svgAnimation: (
      <svg
        width="120"
        height="120"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto md:mx-0"
      >
        {/* Bar chart with growing bars animation */}
        <rect x="12" y="36" width="8" height="12" fill="#facc15" style={{ animation: 'grow 2s ease-in-out infinite alternate' }} />
        <rect x="28" y="28" width="8" height="20" fill="#fbbf24" style={{ animation: 'grow 2s 0.4s ease-in-out infinite alternate' }} />
        <rect x="44" y="20" width="8" height="28" fill="#fde68a" style={{ animation: 'grow 2s 0.8s ease-in-out infinite alternate' }} />
        <style jsx>{`
          @keyframes grow {
            0% {
              height: 12px;
              y: 36;
            }
            100% {
              height: 32px;
              y: 16;
            }
          }
        `}</style>
      </svg>
    )
  },
  {
    id: 'testing',
    title: 'Software Testing',
    description:
      'Ensure reliability, performance, and quality across software lifecycles.',
    approach:
      'We use test automation, CI integration, and real-user testing for full SDLC coverage.',
    value:
      'Delivers faster time-to-market with fewer defects and greater resilience.',
    visuals: ['Automated Suites', 'Performance Benchmarks', 'Security Testing', 'Cross-Browser Checks'],
    Icon: ZapIcon,
    svgAnimation: (
      <svg
        width="120"
        height="120"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto md:mx-0"
      >
        {/* Gear with rotating animation */}
        <circle cx="32" cy="32" r="14" stroke="#facc15" strokeWidth="4" fill="none" />
        <path
          d="M32 18 L32 14 M32 50 L32 46 M18 32 L14 32 M50 32 L46 32 M22 22 L18 18 M46 46 L50 50 M22 42 L18 46 M46 18 L50 14"
          stroke="#fbbf24"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ animation: 'spin 3s linear infinite' }}
        />
        <style jsx>{`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
              transform-origin: 32px 32px;
            }
            100% {
              transform: rotate(360deg);
              transform-origin: 32px 32px;
            }
          }
        `}</style>
      </svg>
    )
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
    visuals: ['Agile Sprints', 'CI/CD Pipelines', 'Microservices Design', 'Code Quality Audits'],
    Icon: CodeIcon,
    svgAnimation: (
      <svg
        width="120"
        height="120"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto md:mx-0"
      >
        {/* Modular blocks animation */}
        <rect x="18" y="18" width="12" height="12" fill="#facc15" style={{ animation: 'slideIn 1.5s ease forwards' }} />
        <rect x="34" y="18" width="12" height="12" fill="#fbbf24" style={{ animation: 'slideIn 1.5s 0.5s ease forwards' }} />
        <rect x="18" y="34" width="12" height="12" fill="#fde68a" style={{ animation: 'slideIn 1.5s 1s ease forwards' }} />
        <rect x="34" y="34" width="12" height="12" fill="#facc15" style={{ animation: 'slideIn 1.5s 1.5s ease forwards' }} />
        <style jsx>{`
          @keyframes slideIn {
            0% {
              transform: translateX(-20px);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}</style>
      </svg>
    )
  },
  {
    id: 'iot',
    title: 'IoT Solutions',
    description:
      'Transform operations with sensor-based intelligence and edge analytics.',
    approach:
      'We architect IoT ecosystems that collect, process, and act on data at the edge.',
    value:
      'Boosts automation, visibility, and predictive maintenance across assets.',
    visuals: ['Sensor Networks', 'Edge Processing', 'Device Management', 'Predictive Analytics'],
    Icon: GlobeIcon,
    svgAnimation: (
      <svg
        width="120"
        height="120"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto md:mx-0"
      >
        {/* Network nodes connected with pulsing circles */}
        <circle cx="32" cy="32" r="10" fill="#fde68a" />
        <circle cx="32" cy="32" r="6" fill="#fbbf24" style={{ animation: 'pulse 2s infinite ease-in-out' }} />
        <line x1="32" y1="22" x2="32" y2="8" stroke="#facc15" strokeWidth="2" />
        <circle cx="32" cy="8" r="4" fill="#facc15" />
        <line x1="42" y1="32" x2="56" y2="32" stroke="#facc15" strokeWidth="2" />
        <circle cx="56" cy="32" r="4" fill="#facc15" />
        <line x1="32" y1="42" x2="32" y2="56" stroke="#facc15" strokeWidth="2" />
        <circle cx="32" cy="56" r="4" fill="#facc15" />
        <line x1="22" y1="32" x2="8" y2="32" stroke="#facc15" strokeWidth="2" />
        <circle cx="8" cy="32" r="4" fill="#facc15" />
        <style jsx>{`
          @keyframes pulse {
            0%, 100% {
              r: 6;
              opacity: 1;
            }
            50% {
              r: 8;
              opacity: 0.6;
            }
          }
        `}</style>
      </svg>
    )
  }
]

export default function Services() {
  const [arrowDown, setArrowDown] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setArrowDown((v) => !v)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Head>
        <title>Getabyte Tech | Services</title>
        <meta
          name="description"
          content="Discover Getabyte Tech's full suite of enterprise-grade tech consulting services."
        />
      </Head>
      <main className="bg-white text-gray-900 min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-24 px-6 text-center overflow-hidden">
          <div className="max-w-4xl mx-auto z-10 relative">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold mb-6"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Enterprise-Grade Tech Services, Engineered for Impact
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-blue-100 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              From Cybersecurity to Cloud and AI, Getabyte delivers future-proof solutions tailored to your business.
            </motion.p>
            <motion.div
              animate={{ y: arrowDown ? 10 : -10 }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <svg className="mx-auto w-6 h-6 text-yellow-400 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>

          {/* Optional: Hero background effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400/10 via-blue-800/20 to-blue-900/100 z-0" />
        </section>

        <section className="max-w-6xl mx-auto p-6 space-y-20">
          <h1 className="text-4xl font-extrabold text-center mb-12 text-yellow-500">
            Our Solutions
          </h1>

          {services.map(({ id, title, description, approach, value, visuals, Icon, svgAnimation }) => (
            <section
              key={id}
              id={id}
              className="flex flex-col md:flex-row md:space-x-12 items-center gap-8"
            >
              <div className="md:w-1/2 space-y-4">
                <h2 className="flex items-center text-3xl font-bold text-yellow-600 gap-3">
                  <Icon className="w-8 h-8 text-yellow-400" />
                  {title}
                </h2>
                <p className="text-lg text-gray-700">{description}</p>
                <h3 className="font-semibold mt-2">Our Approach</h3>
                <p className="text-gray-600">{approach}</p>
                <h3 className="font-semibold mt-2">How We Add Value</h3>
                <p className="text-gray-600">{value}</p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  {visuals.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              </div>

              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {svgAnimation}
              </motion.div>
            </section>
          ))}


        </section>
      </main>
    </>
  )
}
