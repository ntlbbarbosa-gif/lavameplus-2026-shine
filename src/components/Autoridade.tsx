import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Calendar, MapPin, ShieldCheck, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    numero: "2.500+",
    label: "Clientes Satisfeitos",
    desc: "Famílias que confiam no nosso trabalho",
  },
  {
    icon: Award,
    numero: "98%",
    label: "Taxa de Satisfação",
    desc: "Avaliações positivas dos nossos clientes",
  },
  {
    icon: Calendar,
    numero: "Desde 2020",
    label: "No Mercado",
    desc: "Transformando estofados no Rio de Janeiro",
  },
];

const diferenciais = [
  {
    icon: ShieldCheck,
    titulo: "Equipe Treinada",
    desc: "Profissionais uniformizados e capacitados",
  },
  {
    icon: Award,
    titulo: "Produtos Certificados",
    desc: "Aprovados pela ANVISA, seguros para todos",
  },
  {
    icon: MapPin,
    titulo: "Toda Zona Oeste",
    desc: "Jacarepaguá, Barra, Recreio e região",
  },
  {
    icon: Clock,
    titulo: "Agendamento Flexível",
    desc: "De segunda a domingo, no melhor horário",
  },
];

export function Autoridade() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-primary/5">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Experiência Comprovada
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Por Que Escolher{" "}
            <span className="text-gradient-coral">LAVAMEPLUS</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Credibilidade construída com resultados reais e clientes satisfeitos
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center p-8 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <p className="text-4xl font-bold text-accent mb-2">{stat.numero}</p>
              <p className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-muted-foreground">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Differentials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {diferenciais.map((item, index) => (
            <motion.div
              key={item.titulo}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/50"
            >
              <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm">{item.titulo}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
