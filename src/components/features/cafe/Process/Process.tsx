"use client";

import { useState } from "react";

import Timeline from "./Timeline";
import ProcessCard from "./ProcessCard";
import { process } from "./process.data";

export default function Process() {

  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 lg:py-32">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="text-center">

          <span className="uppercase tracking-[0.35em] text-stone-500">
            El proceso
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl lg:text-[2.8rem] font-light">
            Cuatro momentos.
            <br />
            Una sola historia.
          </h2>

        </div>

        <div className="relative mt-24">

          <Timeline
            activeStep={activeStep}
            totalSteps={process.length}
          />

          <div className="relative grid gap-14 md:grid-cols-2 xl:grid-cols-4">

            {process.map((item, index) => (

              <div
                key={item.number}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <ProcessCard {...item} />
              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}