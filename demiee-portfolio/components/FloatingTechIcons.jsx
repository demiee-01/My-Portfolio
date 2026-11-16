"use client";

import { motion } from "framer-motion";
import {
  SiGithub,
  SiJavascript,
  SiPython,
  SiC,
  SiCplusplus,
  SiReact,
  SiUbuntu,
  SiPhp,
  SiMysql,
  SiFlutter,
  SiNumpy,
  SiDocker,
  SiWireshark,
  SiVim,
  SiKalilinux,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiTensorflow,
  SiGit,
  SiFigma,
} from "react-icons/si";
import { FaJava, FaLinux } from "react-icons/fa";

/**
 * 24 Floating Tech Icons Orbiting Pring Rady
 *
 * Updated per visual feedback:
 * - Image1 (Right side icons): Shifted 15% to the RIGHT into open space
 * - Image2 (Left side icons): Shifted 5% to the LEFT
 * - Under FOUNDER box: React and C++ placed cleanly under the founder badge
 */
const TECH_ICONS = [
  // ==========================================
  // --- 1. TOP SKY ARCH ---
  // ==========================================
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#24292e",
    bgGlow: "rgba(36, 41, 46, 0.25)",
    position: { top: "4%", left: "33%" },
    floatDuration: 4.6,
    floatDelay: 0.1,
    floatDistance: -10,
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
    bgGlow: "rgba(36, 150, 237, 0.25)",
    position: { top: "2%", left: "46%" },
    floatDuration: 4.3,
    floatDelay: 0.7,
    floatDistance: -11,
  },
  {
    name: "Ubuntu",
    icon: SiUbuntu,
    color: "#E95420",
    bgGlow: "rgba(233, 84, 32, 0.25)",
    position: { top: "3%", left: "83%" },
    floatDuration: 4.1,
    floatDelay: 0.4,
    floatDistance: -12,
  },

  // ==========================================
  // --- 2. LEFT INNER ORBIT (Shifted 5% to the LEFT) ---
  // ==========================================
  {
    name: "Kali Linux",
    icon: SiKalilinux,
    color: "#557C94",
    bgGlow: "rgba(85, 124, 148, 0.25)",
    position: { top: "12%", left: "23%" },
    floatDuration: 3.7,
    floatDelay: 0.3,
    floatDistance: -9,
  },
  {
    name: "Linux",
    icon: FaLinux,
    color: "#EAA800",
    bgGlow: "rgba(234, 168, 0, 0.25)",
    position: { top: "28%", left: "18%" },
    floatDuration: 3.9,
    floatDelay: 0.15,
    floatDistance: -8,
  },
  {
    name: "Wireshark",
    icon: SiWireshark,
    color: "#1679A7",
    bgGlow: "rgba(22, 121, 167, 0.25)",
    position: { top: "44%", left: "17%" },
    floatDuration: 3.8,
    floatDelay: 0.8,
    floatDistance: -10,
  },
  {
    name: "NumPy",
    icon: SiNumpy,
    color: "#4DABCF",
    bgGlow: "rgba(77, 171, 207, 0.25)",
    position: { top: "58%", left: "19%" },
    floatDuration: 3.5,
    floatDelay: 0.35,
    floatDistance: -9,
  },

  // ==========================================
  // --- 3. LEFT OUTER ORBIT (Shifted 5% to the LEFT) ---
  // ==========================================
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    bgGlow: "rgba(247, 223, 30, 0.25)",
    position: { top: "16%", left: "6%" },
    floatDuration: 4.2,
    floatDelay: 0.6,
    floatDistance: -11,
  },
  {
    name: "Vim",
    icon: SiVim,
    color: "#019733",
    bgGlow: "rgba(1, 151, 51, 0.25)",
    position: { top: "30%", left: "3%" },
    floatDuration: 3.6,
    floatDelay: 0.5,
    floatDistance: -10,
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
    bgGlow: "rgba(55, 118, 171, 0.25)",
    position: { top: "46%", left: "1%" },
    floatDuration: 4.0,
    floatDelay: 0.45,
    floatDistance: -12,
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#00758F",
    bgGlow: "rgba(0, 117, 143, 0.25)",
    position: { top: "62%", left: "5%" },
    floatDuration: 4.4,
    floatDelay: 0.65,
    floatDistance: -11,
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    bgGlow: "rgba(240, 80, 50, 0.25)",
    position: { top: "74%", left: "20%" },
    floatDuration: 3.8,
    floatDelay: 0.25,
    floatDistance: -8,
  },

  // ==========================================
  // --- 4. UNDER FOUNDER BOX (React & C++) ---
  // ==========================================
  {
    name: "React",
    icon: SiReact,
    color: "#00D8FF",
    bgGlow: "rgba(0, 216, 255, 0.25)",
    position: { top: "89%", left: "50%" },
    floatDuration: 4.5,
    floatDelay: 0.2,
    floatDistance: -10,
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "#004482",
    bgGlow: "rgba(0, 68, 130, 0.25)",
    position: { top: "89%", left: "66%" },
    floatDuration: 3.6,
    floatDelay: 0.45,
    floatDistance: -10,
  },

  // ==========================================
  // --- 5. RIGHT INNER ORBIT (Shifted 15% to the RIGHT) ---
  // ==========================================
  {
    name: "Java",
    icon: FaJava,
    color: "#E76F00",
    bgGlow: "rgba(231, 111, 0, 0.25)",
    position: { top: "14%", left: "93%" },
    floatDuration: 3.7,
    floatDelay: 0.25,
    floatDistance: -10,
  },
  {
    name: "C",
    icon: SiC,
    color: "#00599C",
    bgGlow: "rgba(0, 89, 156, 0.25)",
    position: { top: "26%", left: "97%" },
    floatDuration: 4.1,
    floatDelay: 0.55,
    floatDistance: -12,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    bgGlow: "rgba(49, 120, 198, 0.25)",
    position: { top: "39%", left: "99%" },
    floatDuration: 4.4,
    floatDelay: 0.35,
    floatDistance: -10,
  },
  {
    name: "PHP",
    icon: SiPhp,
    color: "#777BB4",
    bgGlow: "rgba(119, 123, 180, 0.25)",
    position: { top: "52%", left: "99%" },
    floatDuration: 3.9,
    floatDelay: 0.45,
    floatDistance: -9,
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    color: "#02569B",
    bgGlow: "rgba(2, 86, 155, 0.25)",
    position: { top: "64%", left: "97%" },
    floatDuration: 4.5,
    floatDelay: 0.65,
    floatDistance: -11,
  },

  // ==========================================
  // --- 6. RIGHT OUTER ORBIT (Shifted 15% to the RIGHT) ---
  // ==========================================
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    bgGlow: "rgba(0, 0, 0, 0.2)",
    position: { top: "16%", left: "109%" },
    floatDuration: 4.3,
    floatDelay: 0.5,
    floatDistance: -11,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    bgGlow: "rgba(6, 182, 212, 0.25)",
    position: { top: "30%", left: "113%" },
    floatDuration: 3.8,
    floatDelay: 0.2,
    floatDistance: -10,
  },
  {
    name: "TensorFlow",
    icon: SiTensorflow,
    color: "#FF6F00",
    bgGlow: "rgba(255, 111, 0, 0.25)",
    position: { top: "45%", left: "113%" },
    floatDuration: 4.2,
    floatDelay: 0.75,
    floatDistance: -12,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
    bgGlow: "rgba(51, 153, 51, 0.25)",
    position: { top: "60%", left: "111%" },
    floatDuration: 3.9,
    floatDelay: 0.4,
    floatDistance: -9,
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E",
    bgGlow: "rgba(242, 78, 30, 0.25)",
    position: { top: "74%", left: "107%" },
    floatDuration: 4.4,
    floatDelay: 0.6,
    floatDistance: -10,
  },
];

