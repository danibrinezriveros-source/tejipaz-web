import Image from "next/image";

export default function Community() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-40">

      {/* Imagen */}

      <Image
        src="/images/granada/community.jpg"
        alt="Comunidad de Granada"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/45" />

      {/* Contenido */}

      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-5xl items-center justify-center px-6 text-center lg:px-8">

        <div>

          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#D9B56D]">
            Capítulo IV
          </span>

          <h2 className="mt-8 text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] text-white">
            La memoria vive
            <br />
            en las personas.
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-white/90">
            Agricultores, jóvenes, familias y visitantes hacen posible que
            Tejipaz sea mucho más que un destino. Son ellos quienes convierten
            cada taza de café en una historia compartida.
          </p>

        </div>

      </div>

    </section>
  );
}