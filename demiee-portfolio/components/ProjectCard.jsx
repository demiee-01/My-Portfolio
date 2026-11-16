"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";
import { motion } from "framer-motion";

/**
 * Project card component
 * @param {Object} props
 * @param {string} props.title - Project title
 * @param {string} props.description - Project description
 * @param {string[]} props.tags - List of technologies
 * @param {string} [props.image] - Path to preview image
 * @param {string} [props.liveUrl] - Live demo URL
 * @param {string} [props.githubUrl] - GitHub repository URL
 * @param {string} props.category - Category name
 * @param {boolean} [props.featured] - Whether this is a featured project
 * @param {number} props.index - Index for staggered animations
 */
export default function ProjectCard({
    title,
    description,
    tags = [],
    image,
    liveUrl,
    githubUrl,
    category,
    featured = false,
    index = 0
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
            {/* Image / Header Banner */}
            <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-900 overflow-hidden flex items-center justify-center">
                {image ? (
                    <a
                        href={githubUrl || liveUrl || "#"}
                        target={githubUrl || liveUrl ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="block w-full h-full relative cursor-pointer"
                        title={`View ${title} on GitHub`}
                    >
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </a>
                ) : (
                    <div className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500">
                        <FaFolder className="w-12 h-12 mb-2" />
                        <span className="text-xs uppercase tracking-wider font-semibold">Project Preview</span>
                    </div>
                )}

                {/* Badges Overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-2 z-10 pointer-events-none">
                    {category && (
                        <span className="px-3 py-1 bg-gray-900/80 backdrop-blur-md text-white text-xs font-medium rounded-full">
                            {category}
                        </span>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                <a
                    href={githubUrl || liveUrl || "#"}
                    target={githubUrl || liveUrl ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="block group/title"
                >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover/title:text-blue-600 dark:group-hover/title:text-blue-400 transition-colors">
                        {title}
                    </h3>
                </a>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1 leading-relaxed">
                    {description}
                </p>

                {/* Tech tags */}
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600/50"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Links / Actions */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center gap-4">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
                            aria-label={`View ${title} source code on GitHub`}
                        >
                            <FaGithub className="w-4 h-4" />
                            <span>GitHub</span>
                        </a>
                    )}

                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors ml-auto"
                            aria-label={`Visit live preview for ${title}`}
                        >
                            <span>Live Demo</span>
                            <FaExternalLinkAlt className="w-3.5 h-3.5" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
