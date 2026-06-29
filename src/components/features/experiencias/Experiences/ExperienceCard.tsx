type Props = {
  title: string;
  description: string;
};

export default function ExperienceCard({
  title,
  description,
}: Props) {
  return (
    <article className="rounded-3xl border border-stone-200 p-10">

      <div className="aspect-[4/3] rounded-2xl bg-stone-200" />

      <h3 className="mt-8 text-3xl font-light">
        {title}
      </h3>

      <p className="mt-6 leading-8 text-stone-600">
        {description}
      </p>

    </article>
  );
}