"use client";

import { useState } from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData } from "@/data/skills";
import { socialsData } from "@/data/socials";
import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import FloatingTechIcons from "@/components/FloatingTechIcons";
import QuoteAbout from "@/components/QuoteAbout";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(projectsData.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-transparent text-gray-900 relative">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start min-h-screen">
          {/* Left Content */}
          <motion.div
            className="space-y-6 pt-8 translate-y-[10%]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              {/* Hello I'm with fade - BIGGER */}
              <motion.p
                className="text-2xl md:text-3xl text-gray-500 mb-4 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hello, I&apos;m
              </motion.p>

              {/* Big Name with bounce - EVEN BIGGER with STRONG SHADOW - Single Line - Mozilla Headline Font */}
              <motion.h1
                className="text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 leading-tight mb-12 drop-shadow-lg whitespace-nowrap font-headline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                style={{
                  textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                }}
              >
                Pring Rady
              </motion.h1>

              {/* Description with shadow - Single paragraph */}
              <motion.p
                className="text-xl md:text-2xl font-medium text-gray-900 max-w-2xl mt-8 leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", lineHeight: "1.7" }}
              >
                I&apos;m passionate about <span className="font-bold">Artificial Intelligence</span> Tech,{" "}
                <span className="font-bold">Software Development</span> Skills,{" "}
                <span className="font-bold">Design</span> Skills,{" "}
                <span className="font-bold">Researcher</span>, <span className="font-bold">Linux</span>, and{" "}
                <span className="font-bold">Cybersecurity</span>, with a strong interest in building
                practical applications and continuously expanding my technical knowledge.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-4 mt-[5%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - HUGE Profile Image */}
          <motion.div
            className="relative h-screen -mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="sticky top-0 h-screen flex items-start justify-end pt-0 pb-0 relative">
              <div
                className="relative w-3/4 h-full max-h-screen translate-x-[20%]"
                style={{
                  maskImage: "linear-gradient(to bottom, black 80%, transparent 98%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 98%)",
                }}
              >
                <Image
                  src="/image/image.png"
                  alt={`${profileData.name} profile photo`}
                  fill
                  className="object-cover object-top scale-[0.675]"
                  style={{
                    filter:
                      "drop-shadow(0 15px 25px rgba(0, 0, 0, 0.16)) drop-shadow(0 30px 45px rgba(0, 0, 0, 0.2))",
                  }}
                  priority
                  quality={100}
                  sizes="40vw"
                  unoptimized={false}
                />
              </div>

              {/* Floating Tech Icons Around Profile */}
              <FloatingTechIcons />
            </div>

            {/* Simple Text with Glass Box 30% - Shifted Up 3% (70%) and Left 9% (79%) */}
            <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute bottom-[70%] left-[79%] -translate-x-1/2 pointer-events-auto z-10 scale-[0.97]"
              >
                {/* Main FOUNDER Box with two small boxes inside */}
                <div className="bg-white/40 backdrop-blur-md rounded-lg px-8 sm:px-14 py-2 border border-white/50 shadow-lg">
                  <h2 className="text-gray-900 font-bold text-xl tracking-wide text-center mb-2">
                    FOUNDER
                  </h2>

                  {/* Two Small Boxes Side by Side - Simple to Purple on Hover */}
                  <div className="flex gap-2 justify-center">
                    {/* Box 1 - Demiee2.0 */}
                    <a
                      href="https://www.facebook.com/share/19nuBVGW7D/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative bg-white/40 backdrop-blur-sm rounded-full px-5 py-1.5 border border-white/50 shadow-md transition-all duration-300 hover:bg-purple-500 hover:border-purple-600 hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] cursor-pointer group min-w-[120px] text-center"
                    >
                      <p className="relative z-10 text-gray-900 font-medium text-xs group-hover:text-white group-hover:font-bold transition-all duration-300">
                        Demiee2.0
                      </p>
                    </a>

                    {/* Box 2 - Penquin កំហូច */}
                    <a
                      href="https://www.facebook.com/share/19nuBVGW7D/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative bg-white/40 backdrop-blur-sm rounded-full px-5 py-1.5 border border-white/50 shadow-md transition-all duration-300 hover:bg-purple-500 hover:border-purple-600 hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] cursor-pointer group min-w-[120px] text-center"
                    >
                      <p className="relative z-10 text-gray-900 font-medium text-xs whitespace-nowrap group-hover:text-white group-hover:font-bold transition-all duration-300 font-noto-sans-khmer">
                        Penquin កំហូច
                      </p>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* About Section - Modern Quote Style */}
      <div id="about" className="max-w-7xl mx-auto mt-32 scroll-mt-28">
        <QuoteAbout />
      </div>

      {/* Tech Skills Section - Animated on Scroll (Up and Down) with Original Style */}
      <div id="skills" className="max-w-7xl mx-auto mt-32 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            EXPERTISE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-white border border-transparent hover:border-gray-200 transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-16 h-16 mb-6 transition-transform duration-300 group-hover:scale-110">
                <skill.icon
                  className="w-full h-full"
                  style={{ color: skill.brandColor }}
                  aria-label={skill.name}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Projects Section - Animated on Scroll (Up and Down) with Original Style */}
      <div id="projects" className="max-w-7xl mx-auto mt-32 mb-16 scroll-mt-28">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            PORTFOLIO
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Projects &amp; Researcher
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            A showcase of technical projects, open-source work, and practical applications
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        {categories.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    isSelected
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-900 bg-gray-100"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="active-category"
                      className="absolute inset-0 bg-gray-900 rounded-full -z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                category={project.category}
                featured={project.featured}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Footer - Contact Section - Animated on Scroll (Up and Down) with Original Style */}
      <footer id="contact" className="bg-gray-900 text-white mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Footer Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-gray-400">
              Find me on these platforms
            </p>
          </motion.div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {socialsData.map((social, idx) => (
              <motion.a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group p-6 bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${social.brandColor}20` }}
                  >
                    <social.icon
                      className="w-6 h-6"
                      style={{ color: social.brandColor }}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">
                      {social.platform}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {social.handle}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Pring Rady. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}