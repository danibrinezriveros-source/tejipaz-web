import { Container } from "@/src/components/ui";
import ImageCard from "@/src/components/ui/ImageCard";

export default function MemorySection() {
  return (
    <section className="bg-stone-50 py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-stone-500">
              Nuestra esencia
            </span>

            <h2 className="mt-6 text-4xl font-light text-stone-900 md:text-5xl">
              Más que café,
              <br />
              conservamos historias.
            </h2>

            <p className="mt-8 text-lg leading-8 text-stone-600">
              Tejipaz nace del deseo de conectar personas, territorio y tradición.
              Cada taza representa el trabajo de quienes cultivan el café y la
              memoria de una comunidad que continúa construyendo paz.
            </p>
          </div>

          <div className="flex justify-center">
            <ImageCard
  src="/images/home/memory.jpg"
  alt="Paisaje de Tejipaz"
/>
          </div>

        </div>
      </Container>
    </section>
  );
}