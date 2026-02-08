"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar } from "@/src/components/ui/calendar";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export function Reservation() {
  const [date, setDate] = useState<Date | undefined>(undefined);
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
    <section
      id="reservation"
      className="py-24 bg-gradient-to-b from-gray-950 to-black relative"
    >
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Reserve sua Experiência
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Reserve sua experiência gastronômica no Porto dos Guarás
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-black/50 backdrop-blur-md border border-primary/20 rounded-xl p-8"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  placeholder="Digite seu nome completo"
                  className="bg-black/50 border-primary/30 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Endereço de Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Digite seu email"
                  className="bg-black/50 border-primary/30 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Número de Telefone</Label>
                <Input
                  id="phone"
                  placeholder="Digite seu número de telefone"
                  className="bg-black/50 border-primary/30 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests">Número de Convidados</Label>
                <Select>
                  <SelectTrigger className="bg-black/50 border-primary/30 focus:border-primary transition-colors">
                    <SelectValue placeholder="Selecione o número de convidados" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Pessoa</SelectItem>
                    <SelectItem value="2">2 Pessoas</SelectItem>
                    <SelectItem value="3">3 Pessoas</SelectItem>
                    <SelectItem value="4">4 Pessoas</SelectItem>
                    <SelectItem value="5">5 Pessoas</SelectItem>
                    <SelectItem value="6">6 People</SelectItem>
                    <SelectItem value="7+">7+ Pessoas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Data da Reserva</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal bg-black/50 border-primary/30 hover:bg-black/70 hover:border-primary/50"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? (
                        format(date, "PPP")
                      ) : (
                        <span>Selecione uma data</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-black/90 border-primary/30">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="bg-transparent"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Horário da Reserva</Label>
                <Select>
                  <SelectTrigger className="bg-black/50 border-primary/30 focus:border-primary transition-colors">
                    <SelectValue placeholder="Selecione o horário" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="17:00">5:00 PM</SelectItem>
                    <SelectItem value="17:30">5:30 PM</SelectItem>
                    <SelectItem value="18:00">6:00 PM</SelectItem>
                    <SelectItem value="18:30">6:30 PM</SelectItem>
                    <SelectItem value="19:00">7:00 PM</SelectItem>
                    <SelectItem value="19:30">7:30 PM</SelectItem>
                    <SelectItem value="20:00">8:00 PM</SelectItem>
                    <SelectItem value="20:30">8:30 PM</SelectItem>
                    <SelectItem value="21:00">9:00 PM</SelectItem>
                    <SelectItem value="21:30">9:30 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="special">Requisitos Especiais</Label>
                <Input
                  id="special"
                  placeholder="Digite quaisquer requisitos especiais ou restrições alimentares"
                  className="bg-black/50 border-primary/30 focus:border-primary transition-colors"
                />
              </div>

              <div className="md:col-span-2">
                <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white border-none hover:opacity-90 transition-opacity py-6 text-lg">
                  Reservar Agora
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
