import { purpose } from "./purpose.data";

export default function Purpose() {
  return (
    <section className="bg-stone-950 py-32 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <span className="text-xs uppercase tracking-[0.35em] text-stone-400">
          Nuestro propósito
        </span>

        <h2 className="mt-6 max-w-3xl text-5xl font-light leading-tight">
          Más que producir café, queremos dejar una huella.
        </h2>

        <div className="mt-24 grid gap-16 lg:grid-cols-3">
          {purpose.map((item) => (
            <article key={item.number}>
              <span className="text-stone-500">
                {item.number}
              </span>

              <h3 className="mt-6 text-3xl font-light">
                {item.title}
              </h3>

              <p className="mt-6 leading-8 text-stone-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}