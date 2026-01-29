'use client';

import { Cloud, ShieldCheck, BarChart2, CheckSquare, Layout, NetworkIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <ShieldCheck size={36} className="text-accent" />,
        title: 'Cybersecurity',
        description: 'Robust protection strategies and AI-driven threat detection to safeguard your digital assets.',
    },
    {
        icon: <Cloud size={36} className="text-accent" />,
        title: 'Cloud Engineering',
        description: 'Design, deployment, and management of scalable cloud infrastructure tailored to your needs.',
    },
    {
        icon: <BarChart2 size={36} className="text-accent" />,
        title: 'Data Analytics',
        description: 'Transform raw data into actionable insights with advanced analytics and visualization tools.',
    },
    {
        icon: <CheckSquare size={36} className="text-accent" />,
        title: 'Software Testing',
        description: 'Comprehensive testing services ensuring quality, reliability, and performance of your applications.',
    },
    {
        icon: <Layout size={36} className="text-accent" />,
        title: 'Application Engineering',
        description: 'End-to-end application design, development, and maintenance for seamless user experiences.',
    },
    {
        icon: <NetworkIcon size={36} className="text-accent" />,
        title: 'IoT',
        description: 'Smart device integration, real-time data analytics, automation, and secure connectivity to drive intelligent business transformation.',
    },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function ServicesPage() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/solutions'); // navigate programmatically
    };

    return (
        <section id="services" className="min-h-screen bg-white py-20 text-primary">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h1 className="text-5xl text-[#D4AF37] font-bold mb-6">Our Solutions</h1>
                <p className="text-gray-600 max-w-3xl mx-auto mb-16">
                    At Getabyte, we offer specialized technology services designed to accelerate your business and secure your future.
                </p>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map(({ icon, title, description }) => (
                        <motion.div
                            key={title}
                            className="bg-gray-50 rounded-2xl text-[#D4AF37] shadow-md p-8 hover:shadow-xl transition"
                            variants={cardVariants}
                        >
                            <div className="mb-5">{icon}</div>
                            <h2 className="text-2xl font-semibold mb-3">{title}</h2>
                            <p className="text-gray-700">{description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <section className="bg-primary text-white text-center py-16 px-4 mt-20">
                    <a
                        onClick={handleClick}
                        className="inline-block bg-[#002366] text-primary px-6 py-3 rounded-xl font-semibold shadow-lg transition cursor-pointer"
                    >
                        Explore more
                    </a>
                </section>
            </div>
        </section>
    );
}
