import { Hero } from "./Hero";
import { MemorySection } from "./MemorySection";
import Values from "./Values";
import CTA from "../cafe/CTA";

import FloatingPromo from "@/src/components/shared/FloatingPromo";
export default function Home() {
  return (
    <>
      <Hero />
       

       
      <MemorySection />
      <FloatingPromo
    icon="☕"
    title="Conoce nuestros cafés"
    href="/cafe"
/>


        <Values />
        

        <CTA />
    </>
  );
}