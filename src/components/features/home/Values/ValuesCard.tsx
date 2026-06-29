interface ValuesCardProps {
  number: string;
  title: string;
  description: string;
}

export default function ValuesCard({
  number,
  title,
  description,
}: ValuesCardProps) {
  return (
    <article className="border-l-2 border-stone-300 pl-6">
      <span className="text-sm tracking-[0.3em] text-stone-400">
        {number}
      </span>

      <h3 className="mt-3 text-2xl font-light text-stone-900">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-stone-600">
        {description}
      </p>
    </article>
  );
}