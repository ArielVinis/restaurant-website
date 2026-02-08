"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";

const chefs = [
  {
    id: 1,
    name: "Alex Moreno",
    title: "Executive Chef",
    image:
      "https://plus.unsplash.com/premium_photo-1687697861242-03e99059e833?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    specialties: [
      "Gastronomia Molecular",
      "Cozinha de Fusão",
      "Sustentabilidade de Ingredientes",
    ],
    bio: "Com mais de 15 anos de experiência em restaurantes estrelados Michelin pela Europa e Ásia, o Chef Alex traz uma perspectiva única ao menu inovador do NOVA. Sua paixão por combinar técnicas tradicionais com apresentações futuristas define a direção culinária da nossa casa.",
  },
  {
    id: 2,
    name: "Sophia Chen",
    title: "Chef of Kitchen",
    image:
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    specialties: [
      "Técnicas com Fogo",
      "Fusão Asiática",
      "Jantares Interativos",
    ],
    bio: "Chef Sophia é reconhecida por suas criações marcadas pelo fogo vivo e apresentações teatrais. Após treinar em Tóquio e Paris, desenvolveu um estilo único que une técnica precisa com expressão artística e combinações de sabores inesperadas.",
  },
  {
    id: 3,
    name: "Marcus Williams",
    title: "Chef Pâtissier",
    image:
      "https://images.unsplash.com/photo-1722152667178-be659e54bffc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    specialties: [
      "Pães Artesanais",
      "Sobremesas Desconstruídas",
      "Arte Comestível",
    ],
    bio: "Chef Marcus transforma confeitaria tradicional em criações futuristas. Sua formação dupla em artes culinárias e design industrial permite criar sobremesas e pães que desafiam percepções e trazem sabores extraordinários.",
  },
];

export function Chefs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="chefs"
      className="py-24 bg-gradient-to-b from-black to-gray-950 relative"
    >
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Conheça Nossos Chefes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Os visionários culinários por trás da experiência gastronômica
            inovadora do Porto dos Guáras.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {chefs.map((chef) => (
            <motion.div key={chef.id} variants={itemVariants}>
              <Card className="bg-black/50 backdrop-blur-md border border-primary/20 overflow-hidden h-full">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={chef.image || "/placeholder.svg"}
                    alt={chef.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {chef.name}
                    </h3>
                    <p className="text-primary font-medium">{chef.title}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {chef.specialties.map((specialty, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-primary/50 text-primary bg-primary/20"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-gray-300">{chef.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
