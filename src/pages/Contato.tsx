import { Layout } from "@/components/Layout";
import { BairrosAtendidos } from "@/components/BairrosAtendidos";
import { FAQ } from "@/components/FAQ";
import { ChamadaFinal } from "@/components/ChamadaFinal";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

const Contato = () => {
  return (
    <Layout>
      <div className="pt-24">
        {/* Contact Info Section */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
                Fale Conosco
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Entre em <span className="text-gradient-coral">Contato</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Estamos prontos para atender você! Escolha o melhor canal
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
              {[
                {
                  icon: Phone,
                  titulo: "WhatsApp",
                  info: "(21) 97951-1720",
                  link: "https://wa.me/5521979511720?text=Olá! Gostaria de agendar um serviço.",
                },
                {
                  icon: Mail,
                  titulo: "E-mail",
                  info: "contato@lavameplus.com.br",
                  link: "mailto:contato@lavameplus.com.br",
                },
                {
                  icon: MapPin,
                  titulo: "Localização",
                  info: "Jacarepaguá - RJ e Região",
                  link: null,
                },
                {
                  icon: Clock,
                  titulo: "Horário",
                  info: "Seg a Sáb: 08h às 18h",
                  link: null,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.titulo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-premium p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.titulo}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-accent transition-colors text-sm"
                    >
                      {item.info}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{item.info}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <p className="text-muted-foreground mb-4">Siga-nos nas redes sociais</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://instagram.com/lavameplus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/5521979511720"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <BairrosAtendidos />
        <FAQ />
        <ChamadaFinal />
      </div>
    </Layout>
  );
};

export default Contato;
