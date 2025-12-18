"use client";

import React from 'react';
import { motion, Variants } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "../../lib/utils";
import { AnimatedUnderline } from "./animated-underline";

interface ElegantShapeProps {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: ElegantShapeProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

export interface HeroGeometricProps {
    badge?: string;
    title1?: string;
    title2?: string;
    description?: string;
}

export function HeroGeometric({
    badge = "CNN Global Network",
    title1 = "Modernizing",
    title2 = "Corporate Gifting",
    description = "India's premier B2B ecosystem connecting verified suppliers with high-intent corporate buyers. Streamlined leads, authenticated members, and unparalleled growth.",
}: HeroGeometricProps) {
    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />
                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />
                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-4 pt-24 md:pt-10 lg:pt-20">
                <div className="max-w-[1600px] mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.08] mb-10"
                    >
                        <motion.div
                            animate={{
                                opacity: [1, 0.4, 1],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <Circle className="h-1.5 w-1.5 fill-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                        </motion.div>
                        <span className="text-[10px] text-white/70 tracking-[0.3em] uppercase font-bold">
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] 2xl:text-[6.5rem] font-black mb-8 tracking-tighter leading-[1.1] flex flex-col items-center">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/20">
                                {title1}
                            </span>
                            <AnimatedUnderline 
                                underlineClassName="bg-indigo-500/20 h-[35%] bottom-1.5 md:bottom-3 lg:bottom-5" 
                                delay={1.4} 
                                duration={1.8}
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-200 italic">
                                    {title2}
                                </span>
                            </AnimatedUnderline>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-sm md:text-lg lg:text-xl text-white/60 mb-12 leading-relaxed font-light tracking-tight max-w-xl lg:max-w-4xl mx-auto px-4 italic">
                            {description}
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    );
}