"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1577219492769-b63a779fac28?q=80&w=800&auto=format&fit=crop",
    alt: "Chef preparando aperitivos gourmet com precisão",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800&auto=format&fit=crop",
    alt: "Chef criando pratos marcados por chamas dramáticas",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    alt: "Chef preparando pão artesanal com ingredientes frescos",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=800&auto=format&fit=crop",
    alt: "Chef fatiando carne perfeitamente preparada com precisão",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1421622548261-c45bfe178854?q=80&w=800&auto=format&fit=crop",
    alt: "Ambiente acolhedor de restaurante com iluminação elegante",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=800&auto=format&fit=crop",
    alt: "Empratamento artístico com flores comestíveis",
    width: 800,
    height: 600,
  },
];

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="gallery" className="py-24 bg-black relative">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Galeria
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Uma jornada visual através de nossas criações culinárias e ambiente
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
