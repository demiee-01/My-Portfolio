import { Geist, Geist_Mono, Noto_Sans_Khmer, Orbitron, Zilla_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ConceptBackground from "@/components/ConceptBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansKhmer = Noto_Sans_Khmer({
  variable: "--font-noto-sans-khmer",
  subsets: ["khmer", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const zillaSlabHeadline = Zilla_Slab({
  variable: "--font-zilla-slab",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Demiee C1ph3r - Portfolio",
  description: "Personal portfolio of Demiee C1ph3r - Developer & Tech Enthusiast showcasing skills, achievements, and projects.",
  keywords: ["portfolio", "developer", "web development", "Demiee C1ph3r"],
  authors: [{ name: "Demiee C1ph3r" }],
  openGraph: {
    title: "Demiee C1ph3r - Portfolio",
    description: "Personal portfolio showcasing my journey as a developer and tech enthusiast.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansKhmer.variable} ${orbitron.variable} ${zillaSlabHeadline.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative antialiased">
        <ConceptBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
