import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const comparacao = [
  {
    aspecto: "Molha o estofado?",
    convencional: "Sim, encharca",
    lavameplus: "Não, 100% a seco",
  },
  {
    aspecto: "Tempo de secagem",
    convencional: "2 a 5 dias",
    lavameplus: "2 a 4 horas",
  },
  {
    aspecto: "Cheiro químico",
    convencional: "Forte e persistente",
    lavameplus: "Sem cheiro químico",
  },
  {
    aspecto: "Resultado",
    convencional: "Demora para ver",
    lavameplus: "Imediato, na hora",
  },
  {
    aspecto: "Risco ao tecido",
    convencional: "Pode danificar",
    lavameplus: "Seguro para todos",
  },
  {
    aspecto: "Usar no mesmo dia",
    convencional: "Não",
    lavameplus: "Sim!",
  },
];

export function DiferencialExclusivo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            Comparativo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Limpeza Convencional{" "}
            <span className="text-muted-foreground">vs</span>{" "}
            <span className="text-gradient-coral">Limpeza a Seco</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entenda por que a limpeza a seco LAVAMEPLUS é a melhor escolha
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="text-sm font-semibold text-muted-foreground p-3">
              Aspecto
            </div>
            <div className="text-sm font-semibold text-center p-3 rounded-t-xl bg-destructive/10 text-destructive">
              Convencional
            </div>
            <div className="text-sm font-semibold text-center p-3 rounded-t-xl bg-accent/10 text-accent">
              LAVAMEPLUS ✨
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-2">
            {comparacao.map((item, index) => (
              <motion.div
                key={item.aspecto}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                className="grid grid-cols-3 gap-3 items-center"
              >
                <div className="text-sm font-medium text-foreground p-3">
                  {item.aspecto}
                </div>
                <div className="text-sm text-center p-3 rounded-lg bg-destructive/5 text-muted-foreground flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-destructive shrink-0" />
                  <span className="hidden sm:inline">{item.convencional}</span>
                </div>
                <div className="text-sm text-center p-3 rounded-lg bg-accent/5 text-foreground font-medium flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-accent shrink-0" />
                  <span className="hidden sm:inline">{item.lavameplus}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center text-lg font-semibold text-foreground mt-8"
          >
            Recupere seu estofado no{" "}
            <span className="text-accent">MESMO DIA</span>, sem esperar dias!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
