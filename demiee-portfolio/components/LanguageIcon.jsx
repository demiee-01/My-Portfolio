"use client";

import { useState } from 'react';

/**
 * Language icon component with hover effect
 * @param {Object} props
 * @param {string} props.name - Language name
 * @param {Function} props.icon - React icon component
 * @param {string} props.brandColor - Brand color for hover
 */
export default function LanguageIcon({ name, icon: Icon, brandColor }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex flex-col items-center gap-2 p-2 transition-all duration-300 cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            title={name}
        >
            <div className="w-8 h-8 flex items-center justify-center">
                <Icon
                    className="w-full h-full transition-colors duration-300"
                    style={{ color: isHovered ? brandColor : '#6b7280' }}
                    aria-label={name}
                />
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400 text-center">
                {name}
            </span>
        </div>
    );
}
