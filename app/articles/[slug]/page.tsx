import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Article from '../../components/Article'
import { articles, getArticleBySlug } from '../../data/articles'

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return { title: 'Article | Getabyte' }
  }

  return {
    title: `${article.title} | Getabyte`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return <Article article={article} />
}
