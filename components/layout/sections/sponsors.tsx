"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Image from "next/image";
import tennis from "../../../public/tennis.png";
import soccer from "../../../public/soccer.png";
import volley from "../../../public/volley.png";
interface sponsorsProps {
  icon: any;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: <Image src={soccer} alt="soccer" width={120} height={122} />,
    name: "Futebol Society",
  },
  {
    icon: <Image src={tennis} alt="tennis" width={120} height={122} />,
    name: "Beach Tennis",
  },
  {
    icon: <Image src={soccer} alt="soccer" width={120} height={122} />,
    name: "Futebol 11",
  },
  {
    icon: <Image src={tennis} alt="tennis" width={120} height={122} />,
    name: "Tênis",
  },
  {
    icon: <Image src={volley} alt="volley" width={120} height={122} />,
    name: "Futevôlei",
  },
  {
    icon: <Image src={soccer} alt="soccer" width={120} height={122} />,
    name: "Futebol de Areia",
  },
  
];

export const SponsorsSection = () => {
  return (
    <div className="relative ">
      <section
        id="sponsors"
        className="max-w-[100%] mx-auto pb-32 pt-0"
      >
        {/* <h2 className=" duration-10000 text-white text-3xl font-semibold md:text-4xl text-center mb-14">
          Confira os esportes disponíveis{" "}
        </h2> */}
        <div className="mx-auto pt-6">
          <Marquee
            className="gap-[2.4rem]"
            numberOfCopies={4}
            fade
            innerClassName="gap-[2.4rem]"
          >
            {sponsors.map(({ icon, name }) => (
              <div
                key={name}
                className="flex items-center bg-card/20 text-lg md:text-3xl  text-card-foreground/50 p-6 rounded-2xl gap-3"
              >
                <div className="max-w-[42px] mr-2 ">{icon}</div>
                <span>{name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </div>
  );
};
