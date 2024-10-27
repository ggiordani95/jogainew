"use client";

import { Badge } from "@/components/ui/badge";
import { Activity, BookUser, MoveDown, MoveDownLeft, Share2, TrendingUp, User } from "lucide-react";
import { Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import dynamic from "next/dynamic";
const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), { ssr: false });


interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-0 sm:py-10">
      <div className="w-full py-0 lg:py-0">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10">

            <div className="flex gap-4 flex-col items-center">

              <div className="flex gap-2 flex-col">
                <h2 className="text-lg text-primary text-center mb-0 tracking-wider">
                  Benefícios
                </h2>
                <h3 className="text-3xl md:text-4xl text-center font-bold mb-0">

                  Benefícios para a sua Arena
                </h3>
                <p className="mx-auto text-xl text-center text-muted-foreground mb-4">
                  A melhor plataforma de gestão para proprietários
                </p>
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 ">

              <div className="bg-stone-950 rounded-xl justify-start lg:col-span-3 hover:bg-primary hover:text-black hover:scale-105 transition duration-300 p-6 flex flex-col group">
                <Activity className="w-8 h-8 stroke-1 text-primary group-hover:text-black" />
                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight pt-14 pb-4">Gestão simplificada</h3>
                  <p className="text-base">
                    Diga adeus aos sistemas complicados e falhas na comunicação. Nosso app oferece uma plataforma intuitiva e confiável para gerenciar suas reservas com eficiência e transparência.
                  </p>
                </div>
              </div>

              <div className="border border-stone-800 rounded-xl lg:col-span-3 hover:bg-primary hover:text-black hover:scale-105 transition duration-300 p-6 lg:aspect-auto flex flex-col group">
                <Share2 className="w-8 h-8 stroke-1 text-primary group-hover:text-black" />
                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight pt-14 pb-4">Link personalizado</h3>
                  <p className="max-w-xs text-base">
                    Todas informações e agenda estarão disponíveis em um link individual para sua Arena. Envie e divulgue para seus clientes.
                  </p>
                </div>
              </div>

              <div className="bg-transparent rounded-xl lg:col-span-2 aspect-square hover:bg-primary hover:text-black hover:scale-105 transition duration-300 p-6 flex  flex-col border border-stone-800 group">
                <Badge className="w-fit h-[32px] bg-primary text-black group-hover:bg-black group-hover:text-primary">Em breve</Badge>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight pt-14 pb-4">Organize campeonatos</h3>
                  <p className="max-w-xs text-base">
                    Facilite a criação e gestão de campeonatos, mantendo tudo centralizado em uma única plataforma. Organize inscrições, tabelas e resultados de forma prática e eficiente.
                  </p>
                </div>
              </div>


              <div className="bg-stone-950 rounded-xl lg:col-span-2 aspect-square hover:bg-primary hover:text-black hover:scale-105 transition duration-300 p-6 flex flex-col group">
                <BookUser className="w-8 h-8 stroke-1 text-primary group-hover:text-black" />
                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight pt-14 pb-4">Lista de clientes</h3>
                  <p className="max-w-xs text-base">
                    Mantenha o controle de toda a sua base de clientes em um só lugar. Cada novo agendamento é registrado automaticamente, facilitando a gestão e proporcionando uma visão completa de quem utiliza suas quadras.
                  </p>
                </div>
              </div>


              <div className="bg-transparent rounded-xl lg:col-span-2 aspect-square p-6 flex flex-col border border-stone-800 hover:bg-primary hover:text-black hover:scale-105 transition duration-300 group">
                <TrendingUp className="w-8 h-8 stroke-1 text-primary group-hover:text-black" />
                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight pt-14 pb-4">Aumente a visibilidade</h3>
                  <p className="max-w-xs text-base">
                    Ganhe mais visibilidade ao se cadastrar em nossa plataforma! Sua arena estará acessível para um público maior, como uma vitrine digital, facilitando o acesso de novos clientes e ampliando seu alcance.
                  </p>
                </div>
              </div>


            </div>

            {/* <div className="flex justify-center mt-10">
              <Button className="w-5/6 h-14 md:w-1/4 font-bold text-black flex items-center justify-center gap-2">
                <a href="#pricing" className="flex items-center justify-center gap-6">
                  Conheça nossos planos
                  <MotionDiv
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                    className="w-4 h-4"
                  >
                    <MoveDown />
                  </MotionDiv>
                </a>
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section >
  );
};
