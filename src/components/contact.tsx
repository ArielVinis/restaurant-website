"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
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
    <section id="contact" className="py-24 bg-black relative">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Contato
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tem dúvidas ou quer saber mais? Entre em contato com a nossa
              equipe
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Localização
                  </h3>
                  <p className="text-gray-300">
                    Rod. Haroldo Soares Glavan, 1980
                  </p>
                  <p className="text-gray-300">Florianópolis, Cacupé, SC</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Telefone
                  </h3>
                  <p className="text-gray-300">(48) 98411-2113</p>
                  <p className="text-gray-300">(48) 99152-9522</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Email
                  </h3>
                  <p className="text-gray-300">
                    reservations@portodosguaras.com
                  </p>
                  <p className="text-gray-300">info@portodosguaras.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Horários
                  </h3>
                  <p className="text-gray-300">
                    Terça - Domingo: 11:30 AM - 22:00 PM
                  </p>
                  <p className="text-gray-300">Fechado às segundas-feiras</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-black/50 backdrop-blur-md border border-primary/20 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Envie-nos uma mensagem
                </h3>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Input
                      placeholder="Seu Nome"
                      className="bg-black/50 border-primary/30 focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Seu Email"
                      className="bg-black/50 border-primary/30 focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      placeholder="Assunto"
                      className="bg-black/50 border-primary/30 focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      placeholder="Sua Mensagem"
                      className="bg-black/50 border-primary/30 focus:border-primary transition-colors min-h-[150px]"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white border-none hover:opacity-90 transition-opacity py-6">
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
