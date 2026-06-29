import ExperienceCard from "./ExperienceCard";
import { experiences } from "./experience.data";

export default function Experiences() {
  return (
    <section className="bg-stone-50 py-32">

      <div className="mx-auto max-w-7xl px-6">

        <span className="text-xs uppercase tracking-[0.35em] text-stone-500">
          Experiencias
        </span>

        <h2 className="mt-6 text-5xl font-light">
          Cada recorrido deja un recuerdo.
        </h2>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {experiences.map((item) => (
            <ExperienceCard
              key={item.title}
              {...item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}