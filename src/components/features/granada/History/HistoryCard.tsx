type Props = {
  title: string;
  description: string;
};

export default function HistoryCard({
  title,
  description,
}: Props) {
  return (
    <article className="rounded-3xl border border-stone-200 p-10">

      <h3 className="text-3xl font-light">
        {title}
      </h3>

      <p className="mt-6 leading-8 text-stone-600">
        {description}
      </p>

    </article>
  );
}