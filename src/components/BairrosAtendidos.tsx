import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const principaisBairros = [
  "Jacarepaguá",
  "Praça Seca",
  "Vila Valqueire",
  "Bento Ribeiro",
  "Vila Militar",
  "Barra da Tijuca",
  "Recreio dos Bandeirantes",
  "Vargem Grande",
  "Vargem Pequena",
  "Freguesia",
  "Tanque",
  "Taquara",
  "Curicica",
  "Pechincha",
  "Anil",
  "Senador Camará",
];

const outrasRegioes = [
  "Região Metropolitana",
  "Niterói",
  "São Gonçalo",
  "Duque de Caxias",
];

export function BairrosAtendidos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Área de Atendimento
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Atendemos em Toda a{" "}
            <span className="text-gradient-coral">Zona Oeste</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cobertura ampla com agendamento flexível para sua comodidade
          </p>
        </motion.div>

        {/* Main neighborhoods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-accent" />
            Principais Bairros
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
            {principaisBairros.map((bairro, index) => (
              <motion.div
                key={bairro}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.03 }}
                className="flex items-center gap-2 p-3 rounded-xl bg-card border border-border hover:border-accent/40 transition-colors text-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="text-foreground font-medium">{bairro}</span>
              </motion.div>
            ))}
          </div>

          {/* Other regions */}
          <h3 className="text-lg font-bold text-foreground mb-4">
            Atendemos também:
          </h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {outrasRegioes.map((regiao) => (
              <span
                key={regiao}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm"
              >
                {regiao}
              </span>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm">
            📍 Consulte disponibilidade para sua região via WhatsApp
          </p>
        </motion.div>
      </div>
    </section>
  );
}
