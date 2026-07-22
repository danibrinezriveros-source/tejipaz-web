export default function Hero() {
  return (
    <section
      className="
        relative
        flex
        min-h-[70vh]
        items-center
        justify-center
        bg-[url('/images/contacto/contact-hero.jpg')]
        bg-cover
        bg-center
        text-white
      "
    >
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center">
        <span className="text-xs uppercase tracking-[0.35em] text-stone-300">
          Contacto
        </span>

        <h1 className="mt-6 text-6xl font-light md:text-8xl">
          Conversemos.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-stone-200 lg:leading-9">
          Si quieres vivir la experiencia Tejipaz, estaremos felices de ayudarte.
        </p>
      </div>
    </section>
  );
}