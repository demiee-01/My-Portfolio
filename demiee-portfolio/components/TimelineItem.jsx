"use client";

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

/**
 * Timeline item component with bidirectional scroll animations (up & down)
 * @param {Object} props
 * @param {string} props.year - Year or date
 * @param {string} props.title - Achievement title
 * @param {string} props.description - Description
 * @param {string} [props.image] - Single image path
 * @param {string[]} [props.images] - Multiple image paths (for rotation)
 * @param {number} props.index - Item index for alternating layout
 */
export default function TimelineItem({ year, title, description, image, images, index }) {
    const ref = useRef(null);
    // once: false enables smooth animation when scrolling both up and down
    const isInView = useInView(ref, {
        once: false,
        margin: "-50px 0px -50px 0px",
        amount: 0.2
    });
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const isLeft = index % 2 === 0;

    // Handle image rotation for multiple images
    useEffect(() => {
        if (images && images.length > 1) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [images]);

    // Close modal on Escape key & prevent background scroll
    useEffect(() => {
        if (isModalOpen) {
            const handleKeyDown = (e) => {
                if (e.key === 'Escape') setIsModalOpen(false);
            };
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                document.body.style.overflow = '';
                window.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [isModalOpen]);

    // Determine which image to display
    const displayImage = images && images.length > 0 ? images[currentImageIndex] : image;

    return (
        <>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 45 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 }}
                transition={{
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1.0]
                }}
                className="relative mb-12 md:mb-16"
            >
                <div className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Image Thumbnail with morph layoutId */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <motion.div
                            className="relative w-80 h-56 rounded-xl overflow-hidden shadow-2xl cursor-pointer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                            transition={{
                                duration: 0.45,
                                ease: "easeOut"
                            }}
                            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                            onClick={() => setIsModalOpen(true)}
                            layoutId={`achievement-image-${index}`}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={displayImage}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.35 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={displayImage}
                                        alt={title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Image counter indicator for multiple images */}
                            {images && images.length > 1 && (
                                <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full z-10">
                                    {currentImageIndex + 1} / {images.length}
                                </div>
                            )}
                        </motion.div>
                    </div>

                    {/* Content */}
                    <motion.div
                        className={`w-full md:w-1/2 ${isLeft ? 'md:text-left' : 'md:text-right'}`}
                        initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? 20 : -20 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                        <time className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                            {year}
                        </time>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-1 mb-2">
                            {title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {description}
                        </p>
                    </motion.div>
                </div>

                {/* Dot on timeline that reacts dynamically when scrolling */}
                <motion.div
                    animate={isInView ? { scale: 1, opacity: 1, backgroundColor: "#3b82f6" } : { scale: 0.65, opacity: 0.35, backgroundColor: "#9ca3af" }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute left-1/2 top-8 md:top-24 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 z-10 shadow-md"
                />
            </motion.div>

            {/* Full Image Modal with smooth morph animation */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        {/* Blur background - click to close */}
                        <motion.div
                            className="absolute inset-0 backdrop-blur-2xl bg-black/60 dark:bg-black/80"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                        />

                        <motion.div
                            className="relative max-w-7xl w-full z-10 flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Image container conforming exactly to the image's natural aspect ratio - NO gray background */}
                            <div className="relative inline-block max-w-full max-h-[82vh]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={displayImage}
                                    alt={title}
                                    className="max-h-[80vh] max-w-[90vw] w-auto h-auto object-contain rounded-2xl shadow-2xl block mx-auto"
                                />

                                {/* Close button attached to image */}
                                <motion.button
                                    onClick={() => setIsModalOpen(false)}
                                    className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-900/90 hover:bg-gray-900 backdrop-blur-md rounded-full text-white transition-all duration-300 hover:scale-110 shadow-xl cursor-pointer z-20 border border-white/20"
                                    aria-label="Close"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ delay: 0.15 }}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </motion.button>

                                {/* Title below image with glass effect - attached to image */}
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 15 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <div className="bg-black/50 backdrop-blur-md rounded-b-2xl px-6 py-4 shadow-lg border-t border-white/20 text-center">
                                        <h4 className="font-bold text-xl md:text-2xl text-white mb-1 drop-shadow-sm">{title}</h4>
                                        <p className="text-xs md:text-sm font-semibold text-blue-300">{year}</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
