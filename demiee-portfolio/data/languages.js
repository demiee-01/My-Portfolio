import {
    SiC,
    SiCplusplus,
    SiOpenjdk,
    SiPhp,
    SiPython,
    SiJavascript,
    SiHtml5,
    SiCss,
    SiMysql,
    SiGnubash
} from 'react-icons/si';

/**
 * Language/Technology data
 * @typedef {Object} Language
 * @property {string} name - Display name
 * @property {Function} icon - React icon component
 * @property {string} brandColor - Brand color for hover effect
 */

/** @type {Language[]} */
export const languagesData = [
    { name: "C", icon: SiC, brandColor: "#A8B9CC" },
    { name: "C++", icon: SiCplusplus, brandColor: "#00599C" },
    { name: "Java", icon: SiOpenjdk, brandColor: "#007396" },
    { name: "PHP", icon: SiPhp, brandColor: "#777BB4" },
    { name: "Python", icon: SiPython, brandColor: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, brandColor: "#F7DF1E" },
    { name: "HTML5", icon: SiHtml5, brandColor: "#E34F26" },
    { name: "CSS3", icon: SiCss, brandColor: "#1572B6" },
    { name: "SQL", icon: SiMysql, brandColor: "#4479A1" },
    { name: "Bash", icon: SiGnubash, brandColor: "#4EAA25" }
];
