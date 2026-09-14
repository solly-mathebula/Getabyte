'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  Compass,
  PenTool,
  RefreshCw,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'
import type { Article as ArticleType, ArticleBlock } from '../data/articles'
import ArticleBanner from './ArticleBanner'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const frameworkIcons = [Compass, PenTool, RefreshCw, TrendingUp]

function ArticleBody({ block, index }: { block: ArticleBlock; index: number }) {
  if (block.type === 'heading') {
    return (
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0F1B42] mt-14 mb-5 scroll-mt-28">
        {block.text}
      </h2>
    )
  }

  if (block.type === 'paragraph') {
    return (
      <p
        className={`text-lg text-gray-700 leading-relaxed mb-6 ${
          index === 0 ? 'first-letter:text-5xl first-letter:font-semibold first-letter:text-[#0F1B42] first-letter:mr-2 first-letter:float-left first-letter:leading-none' : ''
        }`}
      >
        {block.text}
      </p>
    )
  }

  if (block.type === 'image') {
    return (
      <motion.figure
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="my-12"
      >
        <ArticleBanner src={block.src} alt={block.alt} className="rounded-xl shadow-lg" />
        {block.caption && (
          <figcaption className="mt-3 text-sm text-gray-500 text-center">
            {block.caption}
          </figcaption>
        )}
      </motion.figure>
    )
  }

  if (block.type === 'framework') {
    return (
      <div className="grid sm:grid-cols-2 gap-6 my-10">
        {block.steps.map((step, stepIndex) => {
          const Icon = frameworkIcons[stepIndex] ?? Compass
          return (
            <motion.div
              key={step.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0F1B42] text-[#D4AF37]">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
                    0{stepIndex + 1}
                  </p>
                  <h3 className="text-lg font-semibold text-[#0F1B42]">{step.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 my-10">
      {block.items.map((item) => (
        <motion.div
          key={item.title}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gray-50 border border-gray-200 rounded-xl p-6"
        >
          <h3 className="text-lg font-semibold text-[#0F1B42] mb-2">{item.title}</h3>
          <p className="text-gray-600 leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default function Article({ article }: { article: ArticleType }) {
  return (
    <main className="bg-white text-gray-900">
      <div className="max-w-5xl mx-auto px-6 pt-28">
        <section className="pb-6">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#D4AF37] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Articles
          </Link>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-sm font-semibold tracking-[0.2em] uppercase text-[#D4AF37]"
          >
            {article.category}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-[#0F1B42]"
          >
            {article.title}
          </motion.h1>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-gray-500">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={16} className="text-[#D4AF37]" />
              {article.dateLabel}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={16} className="text-[#D4AF37]" />
              {article.readingTime}
            </span>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 overflow-hidden rounded-xl border border-gray-200 shadow-lg"
        >
          <ArticleBanner
            src={article.bannerImage}
            alt={article.bannerAlt}
            priority
          />
        </motion.div>

        <article className="py-16">
          {article.body.map((block, index) => (
            <ArticleBody key={`${block.type}-${index}`} block={block} index={index} />
          ))}
        </article>
      </div>

      <section className="bg-[#0B1220] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ShieldCheck className="mx-auto mb-5 text-[#D4AF37]" size={36} />
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {article.ctaTitle}
          </h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            {article.ctaText}
          </p>
          <Link
            href="/#contact"
            className="mt-10 inline-flex items-center gap-2 bg-[#D4AF37] text-[#0F1B42] font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Start a Conversation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
