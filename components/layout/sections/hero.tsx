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
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto pt-20 pb-0 md:py-32">
        <div className="w-full flex max-lg:flex-col ">
          <div className=" space-y-8 max-lg:text-center">
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
                <a href="https://dashboard.jogai.app/arena/login" target="_blank" rel="noopener noreferrer">
                  Começar teste grátis
                </a>

              </Button>

              <Button
                asChild
                variant="secondary"
                className="w-5/6 md:w-2/6 font-bold"
              >
                <Link
                  href="https://play.jogai.app/"
                  target="_blank"
                >
                  Aplicativo para jogadores
                </Link>
              </Button>
            </div>
          </div>
          <Card className="relative  bottom-6 max-lg:mt-20 max-lg:left-1/2 max-lg:translate-x-[-50%] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10 bg-black">
            <CardHeader className="max-lg:text-center">
              <CardTitle className="flex items-center justify-between max-lg:justify-center">
                Primeiro mês
                {/* <Badge variant="secondary" className="text-sm text-primary">
      BEMVINDO
    </Badge> */}
              </CardTitle>
              <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
                <span className="text-2xl font-bold">R$0</span>
                <span className="text-muted-foreground max-lg:hidden"> / Sem custo</span>
              </div>

              <CardDescription className="max-lg:text-center">
                Você pode testar nossos serviços o quanto quiser sem custo algum
                no primeiro mês. <br /><br />
                <span className="text-sm w-full font-bold text-primary">Utilize o cupom: BEMVINDO</span>
              </CardDescription>
            </CardHeader>


            <CardContent>
              <Button className="w-full text-black font-bold">
                <a href="https://dashboard.jogai.app/arena/login" target="_blank" rel="noopener noreferrer">
                  Testar gratuitamente
                </a>
              </Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4 max-lg:hidden" />

            <CardFooter className="flex ">
              <div className="space-y-4 max-lg:hidden">
                {["2 quadras", "30 dias grátis", "Comece instantaneamente"].map(
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
        <div className="relative group mt-14 lg:block hidden">
          <div className="absolute top-2 lg:-top-14 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-xl blur-3xl"></div>

          <Image
            width={1903}
            height={898}
            className="hidden lg:block w-full md:w-[1200px] mx-auto rounded-lg relative leading-none items-center border border-t-0 border-secondary border-t-primary/30"
            src={"/dash2.png"}
            alt="dashboard"
          />



          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
