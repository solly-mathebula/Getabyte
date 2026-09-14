import type { Metadata } from 'next'
import Articles from '../components/Articles'

export const metadata: Metadata = {
  title: 'Articles | Getabyte',
  description:
    'Insights from Getabyte on digital transformation, AI, cybersecurity, and what it takes to execute with confidence.',
}

export default function ArticlesPage() {
  return <Articles />
}
