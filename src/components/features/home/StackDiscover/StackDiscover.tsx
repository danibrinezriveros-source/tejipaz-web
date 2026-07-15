import StackCard from "./StackCard";
import { stack } from "./stack.data";

export default function StackDiscover() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#D9B56D]">
            Descubre TEJIPAZ
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-[#3D2D18]">
            Mucho más que una taza.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-[#6E6257]">
            Cada tarjeta revela una nueva forma de conocer TEJIPAZ.
          </p>

        </div>

        <div className="relative mx-auto mt-24 h-[620px] max-w-4xl">

          {stack.map((card, index) => (
            <StackCard
              key={card.id}
              {...card}
              index={index}
            />
          ))}

        </div>

      </div>

    </section>
  );
}