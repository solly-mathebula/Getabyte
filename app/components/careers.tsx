'use client'

import { useState, useRef } from 'react'
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import { toast, Toaster } from 'react-hot-toast'
import { z } from 'zod'

// ✅ Job Type Definition
type Job = {
  id: number
  title: string
  department: string
  location: string
  type: string
  description: string
}

const departments = ['Engineering', 'Marketing', 'Sales', 'Design', 'Operations']
const locations = ['Johannesburg', 'Cape Town', 'Remote']
const types = ['Full-time', 'Part-time', 'Contract']

const jobs: Job[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Johannesburg',
    type: 'Full-time',
    description: 'Work on modern frontend apps using React, Tailwind, and TypeScript.',
  },
  {
    id: 2,
    title: 'UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Contract',
    description: 'Design beautiful and intuitive experiences for web and mobile platforms.',
  },
  {
    id: 3,
    title: 'Cloud Solutions Architect',
    department: 'Engineering',
    location: 'Cape Town',
    type: 'Full-time',
    description: 'Lead and implement cloud-first architectures for enterprise clients.',
  },
]

const schema = z.object({
  name: z.string().min(2, 'Name too short'),
  email: z.string().email('Invalid email'),
  resumeFile: z
    .any()
    .refine(file => file instanceof File, 'Resume file is required')
    .refine(file => file.size <= 5 * 1024 * 1024, 'Max file size is 5MB'),
})

export default function CareersPage() {
  const [filters, setFilters] = useState({ department: '', location: '', type: '' })
  const [selectedJob, setSelectedJob] = useState<Job | null>(null) // ✅ Typed
  const [form, setForm] = useState<{ name: string; email: string; resumeFile: File | null }>({
    name: '',
    email: '',
    resumeFile: null,
  })

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const result = schema.safeParse(form)
    if (!result.success) {
      toast.error(result.error.issues[0].message)
      return
    }
    toast.success('Application submitted successfully!')
    setSelectedJob(null)
    setForm({ name: '', email: '', resumeFile: null })
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const filteredJobs = jobs.filter(job => {
    return (
      (!filters.department || job.department === filters.department) &&
      (!filters.location || job.location === filters.location) &&
      (!filters.type || job.type === filters.type)
    )
  })

  return (
    <>
      <Head>
        <title>Careers at Getabyte</title>
        <meta
          name="description"
          content="Join the Getabyte team and help shape the future of digital innovation."
        />
      </Head>

      <Toaster position="top-center" />

      <main className="bg-white text-gray-900 font-sans">
        {/* Hero Section */}
        <section className="relative bg-[#0F1B42] text-white py-24 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold mb-4"
          >
            Build the Future with Getabyte
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            We’re looking for bold, curious, and driven individuals to join our mission to digitally transform industries.
          </motion.p>
        </section>

        {/* Filters */}
        <section className="bg-white py-12 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {['department', 'location', 'type'].map((field) => (
              <select
                key={field}
                name={field}
                onChange={handleFilterChange}
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#D4AF37]"
              >
                <option value="">
                  All {field.charAt(0).toUpperCase() + field.slice(1)}s
                </option>
                {(field === 'department'
                  ? departments
                  : field === 'location'
                  ? locations
                  : types
                ).map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ))}
          </div>

          {/* Job Listings */}
          <div className="grid gap-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <motion.div
                  key={job.id}
                  className="p-6 border border-gray-200 rounded-xl hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-2xl font-bold text-[#0F1B42]">{job.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {job.department} | {job.location} | {job.type}
                  </p>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="bg-[#D4AF37] text-[#0F1B42] px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 transition-colors"
                  >
                    Apply Now
                  </button>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-500">No jobs found for selected filters.</p>
            )}
          </div>
        </section>

        {/* Modal with AnimatePresence */}
        <AnimatePresence>
          {selectedJob && (
            <motion.div
              key="modal-bg"
              className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-xl p-6 w-[90%] max-w-lg relative shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
                  onClick={() => setSelectedJob(null)}
                >
                  ×
                </button>
                <h3 className="text-2xl font-bold mb-4 text-[#0F1B42]">Apply: {selectedJob.title}</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border p-2 rounded"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border p-2 rounded"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                  <div>
                    <label className="block mb-1 font-medium">Resume Upload (PDF, max 5MB):</label>
                    <input
                      type="file"
                      accept=".pdf"
                      className="w-full"
                      onChange={e => setForm({ ...form, resumeFile: e.target.files ? e.target.files[0] : null })}
                      ref={fileInputRef}
                      required
                    />
                    {form.resumeFile && (
                      <p className="mt-1 text-sm text-gray-600">Selected file: {form.resumeFile.name}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#0F1B42] text-white py-2 rounded hover:bg-[#1A265C]"
                  >
                    Submit Application
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  )
}
