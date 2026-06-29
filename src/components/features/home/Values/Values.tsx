import Container from "@/src/components/ui/Container";
import Section from "@/src/components/ui/Section";

import { values } from "./values.data";
import ValuesCard from "./ValuesCard";

export default function Values() {
  return (
    <Section className="bg-stone-50">
      <Container>
        <div className="mb-16 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.35em] text-stone-500">
            Nuestra esencia
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light text-stone-900">
            Lo que sostiene a Tejipaz.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {values.map((value) => (
            <ValuesCard key={value.number} {...value} />
          ))}
        </div>
      </Container>
    </Section>
  );
}