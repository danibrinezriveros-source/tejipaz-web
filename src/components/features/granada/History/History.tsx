import HistoryCard from "./HistoryCard";
import { history } from "./history.data";

export default function History() {
  return (
    <section className="bg-stone-50 py-32">

      <div className="mx-auto max-w-7xl px-6">

        <span className="uppercase tracking-[0.35em] text-stone-500">
          Historia
        </span>

        <h2 className="mt-6 text-5xl font-light">
          Un territorio marcado por la memoria.
        </h2>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {history.map((item) => (
            <HistoryCard
              key={item.title}
              {...item}
            />
          ))}
        </div>

      </div>

    </section>
  );
}