import { Hero } from "./Hero";
import { MemorySection } from "./MemorySection";
import Values from "./Values";
import CTA from "../cafe/CTA";

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