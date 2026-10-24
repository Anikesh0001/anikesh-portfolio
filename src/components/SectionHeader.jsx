import React from "react";
import { motion } from "framer-motion";

/**
 * Consistent section header used across the site.
 * - eyebrow: small kicker label (e.g. "01 — Work")
 * - title / highlight: heading, with `highlight` rendered in the brand gradient
 * - subtitle: optional supporting line
 * - align: "left" (default) or "center"
 */
export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "left",
}) {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-14 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div
          className={`flex items-center gap-3 mb-4 ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-purple-600" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1]">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>

      {subtitle && (
        <p className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
