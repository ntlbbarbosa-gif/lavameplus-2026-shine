import { Layout } from "@/components/Layout";
import { Precos as PrecosSection } from "@/components/Precos";
import { OPlus } from "@/components/OPlus";
import { Garantia } from "@/components/Garantia";

const Precos = () => {
  return (
    <Layout>
      <div className="pt-24">
        <PrecosSection />
        <OPlus />
        <Garantia />
      </div>
    </Layout>
  );
};

export default Precos;
