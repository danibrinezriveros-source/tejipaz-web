type Props = {
  title: string;
  description: string;
  reverse?: boolean;
};

export default function HistoryCard({
  title,
  description,
  reverse = false,
}: Props) {
  return (
    <article
      className={`grid items-center gap-16 lg:grid-cols-1 lg:grid-cols-1 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="aspect-[4/5] rounded-3xl bg-stone-200" />

      <div>

        <h3 className="text-4xl font-light">
          {title}
        </h3>

        <p className="mt-8 text-lg leading-8 lg:leading-9 text-stone-600">
          {description}
        </p>

      </div>
    </article>
  );
}