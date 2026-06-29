import HistoryCard from "./HistoryCard";
import { history } from "./history.data";

export default function History() {
  return (
    <section className="bg-white py-20 lg:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.35em] text-stone-500">
            Capítulo III
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            Un territorio escrito por las montañas y las personas.
          </h2>

          <p className="mt-8 text-lg leading-8 lg:leading-9 text-stone-600">
            Cada rincón de Granada conserva historias que siguen vivas
            gracias a quienes han trabajado esta tierra generación tras
            generación.
          </p>
        </div>

        <div className="mt-28 space-y-32">
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