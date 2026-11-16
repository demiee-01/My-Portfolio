"use client";

/**
 * DotGridBackground (Media 2 Concept)
 * Clean, minimalist dot grid on white canvas as requested in Media 2.
 * Pure white background with precision-aligned subtle dots.
 */
export default function ConceptBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 select-none bg-white dark:bg-gray-900"
    >
      {/* Light Mode Precision Dot Matrix Grid (Media 2) */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0.10) 1.2px, transparent 1.2px)`,
          backgroundSize: "26px 26px",
          backgroundPosition: "0 0",
        }}
      />

      {/* Dark Mode Precision Dot Matrix Grid */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.10) 1.2px, transparent 1.2px)`,
          backgroundSize: "26px 26px",
          backgroundPosition: "0 0",
        }}
      />
    </div>
  );
}
