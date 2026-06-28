type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="border-b border-stone-200 bg-stone-50">
      <div className="mx-auto flex min-h-[420px] max-w-7xl flex-col justify-center px-6 py-24">
        <span className="mb-4 text-xs uppercase tracking-[0.35em] text-stone-500">
          {eyebrow}
        </span>

        <h1 className="max-w-4xl text-5xl font-light leading-tight text-stone-900 md:text-6xl">
          {title}
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600">
          {description}
        </p>
      </div>
    </section>
  );
}