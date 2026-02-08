"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-sm"></div>
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1577219492769-b63a779fac28?q=80&w=698&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Chef preparing gourmet appetizers"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Nossa História
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary"></div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-300 text-lg">
              Fundado em 2035, Porto dos Guáras representa o ponto culminante da
              inovação culinária. Nossa equipe de chefs visionários e cientistas
              de alimentos criou uma experiência gastronômica que transcende a
              gastronomia tradicional.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-300 text-lg">
              Combinamos técnicas moleculares de ponta com tradições culinárias
              passadas de geração em geração para criar pratos que estimulam
              todos os sentidos. Cada prato conta uma história do nosso planeta
              passado, presente e imaginário futuro.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              <div className="border border-primary/30 rounded-lg p-4 bg-black/50 backdrop-blur-sm">
                <h3 className="text-primary text-xl font-semibold mb-2">
                  Inovação
                </h3>
                <p className="text-gray-400">
                  Alcançando os limites do que é possível na culinária
                </p>
              </div>
              <div className="border border-secondary/30 rounded-lg p-4 bg-black/50 backdrop-blur-sm">
                <h3 className="text-primary text-xl font-semibold mb-2">
                  Sustentabilidade
                </h3>
                <p className="text-gray-400">
                  Comprometido com práticas sustentáveis e ingredientes
                  selecionados com muito carinho
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
