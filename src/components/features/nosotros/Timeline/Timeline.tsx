import TimelineItem from "./TimelineItem";
import { timeline } from "./timeline.data";

export default function Timeline() {
  return (
    <section className="bg-white py-20 lg:py-20 lg:py-32">

      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        <span className="uppercase tracking-[0.35em] text-stone-500">
          Nuestra historia
        </span>

        <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-light text-stone-900">
          Cada año dejó una huella.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600">
          La historia de Tejipaz no se construyó de un día para otro.
          Cada paso fortaleció un proyecto que hoy une café, territorio y memoria.
        </p>

        <div className="mt-24">

          {timeline.map((item, index) => (
            <TimelineItem
              key={item.year}
              {...item}
              last={index === timeline.length - 1}
            />
          ))}

        </div>

      </div>

    </section>
  );
}