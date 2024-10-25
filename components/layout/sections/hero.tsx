"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { SponsorsSection } from "./sponsors";

export const HeroSection = () => {
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="w-full flex">
          <div className=" space-y-8 text-center">
            <div className="max-w-screen-md mx-auto text-4xl md:text-6xl font-bold text-white">
              <h1>
                A plataforma que
                <span className="text-transparent px-2 bg-gradient-to-r from-[#ffee58] to-primary bg-clip-text">
                  aproxima
                </span>
              </h1>
              arenas e jogadores
            </div>

            <TypeAnimation
              sequence={[
                "Cadastre quadras.",
                2000,
                "Cadastre clientes.",
                2000,
                "Cadastre serviços.",
                2000,
                "Cadastre funcionários.",
                2000,
              ]}
              wrapper="span"
              speed={60}
              style={{
                fontSize: "2em",
                display: "inline-block",
                color: "#a4a4a4",
              }}
              repeat={Infinity}
            />
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <Button className="w-5/6 md:w-1/4 font-bold text-black">
                Começar teste grátis
              </Button>

              <Button
                asChild
                variant="secondary"
                className="w-5/6 md:w-2/6 font-bold"
              >
                <Link
                  href="https://github.com/nobruf/shadcn-landing-page.git"
                  target="_blank"
                >
                  Aplicativo para jogadores
                </Link>
              </Button>
            </div>
          </div>
          <Card className="relative bottom-6 w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10 bg-black">
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                Primeiro mês
                <Badge variant="secondary" className="text-sm text-primary">
                  Para testar
                </Badge>
              </CardTitle>
              <div>
                <span className="text-3xl font-bold py-">R$0</span>
                <span className="text-muted-foreground"> / Sem custo</span>
              </div>

              <CardDescription>
                Você pode testar nossos serviços o quanto quiser sem custo algum
                no primeiro mês.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full text-black font-bold">
                Testar grátis
              </Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {["4 Team member", "4 GB Storage", "Upto 6 pages"].map(
                  (benefit: string) => (
                    <span key={benefit} className="flex">
                      <Check className="text-green-500" />{" "}
                      <h3 className="ml-2">{benefit}</h3>
                    </span>
                  )
                )}
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-14 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-xl blur-3xl"></div>
          
          <Image
            width={1903}
            height={898}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-0 border-secondary  border-t-primary/30"
            src={"/dash2.png"}
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
