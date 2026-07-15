import HistoryCard from "./HistoryCard";
import { history } from "./history.data";

export default function History() {
  return (
    <section className="bg-[#FCFBF8] py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-4xl">

          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#D9B56D]">
            Capítulo III
          </span>

          <h2 className="mt-7 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] text-[#3D2D18]">
            Un territorio escrito por
            <br />
            las montañas y las personas.
          </h2>

          <p className="mt-10 max-w-2xl text-lg leading-9 text-[#6E6257]">
            Cada rincón de Granada conserva historias que siguen vivas gracias a
            quienes han trabajado esta tierra generación tras generación.
          </p>

        </div>

        <div className="mt-32 space-y-40">

          {history.map((item, index) => (
            <HistoryCard
              key={item.title}
              {...item}
              reverse={index % 2 !== 0}
            />
          ))}

        </div>

      </div>
    </section>
  );
}