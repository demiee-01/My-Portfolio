"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [isProjectsVisible, setIsProjectsVisible] = useState(false);

    useEffect(() => {
        if (pathname !== "/") return;

        const handleScroll = () => {
            const projectsEl = document.getElementById("projects");
            if (projectsEl) {
                const rect = projectsEl.getBoundingClientRect();
                setIsProjectsVisible(rect.top <= 250 && rect.bottom >= 150);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    const links = [
        { href: "/", label: "About Me" },
        { href: "/#projects", label: "Projects" },
        { href: "/achievement", label: "Achievement" },
        { href: "/contact", label: "Contact" }
    ];

    const isLinkActive = (link) => {
        if (pathname === "/achievement") {
            return link.href === "/achievement";
        }
        if (pathname === "/contact") {
            return link.href === "/contact";
        }
        if (pathname === "/") {
            if (link.label === "Projects") {
                return isProjectsVisible;
            }
            if (link.label === "About Me") {
                return !isProjectsVisible;
            }
        }
        return false;
    };

    const handleNavClick = (e, link) => {
        if (link.label === "Projects") {
            if (pathname === "/") {
                e.preventDefault();
                const projectSection = document.getElementById("projects");
                if (projectSection) {
                    projectSection.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", "#projects");
                    setIsProjectsVisible(true);
                }
            }
        } else if (link.label === "About Me" && pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.pushState(null, "", "/");
            setIsProjectsVisible(false);
        } else if (link.label === "Contact") {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                e.preventDefault();
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]">
            <div className="bg-gray-200/40 backdrop-blur-xl border border-white/40 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-lg">
                <ul className="flex gap-2 sm:gap-6 items-center text-xs sm:text-sm md:text-base">
                    {links.map((link) => {
                        const active = isLinkActive(link);
                        return (
                            <li key={link.label} className="relative">
                                <Link
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link)}
                                    className={`relative z-10 px-3 py-2 transition-colors duration-300 ${active
                                        ? 'text-gray-900 font-semibold'
                                        : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    {link.label}
                                    {active && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute inset-0 bg-white/60 rounded-full -z-10"
                                            style={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
