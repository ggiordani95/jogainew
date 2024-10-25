import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="">
      <div className="p-10 bg-slate-800/5">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />

              <h3 className="text-2xl">Shadcn</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Usuários</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Proprietário de Arena
              </Link>
            </div>

            <div>
              <Link href="https://play.jogai.app/" className="opacity-60 hover:opacity-100">
                Jogador
              </Link>
            </div>

          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Usabilidade</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Privacidade
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Acessibildade
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Termos
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Ajuda</h3>
            <div>
              <Link href="#contact" className="opacity-60 hover:opacity-100">
                Entre em contato
              </Link>
            </div>

            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                Pergunas Frequentes
              </Link>
            </div>

            <div>
              <Link href="#contact" className="opacity-60 hover:opacity-100">
                Feedback
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Redes Sociais</h3>
            <div>
              <Link href="https://www.instagram.com/jogaiapp/" className="opacity-60 hover:opacity-100">
                Instagram
              </Link>
            </div>


            <div>
              <Link href="https://x.com/jogaiapp" className="opacity-60 hover:opacity-100">
                X
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy;Copyright 2024
            <Link
              target="_blank"
              href="https://github.com/leoMirandaa"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Jogaí Soluções em Tecnologia LTDA - CNPJ 55.437.837/0001-94

              Todos os direitos reservados
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};