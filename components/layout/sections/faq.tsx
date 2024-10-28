import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Pergunta número 1?",
    answer: "Resposta 1",
    value: "item-1",
  },
  {
    question: "Pergunta número 2?",
    answer:
      "Resposta 2",
    value: "item-2",
  },
  {
    question:
      "Pergunta número 3?",
    answer:
      "Resposta 3",
    value: "item-3",
  },
  {
    question: "Pergunta número 4?",
    answer: "Resposta 4",
    value: "item-4",
  },
  {
    question:
      "Pergunta número 5?",
    answer: "Resposta 5",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 max-lg:py-8 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Perguntas Frequentes
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};