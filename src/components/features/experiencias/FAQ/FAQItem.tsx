type Props = {
  question: string;
  answer: string;
};

export default function FAQItem({
  question,
  answer,
}: Props) {
  return (
    <article className="rounded-3xl border border-stone-200 p-8">

      <h3 className="text-2xl font-light">
        {question}
      </h3>

      <p className="mt-6 leading-8 text-stone-600">
        {answer}
      </p>

    </article>
  );
}