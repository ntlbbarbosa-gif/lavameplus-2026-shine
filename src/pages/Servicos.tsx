import { Layout } from "@/components/Layout";
import { Beneficios as BeneficiosSection } from "@/components/Beneficios";
import { ComoFunciona } from "@/components/ComoFunciona";
import { DiferencialExclusivo } from "@/components/DiferencialExclusivo";

const Servicos = () => {
  return (
    <Layout>
      <div className="pt-24">
        <ComoFunciona />
        <BeneficiosSection />
        <DiferencialExclusivo />
      </div>
    </Layout>
  );
};

export default Servicos;
