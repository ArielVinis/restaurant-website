"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";

const featuredDishes = [
  {
    id: 1,
    name: "Camarão ao Fogo Vivo",
    description:
      "Nosso prato assinatura traz proteínas preparadas no fogo vivo, utilizando técnicas de gastronomia molecular para criar texturas e sabores surpreendentes, que evoluem a cada mordida.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    tags: ["Signature", "Interactive"],
    price: "$42",
  },
  {
    id: 2,
    name: "Ostras Gratinadas",
    description:
      "Ostras frescas gratinadas com uma camada cremosa de queijo e leve toque de limão siciliano, trazendo uma explosão de sabores e acidez equilibrada a cada mordida.",
    image: "/images/ostras.png",
    tags: ["Vegetarian Option", "Seasonal"],
    price: "$28",
  },
  {
    id: 3,
    name: "Camarão ao Molho",
    description:
      "Camarões tenros grelhados servidos sobre purê de batata aveludado e finalizados com pétalas comestíveis, criando uma apresentação elegante e delicada, com sabores harmoniosos e surpreendentes.",
    image: "/images/prato-flor.png",
    tags: ["Premium", "Gluten-Free"],
    price: "$54",
  },
];

export function MenuHighlight() {
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
    <section className="py-16 bg-black relative">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Criações em Destaque
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Experimente nossas criações mais inovadoras e criativas
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featuredDishes.map((dish) => (
            <motion.div key={dish.id} variants={itemVariants}>
              <Card className="bg-black/50 backdrop-blur-md border border-primary/20 overflow-hidden h-full hover:border-primary/50 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={dish.image || "/placeholder.svg"}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-bold">
                      {dish.price}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{dish.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {dish.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-primary/50 text-primary bg-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
