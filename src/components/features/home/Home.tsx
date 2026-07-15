import { Hero } from "./Hero";
import { MemorySection } from "./MemorySection";
import Values from "./Values";
import CTA from "../cafe/CTA";
import StackDiscover from "./StackDiscover";
import Bridge from "@/src/components/shared/Bridge";
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