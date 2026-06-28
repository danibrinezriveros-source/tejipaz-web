import Layout from "@/src/components/layout/Layout/Layout";

import Manifesto from "@/src/components/features/nosotros/Manifesto";
import Timeline from "@/src/components/features/nosotros/Timeline";
import Purpose from "@/src/components/features/nosotros/Purpose";

export default function NosotrosPage() {
  return (
    <Layout>
      <Manifesto />
     
      <Timeline />
      <Purpose />
    </Layout>
  );
}