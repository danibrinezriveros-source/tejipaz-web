import { spacing, typography } from "@/src/lib/design";

export default function HeroContent() {
  return (
    <div
      className={`relative z-10 flex h-full flex-col items-center justify-center text-center text-white ${spacing.container}`}
    >
      <span className={`${typography.label} mb-6 text-stone-300`}>
        Granada · Antioquia
      </span>

      <h1 className={`${typography.hero} max-w-4xl`}>
        Donde el café conserva la memoria.
      </h1>

      <p className={`mt-8 max-w-xl ${typography.body} text-stone-200`}>
        Descubre un territorio donde el café, la comunidad y las historias
        construyen una experiencia inolvidable.
      </p>

      <a
  href="https://maps.app.goo.gl/tckSgHVyCWyqL1Zh7"
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-12
    inline-flex
    rounded-full
    border
    border-white
    px-10
    py-4
    font-medium
    tracking-wide
    transition-all
    duration-300
    hover:bg-white
    hover:text-stone-900
  "
>
  Descubrir Tejipaz
</a>
    </div>
  );
}