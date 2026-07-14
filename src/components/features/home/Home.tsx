import { Hero } from "./Hero";
import { MemorySection } from "./MemorySection";
import Values from "./Values";

export default function Home() {
  return (
    <>
      <Hero />

      <MemorySection />

        <Values />

        <CTA />
    </>
  );
}