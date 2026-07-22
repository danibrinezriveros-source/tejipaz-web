import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-white py-20 lg:py-32"> 

      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">

        <span className="text-xs uppercase tracking-[0.35em] text-stone-400">
          Continúa el recorrido
        </span>

        <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
          Ahora vive la experiencia.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 lg:leading-9 text-stone-300">
          Descubre los recorridos que conectan el café con las historias
          de Granada y su comunidad.
        </p>

        <Link
          href="/experiencias"
         className="
                mt-12
                inline-flex
                items-center
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
          Explorar Granada
        </Link>

      </div>

    </section>
  );
}