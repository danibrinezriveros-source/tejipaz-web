export default function Hero() {
  return (
    <section
      className="
        relative
        flex
        min-h-[90vh]
        lg:min-h-screen
        items-center
        justify-center
        bg-cover
        bg-center
        text-white
      "
      style={{
        backgroundImage: "url('/images/experiencias/hero-experiencias.jpg')",
      }}
    >
      {/* Overlay para mejorar la lectura */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Contenido */}
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8 text-center">
        <span className="text-xs uppercase tracking-[0.35em] text-stone-300">
          Capítulo V
        </span>

        <h1 className="mt-6 text-6xl font-light md:text-8xl">
          Vive el recuerdo.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 lg:leading-9 text-stone-200">
          Cada experiencia es una invitación a recorrer Granada,
          conocer su gente y descubrir por qué el café también
          puede convertirse en memoria.
        </p>
      </div>
    </section>
  );
}