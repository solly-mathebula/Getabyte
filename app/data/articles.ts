export type FrameworkStep = {
  title: string
  description: string
}

export type IndustryPoint = {
  title: string
  description: string
}

export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'framework'; steps: FrameworkStep[] }
  | { type: 'industries'; items: IndustryPoint[] }
  | { type: 'image'; src: string; alt: string; caption?: string }

export type Article = {
  slug: string
  title: string
  date: string
  dateLabel: string
  category: string
  readingTime: string
  excerpt: string
  bannerImage: string
  bannerAlt: string
  body: ArticleBlock[]
  ctaTitle: string
  ctaText: string
}

export const articles: Article[] = [
  {
    slug: 'beyond-the-buzzword-digital-transformation-2026',
    title: 'Beyond the Buzzword: What Digital Transformation Actually Requires in 2026',
    date: '2026-08-13',
    dateLabel: 'August 13, 2026',
    category: 'Digital Transformation',
    readingTime: '7 min read',
    excerpt:
      'Digital transformation has been a boardroom buzzword for over a decade. The hard part was never deciding to transform. It was executing — with depth, security, and the discipline to stay after go-live.',
    bannerImage: '/images/articles/article-01.png',
    bannerAlt: 'Beyond the Buzzword: What Digital Transformation Actually Requires in 2026',
    ctaTitle: 'Ready to transform with confidence?',
    ctaText:
      "Whether you're modernising legacy systems, adopting AI, strengthening cybersecurity, or accelerating cloud transformation, let's start a conversation and take it to the next level.",
    body: [
      {
        type: 'paragraph',
        text: '“Digital transformation” has been a boardroom buzzword for over a decade. But for most organisations, the hard part was never deciding to transform. It was executing.',
      },
      {
        type: 'paragraph',
        text: 'Cloud migrations stall. AI pilots never leave the sandbox. Security gets bolted on at the end instead of built in from day one. And too often, the technology partner walks away the moment the contract is fulfilled, whether or not the business actually got what it needed.',
      },
      {
        type: 'paragraph',
        text: 'We built Getabyte to close that gap.',
      },
      {
        type: 'heading',
        text: "The Real Problem Isn't Ambition. It's Depth.",
      },
      {
        type: 'paragraph',
        text: "Organisations don't fail because they lack vision. They fail because transformation touches everything at once: legacy systems, data quality, security, compliance, operating models, and the people expected to work differently tomorrow than they did yesterday. Most providers are equipped to handle one or two of these pieces, rarely all of them together.",
      },
      {
        type: 'paragraph',
        text: "An AI model built on poor-quality data doesn't create insight. It scales bad decisions faster. A cloud migration without security by design doesn't remove risk, it just relocates it. And the most sophisticated platform in the world delivers nothing if the people meant to use it were never brought along for the journey.",
      },
      {
        type: 'paragraph',
        text: "This is where most partners stop. It's where we start.",
      },
      {
        type: 'paragraph',
        text: "We don't just implement what's asked for. We take the time to understand what a business actually needs, even when that means challenging the brief. Quality and security are never the trade-off for speed. They're the foundation speed is built on.",
      },
      {
        type: 'heading',
        text: 'A Framework Built for Execution, Not Slide Decks',
      },
      {
        type: 'paragraph',
        text: 'Every Getabyte engagement follows one disciplined approach: Discover. Design. Transform. Scale.',
      },
      {
        type: 'framework',
        steps: [
          {
            title: 'Discover',
            description:
              'We start by understanding the real environment: enterprise architecture, data maturity, business objectives, and exactly where AI and automation can create measurable value, not assumed value.',
          },
          {
            title: 'Design',
            description:
              'Technology architecture, governance, AI operating models, and business outcomes are designed together, so every technical decision serves a strategic one.',
          },
          {
            title: 'Transform',
            description:
              'Platforms are modernised and AI capabilities deployed with security, governance, and compliance engineered in from the start, never retrofitted after the fact.',
          },
          {
            title: 'Scale',
            description:
              "Transformation doesn't end at go-live. Long-term value depends on adoption, governance, and the discipline to keep optimising as the business evolves.",
          },
        ],
      },
      {
        type: 'paragraph',
        text: "Organisations that follow this kind of structured approach don't just adopt new technology. They improve decision-making, unlock more value from their data, and build resilience that holds up under real-world pressure.",
      },
      {
        type: 'heading',
        text: "Security and Governance Aren't a Final Step. They're the Starting Point.",
      },
      {
        type: 'image',
        src: '/images/articles/digital-transformation-security.jpg',
        alt: 'A dim enterprise operations room with gold-lit screens showing abstract network maps',
        caption: 'Security, compliance, and responsible AI governance are designed in from day one.',
      },
      {
        type: 'paragraph',
        text: 'One of the most expensive mistakes in transformation is treating cybersecurity and compliance as a milestone to tick off at the end.',
      },
      {
        type: 'paragraph',
        text: "At Getabyte, security, regulatory compliance, and responsible AI governance are embedded into every engagement, from cloud architecture to enterprise AI deployment. For industries like banking, healthcare, telecommunications, mining, and the public sector, this isn't a nice-to-have. It's what makes innovation trustworthy enough to actually use.",
      },
      {
        type: 'heading',
        text: 'One Discipline. Every Industry.',
      },
      {
        type: 'industries',
        items: [
          {
            title: 'Banking & Financial Services',
            description: 'Sharper fraud detection, credit risk analysis, and regulatory automation.',
          },
          {
            title: 'Healthcare',
            description: 'Better clinical decision support, capacity planning, and patient outcomes through intelligent data.',
          },
          {
            title: 'Telecommunications',
            description: 'Optimised networks, churn prediction, and stronger operational performance.',
          },
          {
            title: 'Retail',
            description: 'Demand forecasting and personalisation that create genuinely smarter customer experiences.',
          },
          {
            title: 'Mining & Industrial',
            description: 'Predictive maintenance and analytics that improve safety, reliability, and productivity.',
          },
          {
            title: 'Public Sector',
            description: 'Secure digital citizen services and intelligent automation that strengthen public trust.',
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'Different industries, different pressures, one disciplined approach to getting it right.',
      },
      {
        type: 'heading',
        text: 'Built on Trusted Technology. Delivered with Real Expertise.',
      },
      {
        type: 'paragraph',
        text: 'No organisation transforms alone. We work alongside global technology leaders including Microsoft, AWS, SAP, and IBM to design and deliver solutions on platforms businesses already trust, paired with the hands-on delivery expertise that turns a strategy document into a measurable result.',
      },
      {
        type: 'heading',
        text: 'The Bottom Line',
      },
      {
        type: 'paragraph',
        text: "Digital transformation isn't a once-off project. It's an organisational capability, and it's only sustainable when strategy, architecture, data, security, governance, and people are built together, not bolted on one at a time.",
      },
      {
        type: 'paragraph',
        text: "At Getabyte, we don't measure success by the technology we deploy. We measure it by the outcomes our clients achieve. That means going the extra mile most providers won't: understanding a business well enough to solve the problem it actually has, without ever compromising on quality or security to get there.",
      },
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}
