type Props = {
  title: string;
  subtitle: string;
};

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <section className="border-b border-stone-200 bg-stone-100">
      <div className="mx-auto flex h-72 max-w-7xl flex-col justify-center px-6">
        <span className="mb-3 uppercase tracking-[0.35em] text-stone-500">
          Tejipaz
        </span>

        <h1 className="text-5xl font-light text-stone-900">
          {title}
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-stone-600">
          {subtitle}
        </p>
      </div>
    </section>
  );
}