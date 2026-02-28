import { Layout } from "@/components/Layout";
import { Depoimentos as DepoimentosSection } from "@/components/Depoimentos";

const Depoimentos = () => {
  return (
    <Layout>
      <div className="pt-24">
        <DepoimentosSection />
      </div>
    </Layout>
  );
};

export default Depoimentos;
