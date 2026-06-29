export default function HeroContent() {
  return (
    <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 lg:px-8 text-center text-white">

      <span className="mb-6 text-sm uppercase tracking-[0.4em] text-stone-300">
        Granada · Antioquia
      </span>

      <h1 className="max-w-4xl text-3xl md:text-4xl lg:text-5xl font-light leading-tight md:text-7xl">
        Donde el café conserva la memoria.
      </h1>

      <p className="mt-8 max-w-xl text-lg text-stone-200">
        Descubre un territorio donde el café, la comunidad y las historias
        construyen una experiencia inolvidable.
      </p>

      <button
  className="
    mt-12
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
</button>

    </div>
  );
}