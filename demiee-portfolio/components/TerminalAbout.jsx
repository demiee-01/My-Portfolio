"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaTerminal, FaCopy, FaCheck } from "react-icons/fa";

export default function TerminalAbout() {
  const [copied, setCopied] = useState(false);

  const fullBioText = `Hi, I'm Pring Rady, an Information Technology Engineering (ITE) student at the Royal University of Phnom Penh (RUPP), Cambodia. My goal is to share my technical skills, practical coding experiences, and technology-related knowledge to build impactful solutions and empower the developer community.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullBioText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-4xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden border border-gray-800/80 bg-[#0d1117] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] backdrop-blur-xl"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#161b22] border-b border-gray-800/80 select-none">
        {/* Window Controls (Red, Yellow, Green) */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
        </div>

        {/* Center Title */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-gray-400">
          <FaTerminal className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-gray-300 font-medium">pringrady@rupp-ite</span>
          <span className="text-gray-600">:</span>
          <span className="text-cyan-400">~/about-me</span>
          <span className="text-gray-500 hidden sm:inline">(zsh)</span>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md bg-gray-800/60 hover:bg-gray-700/80 text-gray-300 hover:text-white border border-gray-700/60 transition-all duration-200 cursor-pointer"
          title="Copy bio text"
        >
          {copied ? (
            <>
              <FaCheck className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400 text-[11px]">Copied!</span>
            </>
          ) : (
            <>
              <FaCopy className="w-3 h-3 text-gray-400" />
              <span className="text-[11px] hidden sm:inline">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Terminal Content Area */}
      <div className="p-5 sm:p-7 md:p-8 font-mono text-xs sm:text-sm md:text-[15px] space-y-6 leading-relaxed select-text">
        {/* Command 1: whoami */}
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-emerald-400 font-semibold">pringrady@rupp-ite</span>
            <span className="text-gray-500">:</span>
            <span className="text-cyan-400 font-medium">~</span>
            <span className="text-gray-400">$</span>
            <span className="text-yellow-300 font-medium">whoami</span>
          </div>
          <div className="mt-2 text-gray-300 pl-4 border-l-2 border-gray-800">
            <p className="text-white font-semibold text-sm sm:text-base">
              Pring Rady <span className="text-gray-500 font-normal text-xs sm:text-sm">(Demiee)</span>
            </p>
            <p className="text-gray-400 text-xs sm:text-sm mt-0.5">
              Information Technology Engineering (ITE) Student • Developer & Researcher
            </p>
          </div>
        </div>

        {/* Command 2: cat my_journey.txt */}
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-emerald-400 font-semibold">pringrady@rupp-ite</span>
            <span className="text-gray-500">:</span>
            <span className="text-cyan-400 font-medium">~</span>
            <span className="text-gray-400">$</span>
            <span className="text-yellow-300 font-medium">cat</span>
            <span className="text-purple-300 font-medium">my_journey.txt</span>
          </div>
          <div className="mt-2.5 text-gray-200 pl-4 border-l-2 border-emerald-500/60 bg-emerald-950/10 py-2.5 rounded-r-lg">
            <p className="text-gray-100 font-sans sm:font-mono leading-relaxed">
              &quot;Hi, I&apos;m <span className="text-emerald-400 font-semibold">Pring Rady</span>, an{" "}
              <span className="text-cyan-300 font-medium">
                Information Technology Engineering (ITE)
              </span>{" "}
              student at the{" "}
              <span className="text-yellow-200 font-medium">
                Royal University of Phnom Penh (RUPP)
              </span>
              , Cambodia.&quot;
            </p>
          </div>
        </div>

        {/* Command 3: cat my_goal.txt */}
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-emerald-400 font-semibold">pringrady@rupp-ite</span>
            <span className="text-gray-500">:</span>
            <span className="text-cyan-400 font-medium">~</span>
            <span className="text-gray-400">$</span>
            <span className="text-yellow-300 font-medium">cat</span>
            <span className="text-purple-300 font-medium">my_goal.txt</span>
          </div>
          <div className="mt-2.5 text-gray-200 pl-4 border-l-2 border-cyan-500/60 bg-cyan-950/10 py-2.5 rounded-r-lg">
            <p className="text-gray-100 font-sans sm:font-mono leading-relaxed">
              &quot;My goal is to{" "}
              <span className="text-cyan-300 font-medium">share my technical skills</span>,{" "}
              <span className="text-purple-300 font-medium">practical coding experiences</span>, and{" "}
              <span className="text-yellow-300 font-medium">technology-related knowledge</span> to
              build impactful applications, solve real-world problems, and empower the developer
              community.&quot;
            </p>
          </div>
        </div>

        {/* Command 4: echo $CORE_FOCUS */}
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-emerald-400 font-semibold">pringrady@rupp-ite</span>
            <span className="text-gray-500">:</span>
            <span className="text-cyan-400 font-medium">~</span>
            <span className="text-gray-400">$</span>
            <span className="text-yellow-300 font-medium">echo</span>
            <span className="text-blue-300 font-medium">$CORE_FOCUS</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-2 pl-4">
            {["Artificial Intelligence", "Software Development", "Linux Systems", "Cybersecurity"].map(
              (item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md bg-gray-800/80 text-gray-300 border border-gray-700/60 text-xs font-mono"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        {/* Active Cursor Prompt */}
        <div className="flex items-center gap-2 pt-2">
          <span className="text-emerald-400 font-semibold">pringrady@rupp-ite</span>
          <span className="text-gray-500">:</span>
          <span className="text-cyan-400 font-medium">~</span>
          <span className="text-gray-400">$</span>
          <span className="inline-block w-2.5 h-4 sm:h-5 bg-emerald-400 animate-pulse ml-0.5" />
        </div>
      </div>
    </motion.div>
  );
}