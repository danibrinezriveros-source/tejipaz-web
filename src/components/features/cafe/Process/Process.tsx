import ProcessCard from "./ProcessCard";
import { process } from "./process.data";

export default function Process() {
  return (
    <section className="bg-stone-50 py-20 lg:py-20 lg:py-32">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <span className="uppercase tracking-[0.35em] text-stone-500">
          El proceso
        </span>

        <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-light">
          Cuatro momentos.
          Una sola historia.
        </h2>

        <div className="mt-20 grid gap-8 md:grid-cols-1 lg:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">

          {process.map((item)=>(

            <ProcessCard
              key={item.number}
              {...item}
            />

          ))}

        </div>

      </div>

    </section>
  );
}