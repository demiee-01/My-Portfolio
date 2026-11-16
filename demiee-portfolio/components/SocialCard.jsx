"use client";

import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

/**
 * Social media card component
 * @param {Object} props
 * @param {string} props.platform - Platform name
 * @param {string} props.url - Profile URL
 * @param {string} props.handle - Username/handle
 * @param {Function} props.icon - React icon component
 * @param {string} props.brandColor - Brand color
 */
export default function SocialCard({ platform, url, handle, icon: Icon, brandColor }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 transition-colors duration-300">
                    <Icon
                        className="w-full h-full transition-colors duration-300"
                        style={{ color: isHovered ? brandColor : '#6b7280' }}
                        aria-label={platform}
                    />
                </div>
                <FaArrowRight
                    className="transition-all duration-300"
                    style={{
                        color: isHovered ? '#4b5563' : '#9ca3af',
                        transform: isHovered ? 'translateX(4px)' : 'translateX(0)'
                    }}
                />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {platform}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
                {handle}
            </p>
        </a>
    );
}
