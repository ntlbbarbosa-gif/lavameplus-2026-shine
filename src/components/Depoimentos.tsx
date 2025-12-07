import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const depoimentos = [
  {
    id: 1,
    nome: "Daniel Villas Boas",
    inicial: "D",
    cor: "bg-blue-500",
    texto:
      "Eles são extremamente profissionais dedicados competentes e dispostos a tornar a nossa experiência incrível... eu adorei!",
    estrelas: 5,
    tempo: "Há 22 semanas",
    verificado: true,
  },
  {
    id: 2,
    nome: "Rhayane Vieira Pereira",
    inicial: "R",
    cor: "bg-pink-500",
    texto:
      "Trabalho excelente! Meu sofá parece novo e o cheirinho que ficou?! Maravilhoso, faço indicação de olhos fechados.",
    estrelas: 5,
    tempo: "Há 21 semanas",
    verificado: true,
  },
  {
    id: 3,
    nome: "Victor Hugo Gomes de Oliveira",
    inicial: "V",
    cor: "bg-purple-500",
    texto:
      "Excelente trabalho. O estofado do meu carro ficou como se fosse novo.",
    estrelas: 5,
    tempo: "Há 18 semanas",
    verificado: true,
  },
  {
    id: 4,
    nome: "Robson Maximo Souza",
    inicial: "R",
    cor: "bg-red-500",
    texto:
      "Equipe maravilhada. Vieram para fazer higienização das cadeiras e ficou tudo perfeito!",
    estrelas: 5,
    tempo: "Há 18 semanas",
    verificado: true,
  },
  {
    id: 5,
    nome: "Charles Pantoja",
    inicial: "C",
    cor: "bg-teal-500",
    texto:
      "Ótimo profissional.",
    estrelas: 5,
    tempo: "Há 18 semanas",
    verificado: true,
  },
  {
    id: 6,
    nome: "João Fernandes",
    inicial: "J",
    cor: "bg-amber-500",
    texto:
      "Excelente serviço! Muito satisfeito com o resultado.",
    estrelas: 5,
    tempo: "Há 21 semanas",
    verificado: true,
  },
];

export function Depoimentos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) => (prev - 1 + depoimentos.length) % depoimentos.length
    );
  };

  return (
    <section id="depoimentos" ref={ref} className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Avaliações do Google
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            O Que Dizem <span className="text-gradient-coral">Sobre Nós</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Depoimentos reais dos nossos clientes no Google. 100% verificados!
          </p>
          {/* Google Rating Badge */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-foreground">5.0</span>
            <span className="text-muted-foreground">no Google</span>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-8 md:p-12 shadow-xl">
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-16 h-16 text-accent/10" />

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(depoimentos[currentIndex].estrelas)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent text-accent"
                      />
                    )
                  )}
                </div>

                {/* Text */}
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl md:text-2xl text-foreground leading-relaxed mb-8"
                >
                  "{depoimentos[currentIndex].texto}"
                </motion.p>

                {/* Author */}
                <motion.div
                  key={`author-${currentIndex}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className={`w-14 h-14 rounded-full ${depoimentos[currentIndex].cor} flex items-center justify-center text-white font-bold text-xl`}>
                    {depoimentos[currentIndex].inicial}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-foreground">
                        {depoimentos[currentIndex].nome}
                      </h4>
                      {depoimentos[currentIndex].verificado && (
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {depoimentos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-accent w-8"
                        : "bg-border w-2 hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
