import Link from "next/link";

export default function Visit() {
  return (
    <section className="bg-white py-20 lg:py-32"> 
      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">

        <span className="uppercase tracking-[0.35em] text-stone-400">
          Visítanos
        </span>

        <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-light">
          Ahora conoces el territorio.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 lg:leading-9 text-stone-300">
          El siguiente paso es vivir la experiencia.
        </p>

        <Link
          href="/experiencias"
          className="mt-12 inline-flex rounded-full border border-white px-10 py-4 transition hover:bg-white hover:text-stone-900"
        >
          Ver experiencias
        </Link>

      </div>

    </section>
  );
}