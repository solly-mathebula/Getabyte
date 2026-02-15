'use client'

import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const industryLinks = [
  {
    title: 'Banking & Financial Services',
    desc: 'Fraud detection, credit risk modeling, intelligent customer service, regulatory automation',
    link: '/industries/#banking',
  },
  {
    title: 'Healthcare',
    desc: 'Clinical decision support, patient flow optimization, predictive capacity planning',
    link: '/industries/#healthcare',
  },
  {
    title: 'Telecommunications',
    desc: 'Network optimization, churn prediction, AI-driven customer experience',
    link: '/industries/#telecommunications',
  },
  {
    title: 'Retail',
    desc: 'Demand forecasting, pricing optimization, personalized customer engagement',
    link: '/industries/#retail',
  },
  {
    title: 'Mining & Industrial',
    desc: 'Predictive maintenance, safety analytics, asset optimization',
    link: '/industries/#mining',
  },
  {
    title: 'Public Sector',
    desc: 'Digital citizen services, fraud prevention, operational transparency',
    link: '/industries/#public-sector',
  },
]



const AITransformationPage = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>AI & Digital Transformation | Getabyte</title>
        <meta
          name="description"
          content="Enterprise AI and digital transformation services to drive operational excellence, innovation, and sustainable growth."
        />
      </Head>

      <main className="bg-white text-gray-900">
        {/* HERO */}
        <section id='transformation' className="relative overflow-hidden border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-28 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-semibold tracking-tight"
            >
              AI & Digital Transformation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-4xl mx-auto text-xl text-gray-600 leading-relaxed"
            >
              Getabyte partners with enterprises to embed artificial intelligence,
              automation, and modern digital platforms across core operations — enabling
              measurable performance improvement, accelerated innovation, and sustained
              competitive advantage.
            </motion.p>

            <div className="mt-10 h-1 w-28 bg-[#D4AF37] mx-auto rounded-full" />
          </div>
        </section>

        {/* ENTERPRISE OUTCOMES */}
        <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-4 gap-12 text-center">
          {[
            ['30–50%', 'Operational cost reduction'],
            ['2–4x', 'Decision-making speed'],
            ['40%+', 'Process automation uplift'],
            ['99.9%', 'Enterprise platform reliability'],
          ].map(([metric, label]) => (
            <motion.div
              key={metric}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="text-4xl font-semibold text-[#D4AF37]">
                {metric}
              </div>
              <div className="text-gray-600">{label}</div>
            </motion.div>
          ))}
        </section>

        {/* TRANSFORMATION FRAMEWORK */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl font-semibold tracking-tight text-center"
            >
              Our Enterprise Transformation Framework
            </motion.h2>

            <div className="grid md:grid-cols-4 gap-10 mt-16">
              {[
                ['Discover', 'Enterprise assessment, data readiness, AI opportunity mapping'],
                ['Design', 'Target architecture, AI operating model, business case definition'],
                ['Transform', 'Platform modernization, AI deployment, process automation'],
                ['Scale', 'Change management, governance, continuous optimization'],
              ].map(([title, desc]) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white p-8 border border-gray-200 rounded-xl"
                >
                  <h3 className="text-xl font-semibold mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-20 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-semibold tracking-tight mb-6">
              AI-Driven Operational Excellence
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We embed enterprise AI and intelligent automation into business-critical
              workflows to reduce cost, improve accuracy, and enable predictive,
              data-driven operations.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>• Intelligent process automation (IPA & RPA)</li>
              <li>• Predictive analytics & decision intelligence</li>
              <li>• Enterprise data platforms & AI integration</li>
              <li>• AI governance & model lifecycle management</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Image
              src="/images/ai-insight.jpg"
              alt="AI Solutions"
              width={700}
              height={480}
              className="rounded-xl shadow-lg object-cover"
            />
          </motion.div>
        </section>

        {/* INDUSTRY USE CASES */}
       {/* INDUSTRY USE CASES */}
<section className="bg-gray-50 py-24">
  <div className="max-w-7xl mx-auto px-6">
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-4xl font-semibold tracking-tight text-center"
    >
      Industry-Focused AI & Digital Use Cases
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-10 mt-16">
      {industryLinks.map(({ title, desc, link }) => (
        <motion.div
          key={title}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onClick={() => router.push(link)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && router.push(link)}
          className="
            bg-white p-8 border border-gray-200 rounded-xl
            cursor-pointer
            hover:shadow-xl hover:border-gray-300
            transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-[#D4AF37]
          "
        >
          <h3 className="text-lg font-semibold mb-3 text-gray-900">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            {desc}
          </p>

          <div className="text-sm font-semibold text-[#D4AF37]">
            Explore Industry Capabilities →
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


        {/* GOVERNANCE & TRUST */}
        <section className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Enterprise Governance, Security & Compliance by Design
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Every engagement is delivered with enterprise-grade security, regulatory
            compliance, ethical AI governance, and risk management — enabling innovation
            while maintaining operational resilience and stakeholder trust.
          </p>
        </section>
      </main>
    </>
  )
}

export default AITransformationPage
