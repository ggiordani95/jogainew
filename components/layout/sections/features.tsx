import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "CalendarCheck",
    title: "Agendamento",
    description:
      "Com nossa plataforma, seus clientes poderão agendar os horários direto pelo aplicativo Jogaí.",
  },
  {
    icon: "Calendar",
    title: "Calendário",
    description:
      "Tenha uma visualização fácil de seus horários e agende jogos também com o nosso calendário.",
  },
  {
    icon: "PartyPopper",
    title: "Eventos",
    description:
      "Disponibilize seu espaço para eventos e churrascos para todos seus clientes pelo nosso app.",
  },
  {
    icon: "Group",
    title: "Clientes",
    description:
      "Possua uma lista com todos seus clientes e tenha a oportunidade de mandar mensagens.",
  },
  {
    icon: "MousePointerClick",
    title: "Financeiro",
    description:
      "Acompanhe seu faturamento e números de agendamentos de sua Arena de forma automatizada.",
  },

  {
    icon: "MousePointerClick",
    title: "Mensalistas",
    description:
      "Faça a gestão dos seus mensalistas na nossa plataforma",
  },
  
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-16 sm:py-12">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Soluções
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        As melhores Soluções para sua Arena
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        O Jogaí foi criado para ser a melhor opção de mercado para os proprietários de Arenas Esportivas.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/40 animate-pulse p-4 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};