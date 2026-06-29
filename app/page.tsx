import { Layout } from "@/src/components/layout/Layout";
import { Hero } from "@/src/components/features/home/Hero";
import { MemorySection } from "@/src/components/features/home/MemorySection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <MemorySection />
    </Layout>
  );
}