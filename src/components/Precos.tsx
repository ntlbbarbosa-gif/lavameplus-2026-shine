import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, CreditCard, ArrowRight } from "lucide-react";

const precos = [
  { nome: "Sofá Pequeno", descricao: "Até 1,5m", preco: "120", popular: false },
  { nome: "Sofá Retrátil", descricao: "Até 2,0m", preco: "150", popular: true },
  { nome: "Sofá Grande", descricao: "Acima de 2,0m", preco: "180", popular: false },
  { nome: "Sofá em L", descricao: "Até 3,5m", preco: "220", popular: false },
  { nome: "Colchão Solteiro", descricao: "Cama de solteiro", preco: "100", popular: false },
  { nome: "Colchão Casal", descricao: "Cama de casal", preco: "130", popular: false },
  { nome: "Colchão Queen/King", descricao: "Cama queen/king", preco: "160", popular: false },
  { nome: "Poltrona", descricao: "Unitária", preco: "80", popular: false },
  { nome: "Cadeira Estofada", descricao: "Unitária", preco: "60", popular: false },
  { nome: "Tapete", descricao: "Por m²", preco: "50", popular: false },
  { nome: "Cortina", descricao: "Por m²", preco: "40", popular: false },
  { nome: "Carro (Interior)", descricao: "Limpeza completa", preco: "200", popular: false },
  { nome: "Impermeabilização", descricao: "Adicional (12 meses)", preco: "80", popular: false },
];

const pagamentos = [
  "Cartão de crédito (à vista ou parcelado)",
  "Débito",
  "PIX",
  "Dinheiro",
];

export function Precos() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="precos" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Preços Acessíveis
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Tabela de <span className="text-gradient-coral">Preços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Valores justos com qualidade profissional garantida. Invista na
            saúde da sua família!
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm">
            <CreditCard className="w-4 h-4" />
            Parcelamos em até 5x sem juros
          </div>
        </motion.div>

        {/* Price Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl border border-border overflow-hidden bg-card shadow-lg">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-primary text-primary-foreground p-4 font-semibold text-sm">
              <span>Serviço</span>
              <span className="text-center">Descrição</span>
              <span className="text-right">Preço</span>
            </div>

            {/* Table Rows */}
            {precos.map((item, index) => (
              <motion.div
                key={item.nome}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                className={`grid grid-cols-3 items-center p-4 border-b border-border/50 hover:bg-accent/5 transition-colors ${
                  item.popular ? "bg-accent/5 relative" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground text-sm">
                    {item.nome}
                  </span>
                  {item.popular && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold uppercase">
                      <Sparkles className="w-2.5 h-2.5" />
                      Popular
                    </span>
                  )}
                </div>
                <span className="text-center text-muted-foreground text-sm">
                  {item.descricao}
                </span>
                <div className="text-right">
                  <span className="text-xs text-muted-foreground">A partir de </span>
                  <span className="font-bold text-foreground">R${item.preco}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground text-center mt-3">
            *Valores sujeitos a alteração conforme avaliação prévia do estofado
          </p>

          {/* Payment Methods */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {pagamentos.map((metodo) => (
              <span
                key={metodo}
                className="px-3 py-1.5 rounded-full bg-secondary text-muted-foreground text-xs font-medium"
              >
                {metodo}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://wa.me/5521979511720?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-coral inline-flex items-center gap-2"
          >
            <span>Solicitar Orçamento</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
