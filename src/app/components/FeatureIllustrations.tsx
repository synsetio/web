"use client";

import { motion } from "framer-motion";
import React from "react";

const illustrationVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      delay: 0.2,
    },
  },
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const SovereignAgentIllustration = () => (
  <motion.div
    className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={illustrationVariants}
  >
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <defs>
        <linearGradient id="sovereign-grad" x1="0" y1="0" x2="120" y2="120">
          <stop offset="0%" stopColor="#171717" />
          <stop offset="100%" stopColor="#404040" />
        </linearGradient>
      </defs>
      <motion.circle
        cx="60"
        cy="60"
        r="20"
        fill="url(#sovereign-grad)"
        animate={floatingAnimation}
      />
      <motion.circle
        cx="60"
        cy="60"
        r="35"
        stroke="#d4d4d4"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle
        cx="60"
        cy="60"
        r="50"
        stroke="#e5e5e5"
        strokeWidth="1"
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      {/* Orbiting nodes */}
      <motion.circle
        cx="60"
        cy="25"
        r="4"
        fill="#737373"
        initial={{ rotate: 0, originX: 60, originY: 60 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle
        cx="60"
        cy="10"
        r="3"
        fill="#a3a3a3"
        initial={{ rotate: 0, originX: 60, originY: 60 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  </motion.div>
);

export const VerifiedIntelligenceIllustration = () => (
  <motion.div
    className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={illustrationVariants}
  >
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <defs>
        <linearGradient id="verified-grad" x1="0" y1="0" x2="120" y2="120">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#525252" />
        </linearGradient>
      </defs>
      {/* Hexagon Grid */}
      <motion.path
        d="M60 20 L95 40 L95 80 L60 100 L25 80 L25 40 Z"
        stroke="#e5e5e5"
        strokeWidth="1"
        fill="none"
        variants={pathVariants}
      />
      <motion.path
        d="M60 35 L82 47.5 L82 72.5 L60 85 L38 72.5 L38 47.5 Z"
        stroke="#d4d4d4"
        strokeWidth="1.5"
        fill="none"
        variants={pathVariants}
      />
      {/* Central Block */}
      <motion.path
        d="M60 45 L73 52.5 L73 67.5 L60 75 L47 67.5 L47 52.5 Z"
        fill="url(#verified-grad)"
        animate={floatingAnimation}
      />
      {/* Checkmark hint */}
      <motion.path
        d="M55 60 L59 64 L65 56"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      />
    </svg>
  </motion.div>
);

export const CollectiveOrchestrationIllustration = () => (
  <motion.div
    className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={illustrationVariants}
  >
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <defs>
        <linearGradient id="collective-grad" x1="0" y1="0" x2="120" y2="120">
          <stop offset="0%" stopColor="#404040" />
          <stop offset="100%" stopColor="#171717" />
        </linearGradient>
      </defs>
      {/* Connecting Lines */}
      <motion.path
        d="M60 60 L30 30 M60 60 L90 30 M60 60 L30 90 M60 60 L90 90"
        stroke="#e5e5e5"
        strokeWidth="1"
        variants={pathVariants}
      />
      <motion.path
        d="M30 30 L90 30 L90 90 L30 90 Z"
        stroke="#f5f5f5"
        strokeWidth="0.5"
        strokeDasharray="2 2"
        variants={pathVariants}
      />

      {/* Nodes */}
      <motion.circle
        cx="30"
        cy="30"
        r="6"
        fill="#737373"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
      />
      <motion.circle
        cx="90"
        cy="30"
        r="6"
        fill="#737373"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.circle
        cx="30"
        cy="90"
        r="6"
        fill="#737373"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
      <motion.circle
        cx="90"
        cy="90"
        r="6"
        fill="#737373"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      />

      {/* Central Hub */}
      <motion.circle
        cx="60"
        cy="60"
        r="12"
        fill="url(#collective-grad)"
        animate={{
          scale: [1, 1.1, 1],
          filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </svg>
  </motion.div>
);