export default function FloatingTechIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-visible select-none translate-x-[20%]">
      {TECH_ICONS.map((item, index) => {
        const IconComponent = item.icon;

        return (
          <motion.div
            key={item.name}
            style={item.position}
            className="absolute pointer-events-auto"
            initial={{ scale: 0, opacity: 0, y: 25 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: [0, item.floatDistance, 0],
            }}
            transition={{
              scale: {
                duration: 0.55,
                delay: 0.08 + index * 0.04,
                type: "spring",
                stiffness: 160,
                damping: 15,
              },
              opacity: { duration: 0.45, delay: 0.08 + index * 0.04 },
              y: {
                duration: item.floatDuration,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: item.floatDelay,
              },
            }}
            whileHover={{
              scale: 1.25,
              transition: { duration: 0.2 },
            }}
          >
            {/* Frosted Glass Badge - Reduced opacity by 5% */}
            <div
              className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/65 dark:border-white/10 shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition-all duration-300 cursor-pointer"
              title={item.name}
            >
              {/* Brand Color Ambient Glow on Hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none"
                style={{ backgroundColor: item.bgGlow }}
              />

              {/* Technology Icon */}
              <IconComponent
                className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
                style={{ color: item.color }}
              />

              {/* Tooltip on Hover */}
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-gray-900/90 text-white text-[10px] font-medium tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-md z-30">
                {item.name}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
