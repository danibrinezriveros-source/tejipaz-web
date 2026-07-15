import Image from "next/image";
import { Container } from "@/src/components/ui";
import { spacing, typography } from "@/src/lib/design";

export default function MemorySection() {
  return (
    <section className={`bg-stone-50 ${spacing.section}`}>
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/home/memory.jpg"
              alt="Tejipaz - Café y memoria"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>

          <div>

            <span className={`${typography.label} text-stone-500`}>
              DESDE GRANADA · ANTIOQUIA
            </span>

            <h2 className={`${typography.display} mt-6 max-w-xl`}>
              Todo comienza con una taza,
              <br   />
              pero nunca termina ahí.
            </h2>

            <p className={`${typography.body} mt-8 max-w-xl text-stone-600`}>
              Tejipaz nació para conectar personas, territorio y memoria.
              Cada café representa el trabajo de familias, la riqueza de
              Granada y el deseo de compartir aquello que permanece
              cuando el tiempo pasa.
            </p>

            <button
              className="
                mt-12
                rounded-full
                border
                border-stone-900
                px-8
                py-4
                transition-all
                duration-300
                hover:bg-stone-900
                hover:text-white
              "
            >
              Conocer nuestra historia
            </button>

          </div>

        </div>
      </Container>
    </section>
  );
}