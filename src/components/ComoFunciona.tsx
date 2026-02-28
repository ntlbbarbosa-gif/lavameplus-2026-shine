import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Wind, Beaker, Droplets, Sparkles, ArrowRight } from "lucide-react";

const passos = [
  {
    icon: Search,
    numero: "01",
    titulo: "Avaliação Prévia",
    items: [
      "Analisamos o tipo de tecido e condição do estofado",
      "Identificamos manchas, odores e problemas específicos",
      "Informamos sobre a real possibilidade de remoção",
    ],
  },
  {
    icon: Wind,
    numero: "02",
    titulo: "Aspiração Profunda",
    items: [
      "Removemos poeira e sujeira acumulada",
      "Equipamento profissional com alta sucção",
      "Elimina ácaros e alérgenos invisíveis",
    ],
  },
  {
    icon: Beaker,
    numero: "03",
    titulo: "Aplicação de Produtos",
    items: [
      "Solução bactericida profissional",
      "Produtos aprovados pela ANVISA",
      "Seguro para crianças e pets",
    ],
  },
  {
    icon: Droplets,
    numero: "04",
    titulo: "Extração a Seco",
    items: [
      "Máquina profissional extrai toda a umidade",
      "Tecnologia que não molha seu estofado",
      "Secagem rápida em 2-4 horas",
    ],
  },
  {
    icon: Sparkles,
    numero: "05",
    titulo: "Finalização",
    items: [
      "Escovação técnica para revitalizar fibras",
      "Neutralização de odores",
      "Estofado pronto para usar no mesmo dia",
    ],
  },
];

export function ComoFunciona() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="como-funciona" ref={ref} className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            Passo a Passo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Como Funciona a Limpeza a Seco{" "}
            <span className="text-gradient-coral">LAVAMEPLUS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nosso processo profissional de 5 etapas que garante
            resultados extraordinários
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {passos.map((passo, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={passo.numero}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-12 lg:py-8 ${
                    isEven ? "" : "lg:direction-rtl"
                  }`}
                >
                  {/* Step Number on Line */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm shadow-lg">
                      {passo.numero}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`group card-premium p-6 ${
                      isEven
                        ? "lg:col-start-1"
                        : "lg:col-start-2"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="lg:hidden w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm shrink-0">
                        {passo.numero}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                            <passo.icon className="w-5 h-5 text-accent" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground">
                            {passo.titulo}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {passo.items.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-muted-foreground text-sm"
                            >
                              <ArrowRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
