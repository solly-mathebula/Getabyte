'use client'

import Head from 'next/head'
import Image from 'next/image'

const PartnersPage = () => {
  return (
    <>
      <Head>
        <title>Our Technology Partners | Getabyte</title>
        <meta name="description" content="Getabyte partners with leading technology companies like Microsoft, AWS, SAP, and IBM to deliver cutting-edge digital solutions." />
      </Head>

      <main id="partners" className=" bg-white text-gray-900 font-sans">
      <section className="py-24 px-6 max-w-7xl mx-auto bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-lg text-center">
  <h1 className="text-4xl font-extrabold text-[#D4AF37] mb-6">
    Our Trusted Technology Partners
  </h1>
  <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
    Getabyte collaborates with global technology leaders to bring you the most advanced and reliable digital solutions, empowering your business to innovate and excel.
  </p>

  <div className="flex flex-wrap justify-center items-center gap-16">
    {[
      { name: 'Microsoft', src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', width: 160, height: 50 },
      { name: 'AWS', src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', width: 150, height: 50 },
      { name: 'SAP', src: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg', width: 150, height: 50 },
      { name: 'IBM', src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', width: 150, height: 50 },
    ].map(({ name, src, width, height }) => (
      <div
        key={name}
        className="w-40 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer flex items-center justify-center"
        title={name}
      >
        <Image
          src={src}
          alt={name}
          width={width}
          height={height}
          priority
          className="object-contain"
        />
      </div>
    ))}
  </div>
</section>

      </main>
    </>
  )
}

export default PartnersPage
