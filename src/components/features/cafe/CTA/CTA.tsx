import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-stone-900 py-32 text-white">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <span className="text-xs uppercase tracking-[0.35em] text-stone-400">
          Continúa el recorrido
        </span>

        <h2 className="mt-6 text-5xl font-light leading-tight">
          Ahora vive la experiencia.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-stone-300">
          Descubre los recorridos que conectan el café con las historias
          de Granada y su comunidad.
        </p>

        <Link
          href="/experiencias"
          className="mt-12 inline-flex rounded-full border border-white px-8 py-4 transition hover:bg-white hover:text-stone-900"
        >
          Explorar experiencias
        </Link>

      </div>

    </section>
  );
}