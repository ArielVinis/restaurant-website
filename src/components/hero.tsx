"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import { ArrowDownCircle } from "lucide-react";

export function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollValue = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollValue * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div ref={parallaxRef} className="absolute inset-0">
          <Image
            src="/images/restaurant-ambiance.png"
            alt="Warm restaurant ambiance"
            fill
            priority
            className="object-cover opacity-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      {/* Animated neon lines */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary opacity-30"></div>
        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-primary to-secondary opacity-30"></div>
        <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-secondary to-primary opacity-30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Porto dos Guáras
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Um restaurante moderno e elegante na beira do mar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-primary to-secondary text-white border-none hover:opacity-90 transition-opacity px-8 py-6 text-lg">
              Reserve uma mesa
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/20 transition-colors px-8 py-6 text-lg"
            >
              Explore o Menu
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <ArrowDownCircle className="text-primary w-10 h-10" />
        </motion.div>
      </motion.div>
    </section>
  );
}
