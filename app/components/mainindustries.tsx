'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import {
    FaHeartbeat,
    FaUniversity,
    FaCarSide,
    FaShoppingCart,
    FaIndustry,
    FaSignal
} from 'react-icons/fa';
import clsx from 'clsx';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Dynamically import Bar chart to prevent SSR rendering issues
const Bar = dynamic(() => import('react-chartjs-2').then(mod => mod.Bar), { ssr: false });

const industries = [
    {
        name: 'Healthcare',
        color: 'from-purple-500 to-pink-500',
        icon: FaHeartbeat,
        needs: 'Secure, interoperable platforms that improve patient outcomes and streamline healthcare operations.',
        valueAdd:
            'Leveraging AI and predictive analytics for diagnostics, compliance automation, and cloud-native health ecosystems.',
        sustainability:
            'Supporting eco-friendly data centers and reducing paper waste through digitization in medical records.',
            id:'Healthcare'
    },
    {
        name: 'Banking & Finance',
        color: 'from-blue-700 to-indigo-700',
        icon: FaUniversity,
        needs: 'Modernized legacy systems, fraud detection, digital transformation, and robust cybersecurity.',
        valueAdd:
            'AI-driven fraud prevention, scalable fintech platforms, and seamless mobile banking experiences.',
        sustainability:
            'Promoting green banking initiatives and reducing carbon footprint via cloud infrastructure.',
            id:'Banking'
    },
    {
        name: 'Automotive',
        color: 'from-yellow-500 to-orange-500',
        icon: FaCarSide,
        needs: 'Efficient production, telematics, predictive maintenance, and smart mobility solutions.',
        valueAdd:
            'IoT and AI integration for operational efficiency and enhanced vehicle connectivity.',
        sustainability:
            'Supporting electric vehicle infrastructure and reducing emissions with smart logistics.',
            id:'Automotive'
    },
    {
        name: 'Retail',
        color: 'from-green-400 to-emerald-600',
        icon: FaShoppingCart,
        needs: 'Omnichannel commerce, customer insights, inventory management, and personalized experiences.',
        valueAdd:
            'AI personalization, customer data platforms, and precise inventory analytics to maximize sales.',
        sustainability:
            'Reducing waste through optimized supply chains and promoting ethical sourcing.',
            id:'Retail'
    },
    {
        name: 'Mining',
        color: 'from-gray-600 to-gray-900',
        icon: FaIndustry,
        needs: 'Digital automation for exploration, fleet management, safety, and regulatory compliance.',
        valueAdd:
            'Advanced digitization to improve safety, productivity, and compliance monitoring.',
        sustainability:
            'Implementing environmentally responsible mining technologies and sustainable resource management.',
            id:'Mining'
    },
    {
        name: 'Telecommunications',
        color: 'from-cyan-500 to-blue-500',
        icon: FaSignal,
        needs: '5G infrastructure, customer self-service, uptime, and subscriber insights.',
        valueAdd:
            'Cloud and AI tools to boost network reliability, customer experience, and market growth.',
        sustainability:
            'Energy-efficient network operations and support for circular economy principles.',
            id:'Telecommunications'
    }
];

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
};

const chartData = {
    labels: industries.map(i => i.name),
    datasets: [
        {
            label: 'Tech Innovation Index',
            data: [85, 90, 80, 88, 70, 89],
            backgroundColor: industries.map(i =>
                i.color.includes('purple')
                    ? '#a855f7'
                    : i.color.includes('blue')
                        ? '#6366f1'
                        : i.color.includes('yellow')
                            ? '#f59e0b'
                            : i.color.includes('green')
                                ? '#10b981'
                                : i.color.includes('gray')
                                    ? '#4b5563'
                                    : '#06b6d4'
            )
        }
    ]
};

const chartOptions = {
    responsive: true,
    plugins: {
        legend: { position: 'top' as const },
        title: {
            display: true,
            text: 'Innovation Impact Across Industries'
        }
    }
};

const MainIndustries = () => {
    const industryPairs = chunkArray(industries, 2);

    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);

    return (
        <main className="bg-white text-gray-900 min-h-screen">
            <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-24 px-6 text-center overflow-hidden">
                <div className="max-w-4xl mx-auto z-10 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative w-full h-[400px] md:h-[500px] overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-black opacity-30" />
                        <div className="relative flex flex-col justify-center items-center h-full px-6 text-center">
                            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-900 text-transparent bg-clip-text mb-6 max-w-4xl">
                                Powering Innovation Across Industries
                            </h1>
                            <p className="text-xl md:text-2xl text-white max-w-3xl">
                                Getabyte blends deep industry knowledge with AI, cloud, and secure digital infrastructure to transform key sectors — driving sustainable growth and competitive advantage.
                            </p>
                        </div>
                    </motion.div>
                </div>
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: "url('/images/p3.jpg')",
                        filter: 'brightness(0.6)'
                    }}
                />
            </section>

            <section className="w-full bg-white text-gray-900 overflow-hidden pt-28 pb-40 relative z-10 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto space-y-16">
                    {industryPairs.map((pair, pairIdx) => (
                        <div
                            key={pairIdx}
                            className="flex flex-col md:flex-row md:space-x-16 space-y-16 md:space-y-0"
                        >
                            {pair.map(({ name, color, icon: Icon, needs, valueAdd, sustainability, id }, idx) => (
                                <motion.article
                                    id={id}
                                    key={name}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: idx * 0.15 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl shadow-lg bg-white flex-1"
                                >
                                    {hasMounted && (
                                        <motion.div
                                            className={clsx(
                                                'flex-shrink-0 p-6 rounded-2xl shadow-md',
                                                `bg-gradient-to-br ${color}`
                                            )}
                                            animate={{ y: [0, -12, 0] }}
                                            transition={{
                                                duration: 3.5,
                                                repeat: Infinity,
                                                repeatType: 'loop',
                                                ease: 'easeInOut'
                                            }}
                                            style={{ width: 140, height: 140 }}
                                        >
                                            <Icon className="text-white w-full h-full" />
                                        </motion.div>
                                    )}

                                    <div className="flex-1 space-y-6">
                                        <h2 className={clsx(
                                            'text-3xl font-extrabold bg-gradient-to-r',
                                            color,
                                            'text-transparent bg-clip-text'
                                        )}>
                                            {name}
                                        </h2>

                                        <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                                            <div>
                                                <h3 className="font-semibold text-lg mb-1">Industry Needs</h3>
                                                <p>{needs}</p>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg mb-1">How Getabyte Adds Value</h3>
                                                <p>{valueAdd}</p>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg mb-1">Sustainability Focus</h3>
                                                <p>{sustainability}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Chart */}
                {hasMounted && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto mt-32 px-4"
                    >
                        <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">
                            How We Drive Industry Growth
                        </h3>
                        <Bar data={chartData} options={chartOptions} />
                    </motion.div>
                )}
            </section>
        </main>
    );
};

export default MainIndustries;
