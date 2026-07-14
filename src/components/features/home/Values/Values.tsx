import { Container } from "@/src/components/ui";
import { spacing, typography } from "@/src/lib/design";

import ValuesCard from "./ValuesCard";
import { values } from "./values.data";

export default function Values() {
  return (
    <section className={`bg-white ${spacing.section}`}>
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className={typography.label}>
            NUESTRA ESENCIA
          </span>

          <h2 className={`${typography.h2} mt-6`}>
            Lo que permanece,
            incluso cuando el café termina.
          </h2>

          <p className={`${typography.body} mt-8`}>
            Más que una bebida, creemos en una forma de cuidar el territorio,
            fortalecer la comunidad y preservar la memoria.
          </p>

        </div>

        <div className="mt-24 grid gap-16 lg:grid-cols-3">

          {values.map((value) => (
            <ValuesCard
              key={value.number}
              {...value}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}