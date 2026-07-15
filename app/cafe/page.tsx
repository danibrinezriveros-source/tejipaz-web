import Layout from "@/src/components/layout/Layout/Layout";

import {
  Hero,
  Origin,
  Process,
  Cup,
  CTA,
  Catalog,
} from "@/src/components/features/cafe";

export default function CafePage() {
  return (
    <Layout>
      <Hero />
      <Origin />
      <Process />
      <Catalog />
      <Cup />
      <CTA />
      
    </Layout>
  );
}