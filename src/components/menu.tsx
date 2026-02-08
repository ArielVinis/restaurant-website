"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { Badge } from "@/src/components/ui/badge";
import { MenuHighlight } from "@/src/components/menu-highlight";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  tags: string[];
};

type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    id: "starters",
    name: "Entradas",
    items: [
      {
        id: 1,
        name: "Ceviche de Camarão",
        description:
          "Ceviche de camarão fresco com toque de limão siciliano e hortelã, criando uma explosão de sabores e acidez equilibrada a cada mordida.",
        price: "$18",
        tags: ["Signature", "Molecular"],
      },
      {
        id: 2,
        name: "Ostras Gratinadas",
        description:
          "Ostras frescas gratinadas com uma camada cremosa de queijo e leve toque de limão siciliano, trazendo uma explosão de sabores e acidez equilibrada a cada mordida.",
        price: "$24",
        tags: ["Seafood", "Gluten-Free"],
      },
      {
        id: 3,
        name: "Ceviche de Peixe",
        description:
          "Ceviche de peixe fresco com toque de limão siciliano e hortelã, criando uma explosão de sabores e acidez equilibrada a cada mordida.",
        price: "$22",
        tags: ["Raw", "Protein"],
      },
    ],
  },
  {
    id: "mains",
    name: "Pratos Principais",
    items: [
      {
        id: 4,
        name: "Lulas Grelhadas",
        description:
          "Lulas frescas grelhadas com toque de limão siciliano e hortelã, criando uma explosão de sabores e acidez equilibrada a cada mordida.",
        price: "$42",
        tags: ["Seafood", "Signature"],
      },
      {
        id: 5,
        name: "Camarão ao Molho",
        description:
          "Camarões tenros grelhados servidos sobre purê de batata aveludado e finalizados com pétalas comestíveis, criando uma apresentação elegante e delicada, com sabores harmoniosos e surpreendentes.",
        price: "$65",
        tags: ["Premium", "Interactive"],
      },
      {
        id: 6,
        name: "Prato de Frutos do Mar",
        description:
          "Prato de frutos do mar com camarões, ostras, lulas e peixes frescos, servidos com toque de limão siciliano e hortelã, criando uma explosão de sabores e acidez equilibrada a cada mordida.",
        price: "$38",
        tags: ["Vegan", "Sustainable"],
      },
    ],
  },
  {
    id: "desserts",
    name: "Sobremesas",
    items: [
      {
        id: 7,
        name: "Sorvete de Chocolate",
        description:
          "Sorvete de chocolate com toque de limão siciliano e hortelã, criando uma explosão de sabores e acidez equilibrada a cada mordida.",
        price: "$19",
        tags: ["Interactive", "Signature"],
      },
      {
        id: 8,
        name: "Creme Brulée",
        description:
          "Creme brulée com toque de limão siciliano e hortelã, criando uma explosão de sabores e acidez equilibrada a cada mordida.",
        price: "$16",
        tags: ["Vegan", "Gluten-Free"],
      },
      {
        id: 9,
        name: "Torta de Frutas",
        description:
          "Torta de frutas com toque de limão siciliano e hortelã, criando uma explosão de sabores e acidez equilibrada a cada mordida.",
        price: "$24",
        tags: ["Interactive", "Contains Alcohol"],
      },
    ],
  },
  {
    id: "drinks",
    name: "Bebidas",
    items: [
      {
        id: 10,
        name: "Cerveja Artesanal",
        description:
          "Cerveja artesanal com toque de limão siciliano e hortelã, criando uma explosão de sabores e acidez equilibrada a cada mordida.",
        price: "$16",
        tags: ["Alcoholic", "Signature"],
      },
      {
        id: 11,
        name: "Vinho Tinto",
        description:
          "Vinho tinto com toque de limão siciliano e hortelã, criando uma explosão de sabores e acidez equilibrada a cada mordida.",
        price: "$14",
        tags: ["Non-Alcoholic", "Interactive"],
      },
      {
        id: 12,
        name: "Vinho Branco",
        description:
          "Vinho branco com toque de limão siciliano e hortelã, criando uma explosão de sabores e acidez equilibrada a cada mordida.",
        price: "$12",
        tags: ["Hot Beverage", "Caffeine-Free Option"],
      },
    ],
  },
];

export function Menu() {
  const [activeTab, setActiveTab] = useState("starters");
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="menu"
      className="py-24 bg-gradient-to-b from-black to-gray-950 relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
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
            Nosso Menu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Explore nosso cuidadosamente selecionado de experiências culinárias
            futuristas surpreendentes que evoluem a cada mordida.
          </motion.p>
        </div>

        <MenuHighlight />

        <div className="mt-24">
          <Tabs
            defaultValue="starters"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-12">
              <TabsList className="bg-black/50 backdrop-blur-md border border-primary/20 p-1">
                {menuData.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/20 data-[state=active]:to-secondary/20 data-[state=active]:text-white"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div ref={ref}>
              {menuData.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={
                      isInView && activeTab === category.id
                        ? "visible"
                        : "hidden"
                    }
                    className="grid md:grid-cols-2 gap-6"
                  >
                    {category.items.map((item) => (
                      <motion.div
                        key={item.id}
                        variants={itemVariants}
                        className="border border-primary/20 rounded-lg p-6 bg-black/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold text-white">
                            {item.name}
                          </h3>
                          <span className="text-primary font-bold">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-gray-400 mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="border-primary/50 text-primary text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
