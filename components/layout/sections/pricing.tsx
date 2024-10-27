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

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  save: string;


}

const plans: PlanProps[] = [
  {
    title: "Mensal",
    popular: 0,
    price: 139,
    description:
      "Está em dúvida? Contrate o plano mensal para testar a plataforma.",
    buttonText: "Escolher plano",
    save: '',

  },
  {
    title: "Anual",
    popular: 1,
    price: 99,
    description:
      "O plano com o melhor custo-benefício.",
    buttonText: "Quero o melhor plano",
    save: "Economize R$489 por ano"

  },
  {
    title: "Semestral",
    popular: 0,
    price: 119,
    description:
      "Plano econômico, sem compromisso a longo prazo.",
    buttonText: "Escolher plano",
    save: "Economize R$240"

  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold text-primary text-center mb-2 tracking-wider">
        Planos
      </h2>

      <h2 className="text-4xl md:text-4xl text-center font-bold mb-4">
        Tenha o Jogaí na sua Arena
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Nossos planos são os mesmos, o que muda é o tempo de contrato.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, save }, index) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 bg-card/10 border-[1px] border-primary lg:scale-[1.1]"
                  : "bg-transparent"
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">R${price}</span>
                  <span className="text-muted-foreground"> /mês</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {save && (
                    <span key={save} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3 className="text-gray-300">{save}</h3>
                    </span>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                  style={{ color: index === 1 ? "black" : "white" }}
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};