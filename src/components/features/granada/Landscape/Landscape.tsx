import Image from "next/image";

export default function Landscape() {
  return (
    <section className="relative flex min-h-[90vh] lg:min-h-screen items-center justify-center overflow-hidden">

      {/* Imagen de fondo */}

      <Image
        src="/images/granada/hero.jpg"
        alt="Paisaje de Granada Antioquia"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/60" />

      {/* Contenido */}

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white lg:px-8">

        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#D9B56D]">
          Capítulo II
        </span>

        <h1 className="mt-8 text-5xl font-bold leading-none md:text-7xl lg:text-[7rem]">
          Granada.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-white/90 md:text-2xl">
          Donde la memoria encontró un lugar para florecer.
        </p>

      </div>

      {/* Degradado inferior */}

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

    </section>
  );
}