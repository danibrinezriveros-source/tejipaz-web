import Layout from "@/src/components/layout/Layout/Layout";

import {
  Landscape,
  Territory,
  History,
  Community,
  Visit,
} from "@/src/components/features/granada";

export default function GranadaPage() {
  return (
    <Layout>
      <Landscape />
      <Territory />
      <History />
      <Community />
      <Visit />
    </Layout>
  );
}