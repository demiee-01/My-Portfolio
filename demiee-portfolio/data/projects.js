/**
 * Project data
 * @typedef {Object} Project
 * @property {string} id - Unique identifier
 * @property {string} title - Project title
 * @property {string} description - Detailed description
 * @property {string[]} tags - Technologies and categories
 * @property {string} [image] - Path to project preview image
 * @property {string} [liveUrl] - Live demo URL
 * @property {string} [githubUrl] - GitHub repository URL
 * @property {string} category - Category for filtering
 * @property {boolean} [featured] - Whether this is a featured project
 */

/** @type {Project[]} */
export const projectsData = [
    {
        id: "rice-disease-telegram-bot",
        title: "Rice Disease Telegram Bot",
        description: "An AI-powered computer vision Telegram bot designed to detect common rice crop diseases in Cambodia. Farmers can upload leaf photos to instantly diagnose Rice Blast, Brown Spot, Tungro, and Bacterial Leaf Blight with treatment guidance.",
        tags: ["Python", "TensorFlow", "Computer Vision", "Deep Learning", "Telegram Bot API"],
        category: "AI & ML",
        image: "/project_image/Rice Disease Telegram Bot.png",
        liveUrl: "",
        githubUrl: "https://github.com/demiee-01/rice_leaf_disease_detection_alpha1",
        featured: true
    },
    {
        id: "ai-education-assistant",
        title: "AI Educational Assistant",
        description: "An intelligent AI-powered platform designed to enhance student learning experiences with automated tutoring, interactive Q&A, and personalized study roadmaps.",
        tags: ["Python", "FastAPI", "React", "Next.js", "OpenAI API"],
        category: "AI & ML",
        image: "/achievements/achievement-4_0.jpg.jpg",
        liveUrl: "",
        githubUrl: "https://github.com/demiee-01",
        featured: true
    },
    {
        id: "cyber-recon-toolkit",
        title: "Cyber Recon & Security Toolkit",
        description: "A lightweight Linux CLI toolkit designed for vulnerability scanning, network diagnostics, and automated cybersecurity reconnaissance.",
        tags: ["Linux", "Bash", "Python", "Cybersecurity", "Networking"],
        category: "Cybersecurity",
        image: "/image/image.png",
        liveUrl: "",
        githubUrl: "https://github.com/demiee-01",
        featured: false
    },
    {
        id: "demiee-portfolio",
        title: "Personal Portfolio & Brand Showcase",
        description: "A sleek, responsive personal portfolio featuring dynamic timelines, glassmorphism aesthetics, dark mode support, and smooth Framer Motion animations.",
        tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
        category: "Web Dev",
        image: "/image/image.png",
        liveUrl: "/",
        githubUrl: "https://github.com/demiee-01",
        featured: false
    },
    {
        id: "linux-server-automation",
        title: "Linux System Automation & DevOps Scripts",
        description: "Automated server provisioning and monitoring scripts for Linux distributions, handling configuration management, firewall rules, and container orchestration.",
        tags: ["Linux", "Bash", "Docker", "Shell Scripting"],
        category: "Tools & DevOps",
        image: "",
        liveUrl: "",
        githubUrl: "https://github.com/demiee-01",
        featured: false
    }
];
