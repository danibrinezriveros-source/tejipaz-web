"use client";

import { useState } from "react";

import TimelineItem from "./TimelineItem";
import { timeline } from "./timeline.data";

export default function Timeline() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#D9B56D]">
          Nuestra historia
        </span>

        <h2 className="mt-7 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] text-[#3D2D18]">
          Cada año dejó una huella.
        </h2>

        <p className="mt-10 max-w-2xl text-lg leading-9 text-[#6E6257]">
          La historia de Tejipaz no se construyó de un día para otro.
          Cada paso fortaleció un proyecto que hoy une café, territorio y memoria.
        </p>

        <div className="mt-28 grid gap-20 lg:grid-cols-[1fr_500px]">

          {/* Timeline */}

          <div>

            {timeline.map((item, index) => (

              <div
                key={item.year}
                onMouseEnter={() => setActive(index)}
              >
                <TimelineItem
                  {...item}
                  last={index === timeline.length - 1}
                />
              </div>

            ))}

          </div>

          {/* Imagen */}

          <div className="sticky top-32 hidden h-fit lg:block">

            <div className="overflow-hidden rounded-3xl shadow-xl">

              <img
                key={timeline[active].image}
                src={timeline[active].image}
                alt={timeline[active].title}
                className="
                  aspect-[4/5]
                  w-full
                  object-cover
                  animate-fade
                "
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}