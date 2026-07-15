import DiscoverCard from "./DiscoverCard";
import { discover } from "./discover.data";

export default function Discover() {
  return (
    <section className="bg-[#FCFBF8] py-24 lg:py-36">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-3xl">

          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#D9B56D]">
            Descubre TEJIPAZ
          </span>

          <h2 className="mt-7 text-4xl lg:text-6xl font-bold leading-[1.08] text-[#3D2D18]">
            Hay muchas formas de vivir esta historia.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-[#6E6257]">
            Algunos llegan por un café. Otros descubren experiencias,
            productos del territorio y una comunidad que sigue creciendo.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {discover.map((item) => (
            <DiscoverCard key={item.title} {...item} />
          ))}

        </div>

      </div>

    </section>
  );
}