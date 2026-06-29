import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-stone-950 py-32 text-white">

      <div className="mx-auto max-w-4xl px-6 text-center">

        <h2 className="text-5xl font-light leading-tight">
          El viaje continúa.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-stone-300">
          Descubre cómo Tejipaz transforma el café en una experiencia
          que permanece en la memoria.
        </p>

        <Link
          href="/contacto"
          className="mt-12 inline-flex rounded-full bg-white px-8 py-4 text-stone-900 transition hover:bg-stone-200"
        >
          Contáctanos
        </Link>

      </div>

    </section>
  );
}