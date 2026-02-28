import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const perguntas = [
  {
    pergunta: "Quanto tempo demora a limpeza?",
    resposta:
      "Depende do tamanho e tipo do estofado. Em média: Sofá pequeno: 1-2 horas | Sofá grande/retrátil: 2-3 horas | Colchão: 1-2 horas.",
  },
  {
    pergunta: "Quanto tempo o estofado leva para secar?",
    resposta:
      "Nosso sistema de limpeza a seco garante secagem em 2-4 horas. Você pode usar seu estofado no mesmo dia!",
  },
  {
    pergunta: "É seguro para quem tem pets e crianças?",
    resposta:
      "Sim! Usamos produtos hipoalergênicos e biodegradáveis, aprovados pela ANVISA. Totalmente seguros para toda a família.",
  },
  {
    pergunta: "Vocês removem todas as manchas?",
    resposta:
      "Removemos a maioria das manchas. Em nossa avaliação prévia, informamos se a mancha pode ser removida completamente ou atenuada.",
  },
  {
    pergunta: "Qual é a diferença entre limpeza a seco e limpeza convencional?",
    resposta:
      "Limpeza a seco: Não molha, seca rápido, sem cheiro químico, resultado imediato. Limpeza convencional: Molha o estofado, demora dias para secar, pode deixar cheiro químico.",
  },
  {
    pergunta: "Quanto custa em média?",
    resposta:
      "Nossos preços começam em R$80 para poltrona e R$150 para sofá retrátil até 2m. Fazemos orçamento personalizado via WhatsApp.",
  },
  {
    pergunta: "Vocês fazem impermeabilização?",
    resposta:
      "Sim! Após a limpeza, oferecemos impermeabilização que protege seu estofado por até 12 meses contra líquidos e manchas.",
  },
  {
    pergunta: "Como agendar o serviço?",
    resposta:
      "Você pode agendar via WhatsApp clicando em qualquer botão do site. Respondemos rapidamente e combinamos o melhor horário para você!",
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={ref} className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Dúvidas <span className="text-gradient-coral">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Respondemos as perguntas mais comuns dos nossos clientes
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {perguntas.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 data-[state=open]:border-accent/50 data-[state=open]:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent transition-colors py-5 [&[data-state=open]]:text-accent">
                  {item.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {item.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-10"
          >
            <p className="text-muted-foreground mb-4">
              Ainda tem dúvidas? Fale conosco!
            </p>
            <a
              href="https://wa.me/5521979511720?text=Olá! Tenho uma dúvida sobre o serviço."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-coral inline-flex items-center gap-2"
            >
              <span>Perguntar no WhatsApp</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
