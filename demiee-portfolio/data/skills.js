import { SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs } from 'react-icons/si';

/**
 * Technical skills data
 * @typedef {Object} Skill
 * @property {string} name - Technology name
 * @property {Function} icon - React icon component
 * @property {string} description - Brief description
 * @property {string} brandColor - Brand color
 */

/** @type {Skill[]} */
export const skillsData = [
    {
        name: "JavaScript",
        icon: SiJavascript,
        description: "Modern ES6+ JavaScript for dynamic web applications",
        brandColor: "#F7DF1E"
    },
    {
        name: "Next.js",
        icon: SiNextdotjs,
        description: "React framework for production-grade applications",
        brandColor: "#000000"
    },
    {
        name: "React",
        icon: SiReact,
        description: "Component-based UI library for building interfaces",
        brandColor: "#61DAFB"
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        description: "Utility-first CSS framework for rapid UI development",
        brandColor: "#06B6D4"
    },
    {
        name: "Node.js",
        icon: SiNodedotjs,
        description: "JavaScript runtime for building scalable applications",
        brandColor: "#339933"
    }
];
