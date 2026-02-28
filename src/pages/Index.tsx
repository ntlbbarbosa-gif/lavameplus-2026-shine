import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemasSolucoes } from "@/components/ProblemasSolucoes";
import { ComoFunciona } from "@/components/ComoFunciona";
import { Autoridade } from "@/components/Autoridade";
import { DiferencialExclusivo } from "@/components/DiferencialExclusivo";
import { Precos } from "@/components/Precos";
import { OPlus } from "@/components/OPlus";
import { AntesDepois } from "@/components/AntesDepois";
import { Depoimentos } from "@/components/Depoimentos";
import { FAQ } from "@/components/FAQ";
import { Beneficios } from "@/components/Beneficios";
import { Garantia } from "@/components/Garantia";
import { BairrosAtendidos } from "@/components/BairrosAtendidos";
import { ChamadaFinal } from "@/components/ChamadaFinal";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProblemasSolucoes />
        <ComoFunciona />
        <Autoridade />
        <DiferencialExclusivo />
        <Precos />
        <OPlus />
        <AntesDepois />
        <Depoimentos />
        <FAQ />
        <Beneficios />
        <Garantia />
        <BairrosAtendidos />
        <ChamadaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
