
"use client";

import React from 'react';
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface UnderlineTextProps {
  // Make children optional to resolve JSX type mismatch errors across multiple components
  children?: React.ReactNode;
  className?: string;
  underlineClassName?: string;
  delay?: number;
  duration?: number;
}

export const AnimatedUnderline = ({
  children,
  className,
  underlineClassName,
  delay = 0.5,
  duration = 1.2,
}: UnderlineTextProps) => {
  return (
    <span className={cn("relative inline-block", className)}>
      <span className="relative z-10">{children}</span>
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.215, 0.61, 0.355, 1], // Strong cubic-bezier for a more physical feel
        }}
        className={cn(
          "absolute bottom-2 left-0 w-[105%] h-[35%] origin-left -z-10",
          underlineClassName || "bg-indigo-500/20 backdrop-blur-sm"
        )}
      />
    </span>
  );
};