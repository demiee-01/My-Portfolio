"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaTelegramPlane, FaGraduationCap, FaBullseye } from "react-icons/fa";

export default function QuoteAbout() {
  return (
    <div className="w-full">
      {/* Two Clean Quote Columns matching user's reference */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 max-w-6xl mx-auto">
        {/* Quote 1: My Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group relative p-8 sm:p-10 rounded-3xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200/80 dark:border-gray-700/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            {/* Category / Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700/60 text-gray-800 dark:text-gray-200 text-xs font-semibold tracking-wider uppercase mb-6">
              <FaGraduationCap className="w-3.5 h-3.5 text-gray-900 dark:text-white" />
              <span>My Journey</span>
            </div>

            {/* Quote Row: Left Quote Icon + Right Text (matching reference image) */}
            <div className="flex items-start gap-4 sm:gap-5">
              <FaQuoteLeft className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900 dark:text-white shrink-0 mt-1" />
              <blockquote className="text-base sm:text-lg text-gray-800 dark:text-gray-200 font-normal leading-relaxed">
                Hi, I&apos;m{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Pring Rady
                </span>
                , an{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Information Technology Engineering (ITE)
                </span>{" "}
                student at the{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Royal University of Phnom Penh (RUPP)
                </span>
                , Cambodia.
              </blockquote>
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="pt-6 mt-8 border-t border-gray-100 dark:border-gray-700/80 flex items-center justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Royal University of Phnom Penh • ITE
            </p>
            <span className="text-xs px-2.5 py-1 rounded-md bg-gray-50 dark:bg-gray-700/40 text-gray-600 dark:text-gray-400 border border-gray-200/60 dark:border-gray-700">
              Cambodia 🇰🇭
            </span>
          </div>
        </motion.div>

        {/* Quote 2: My Goal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative p-8 sm:p-10 rounded-3xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200/80 dark:border-gray-700/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            {/* Category / Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700/60 text-gray-800 dark:text-gray-200 text-xs font-semibold tracking-wider uppercase mb-6">
              <FaBullseye className="w-3.5 h-3.5 text-gray-900 dark:text-white" />
              <span>My Goal</span>
            </div>

            {/* Quote Row: Left Quote Icon + Right Text (matching reference image) */}
            <div className="flex items-start gap-4 sm:gap-5">
              <FaQuoteLeft className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900 dark:text-white shrink-0 mt-1" />
              <blockquote className="text-base sm:text-lg text-gray-800 dark:text-gray-200 font-normal leading-relaxed">
                My goal is to{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  share my technical skills
                </span>
                ,{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  practical coding experiences
                </span>
                , and{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  technology-related knowledge
                </span>{" "}
                to build impactful applications and empower the developer community.
              </blockquote>
            </div>
          </div>

          {/* Footer Metadata with Community Button */}
          <div className="pt-6 mt-8 border-t border-gray-100 dark:border-gray-700/80 flex items-center justify-between flex-wrap gap-3">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Technical Mission &amp; Sharing
            </p>

            {/* Community Telegram Button - Turns Black on Hover & Hold */}
            <a
              href="https://t.me/demiee_0I"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-gray-900 text-gray-900 bg-transparent text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-black hover:text-white hover:border-black active:bg-black active:text-white active:border-black active:scale-95 cursor-pointer shadow-xs hover:shadow-md"
              title="Join Telegram Community"
            >
              <FaTelegramPlane className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
              <span>Community 🚀</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}