import FAQItem from "./FAQItem";
import { faq } from "./faq.data";

export default function FAQ() {
  return (
    <section className="bg-stone-50 py-32">

      <div className="mx-auto max-w-5xl px-6">

        <span className="text-xs uppercase tracking-[0.35em] text-stone-500">
          Preguntas frecuentes
        </span>

        <h2 className="mt-6 text-5xl font-light">
          Antes de visitarnos.
        </h2>

        <div className="mt-20 space-y-8">

          {faq.map((item) => (
            <FAQItem
              key={item.question}
              {...item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}