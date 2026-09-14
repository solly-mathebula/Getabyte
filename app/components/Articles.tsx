'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays, Clock } from 'lucide-react'
import { articles } from '../data/articles'
import ArticleBanner from './ArticleBanner'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Articles() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative overflow-hidden border-b border-gray-100">
        <div className="absolute top-[-120px] right-[-80px] w-[380px] h-[380px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-140px] left-[-80px] w-[320px] h-[320px] bg-yellow-400/15 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-[0.2em] uppercase text-[#D4AF37]"
          >
            Insights
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight text-[#0F1B42]"
          >
            Articles
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed"
          >
            Practical thinking on digital transformation, AI, security, and the
            discipline it takes to turn strategy into outcomes.
          </motion.p>
          <div className="mt-10 h-1 w-28 bg-[#D4AF37] mx-auto rounded-full" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-10">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-xl hover:border-gray-300 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2">
                <Link href={`/articles/${article.slug}`} className="block">
                  <ArticleBanner
                    src={article.bannerImage}
                    alt={article.bannerAlt}
                    priority={index === 0}
                  />
                </Link>

                <div className="flex flex-col justify-center p-8 md:p-12">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="inline-flex items-center rounded-full bg-[#0F1B42]/5 px-3 py-1 font-medium text-[#0F1B42]">
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={16} className="text-[#D4AF37]" />
                      {article.dateLabel}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={16} className="text-[#D4AF37]" />
                      {article.readingTime}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0F1B42] leading-snug">
                    {article.title}
                  </h2>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="mt-8">
                    <Link
                      href={`/articles/${article.slug}`}
                      className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0F1B42] font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors duration-300"
                    >
                      Read More
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  )
}
