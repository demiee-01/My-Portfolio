import { FaGithub, FaYoutube, FaTiktok, FaFacebook } from 'react-icons/fa';

/**
 * Social media links
 * @typedef {Object} Social
 * @property {string} platform - Platform name
 * @property {string} url - Profile URL
 * @property {string} handle - Username/handle
 * @property {Function} icon - React icon component
 * @property {string} brandColor - Brand color
 */

/** @type {Social[]} */
export const socialsData = [
    {
        platform: "GitHub",
        url: "https://github.com/your-username", // Replace with your actual GitHub profile
        handle: "@your-username",
        icon: FaGithub,
        brandColor: "#181717"
    },
    {
        platform: "YouTube",
        url: "https://youtube.com/@your-channel", // Replace with your actual YouTube channel
        handle: "@your-channel",
        icon: FaYoutube,
        brandColor: "#FF0000"
    },
    {
        platform: "TikTok",
        url: "https://tiktok.com/@your-username", // Replace with your actual TikTok profile
        handle: "@your-username",
        icon: FaTiktok,
        brandColor: "#000000"
    },
    {
        platform: "Facebook",
        url: "https://facebook.com/your-profile", // Replace with your actual Facebook profile
        handle: "Your Name",
        icon: FaFacebook,
        brandColor: "#1877F2"
    }
];
