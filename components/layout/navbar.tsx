"use client";

import { ChevronsDown, Github, Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";
import jogai from "../../public/jogai.png";
import { useNavbarStore } from "@/store/navbar-store";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
  link: string;
}

const routeList: RouteProps[] = [

  {
    href: "#features",
    label: "Soluções para sua Arena",
  },
  {
    href: "#contact",
    label: "Contato",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Entrar como Arena",
    description:
      "Plataforma para gestão",
    link: "https://dashboard.jogai.app/arena/login"
  },
  {
    title: "Entrar como Jogador ",
    description: "Plataforma para agendamento",
    link: "https://play.jogai.app"
  },

];


export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navIsFixed = useNavbarStore((state: any) => state.isNavbarFixed)

  return (
    <header className={`${navIsFixed ? "fixed top-0" : "block"} backdrop-blur-lg shadow-lg  bg-card/30   border-2 border-t-0 border-l-0 border-r-0 border-b-white/10  mx-auto sticky z-40  p-2`}>
      <div className="flex justify-between items-center container">
        <Link
          href="/"
          className="font-bold text-lg flex items-center p-4 pl-0 max-w-[140px]"
        >
          <Image src={jogai} alt="Jogai logo" />
        </Link>
        <div className="flex flex-row gap-14">
          {/* <!-- Mobile --> */}
          <div className="flex items-center lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Menu
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer lg:hidden"
                />
              </SheetTrigger>

              <SheetContent
                side="left"
                className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
              >
                <div>
                  <SheetHeader className="mb-4 ml-4">
                    <SheetTitle className="flex items-center">
                      <Link href="/" className="flex items-center">
                        <Image src={jogai} width={100} height={60} alt="Logo Jogai">

                        </Image>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col gap-2">
                    {routeList.map(({ href, label }) => (
                      <Button
                        key={href}
                        onClick={() => setIsOpen(false)}
                        asChild
                        variant="ghost"
                        className="justify-start text-base"
                      >
                        <Link href={href}>{label}</Link>
                      </Button>
                    ))}
                  </div>
                </div>


              </SheetContent>
            </Sheet>
          </div>

          {/* <!-- Desktop --> */}
          <NavigationMenu className="hidden lg:block mx-auto">
            <NavigationMenuList>


              <NavigationMenuItem>
                {routeList.map(({ href, label }) => (
                  <NavigationMenuLink key={href} asChild>
                    <Link href={href} className="text-base px-2 mr-3">
                      {label}
                    </Link>
                  </NavigationMenuLink>
                ))}
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-primary text-black">
                  Entrar
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[250px] grid-cols-1 gap-5 p-4">

                    <ul className="flex flex-col gap-2">
                      {featureList.map(({ title, description, link }) => (
                        <a key={title} href={link} target="_blank">
                          <li

                            className="rounded-md p-3 text-sm hover:bg-primary group"
                          >
                            <p className="mb-1 font-semibold leading-none text-foreground  group-hover:text-black">
                              {title}
                            </p>
                            <p className="line-clamp-2 text-muted-foreground  group-hover:text-black/70">
                              {description}
                            </p>
                          </li>

                        </a>

                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>


        </div>
      </div>
    </header>
  );
};
