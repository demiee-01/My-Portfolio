"use client";

import { achievementsData } from "@/data/achievements";
import { socialsData } from "@/data/socials";
import TimelineItem from "@/components/TimelineItem";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export default function AchievementPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 30%", "end 75%"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 24,
        restDelta: 0.001,
    });

    return (
        <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-transparent text-gray-900 dark:text-gray-100 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Achievements
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        A timeline of my journey and milestones
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div ref={containerRef} className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-1/2 hidden md:block shadow-lg" />

                    {/* Animated Progress Line */}
                    <motion.div
                        className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500 -translate-x-1/2 origin-top hidden md:block shadow-lg"
                        style={{ scaleY, boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}
                    />

                    {/* Timeline Items */}
                    <div className="space-y-6">
                        {achievementsData.map((achievement, index) => (
                            <TimelineItem
                                key={`${achievement.year}-${achievement.title}-${index}`}
                                year={achievement.year}
                                title={achievement.title}
                                description={achievement.description}
                                image={achievement.image}
                                images={achievement.images}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer - Contact Section */}
            <footer id="contact" className="bg-gray-900 text-white mt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Footer Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Let&apos;s Connect
                        </h2>
                        <p className="text-lg text-gray-400">
                            Find me on these platforms
                        </p>
                    </div>

                    {/* Social Links Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {socialsData.map((social) => (
                            <a
                                key={social.platform}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-12 h-12 flex items-center justify-center rounded-lg"
                                        style={{ backgroundColor: `${social.brandColor}20` }}
                                    >
                                        <social.icon
                                            className="w-6 h-6"
                                            style={{ color: social.brandColor }}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white group-hover:text-gray-100">
                                            {social.platform}
                                        </h3>
                                        <p className="text-sm text-gray-400">
                                            {social.handle}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Footer Bottom */}
                    <div className="border-t border-gray-800 pt-8 text-center">
                        <p className="text-gray-400 text-sm">
                            © 2024 Pring Rady. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
