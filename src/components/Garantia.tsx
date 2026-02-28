import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, MessageCircle, Calendar, RefreshCw, CheckCircle } from "lucide-react";

const passos = [
  { icon: MessageCircle, texto: "Contate-nos dentro de 7 dias" },
  { icon: Calendar, texto: "Explique o que não ficou como esperado" },
  { icon: RefreshCw, texto: "Agendamos uma revisão" },
  { icon: CheckCircle, texto: "Refazemos o serviço ou devolvemos seu dinheiro" },
];

export function Garantia() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-3xl bg-card border-2 border-accent/30 p-8 md:p-12 shadow-xl">
            {/* Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              {/* Shield Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6"
              >
                <Shield className="w-10 h-10 text-accent" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
                Garantia LAVAMEPLUS
              </h2>
              <p className="text-xl text-accent font-semibold mb-8">
                Garantia de 7 Dias
              </p>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Se você não ficar 100% satisfeito com o resultado, nós
                refazemos o serviço sem custo adicional.
              </p>

              {/* Steps */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {passos.map((passo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary/50"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <passo.icon className="w-5 h-5 text-accent" />
                    <p className="text-sm text-muted-foreground text-center">
                      {passo.texto}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom highlights */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {["Sem perguntas", "Sem burocracia", "Sem custos adicionais"].map(
                  (item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm"
                    >
                      <CheckCircle className="w-4 h-4" />
                      {item}
                    </span>
                  )
                )}
              </div>

              <p className="text-lg font-bold text-foreground">
                Sua satisfação é garantida ou seu dinheiro de volta.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
