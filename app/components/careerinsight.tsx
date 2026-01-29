'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export default function Careers() {
  const [hasMounted, setHasMounted] = useState(false);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -10]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div
      id="careersinsights"
  className="absolute top-0 left-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat"
  style={{
    y,
    backgroundImage: "url('/images/career-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
/>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white bg-black/60">
        <h2 className="text-4xl md:text-6xl font-bold text-[#D4AF37] mb-4">
          Join the Future with Getabyte
        </h2>
        <p className="max-w-2xl text-lg md:text-xl mb-8">
          At Getabyte, we empower talent to innovate, solve real-world problems, and shape tomorrow’s technology. Become part of a team that values growth, creativity, and impact.
        </p>
        <Link href="/careers">
          <button className="bg-[#D4AF37] hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-lg transition duration-300">
            Explore Careers
          </button>
        </Link>
      </div>
    </section>
  );
}
