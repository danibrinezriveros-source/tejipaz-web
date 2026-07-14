type Props = {
  number: string;
  title: string;
  description: string;
};

export default function ValuesCard({
  number,
  title,
  description,
}: Props) {
  return (
    <article className="group">

      <span className="text-5xl font-light text-[#D9B56D] transition-all duration-300 group-hover:translate-x-1">
        {number}
      </span>

      <h3 className="mt-8 text-3xl font-light text-stone-900">
        {title}
      </h3>

      <div className="mt-6 h-px w-16 bg-[#D9B56D]" />

      <p className="mt-8 max-w-sm text-lg leading-8 text-stone-600">
        {description}
      </p>

    </article>
  );
}