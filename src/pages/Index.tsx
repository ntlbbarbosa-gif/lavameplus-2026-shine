import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { ProblemasSolucoes } from "@/components/ProblemasSolucoes";
import { ComoFunciona } from "@/components/ComoFunciona";
import { Autoridade } from "@/components/Autoridade";
import { DiferencialExclusivo } from "@/components/DiferencialExclusivo";
import { ChamadaFinal } from "@/components/ChamadaFinal";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ProblemasSolucoes />
      <ComoFunciona />
      <Autoridade />
      <DiferencialExclusivo />
      <ChamadaFinal />
    </Layout>
  );
};

export default Index;
