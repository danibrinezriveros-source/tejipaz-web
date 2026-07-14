import { purpose } from "./purpose.data";

export default function Purpose() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <span className="text-xs uppercase tracking-[0.35em] text-stone-400">
          Nuestro propósito
        </span>

        <h2 className="mt-6 max-w-3xl text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
          Más que producir café, queremos dejar una huella.
        </h2>

        <div className="mt-24 grid gap-16 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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