import Layout from "@/src/components/layout/Layout/Layout";

import {
  Hero,
  Journey,
  Experiences,
  Reservation,
  FAQ,
  CTA,
} from "@/src/components/features/experiencias";

export default function ExperienciasPage() {
  return (
    <Layout>
      <Hero />
      <Journey />
      <Experiences />
      <Reservation />
      <FAQ />
      <CTA />
    </Layout>
  );
}