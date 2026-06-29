import Image from "next/image";

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

      {/* Patrón de identidad */}
      <div className="relative h-20 w-full overflow-hidden">
        <Image
          src="/branding/pattern/chiva-top.png"
          alt="Patrón inspirado en la chiva de Tejipaz"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="mx-auto flex min-h-[360px] max-w-7xl flex-col justify-center px-6 py-20 lg:px-8">

        <span className="mb-5 text-xs uppercase tracking-[0.35em] text-stone-500">
          {eyebrow}
        </span>

        <h1 className="max-w-4xl text-4xl font-light leading-tight text-stone-900 lg:text-6xl">
          {title}
        </h1>

        <div className="mt-8 h-px w-24 bg-stone-300" />

        <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600">
          {description}
        </p>

      </div>

    </section>
  );
}