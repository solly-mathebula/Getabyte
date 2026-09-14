import Image from 'next/image'

type ArticleBannerProps = {
  src: string
  alt: string
  priority?: boolean
  className?: string
}

const BANNER_RATIO = '1280 / 719'

export default function ArticleBanner({
  src,
  alt,
  priority = false,
  className = '',
}: ArticleBannerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-[#0B1220] ${className}`}
      style={{ aspectRatio: BANNER_RATIO }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1280px) 100vw, 1280px"
        className="object-cover object-center"
      />
    </div>
  )
}
