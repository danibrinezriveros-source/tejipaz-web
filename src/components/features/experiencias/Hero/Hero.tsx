export default function Hero() {
  return (
    <section className="flex min-h-[90vh] lg:min-h-screen items-center justify-center bg-stone-950 text-white">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
        <span className="text-xs uppercase tracking-[0.35em] text-stone-400">
          Capítulo V
        </span>

        <h1 className="mt-6 text-6xl font-light md:text-8xl">
          Vive el recuerdo.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 lg:leading-9 text-stone-300">
          Cada experiencia es una invitación a recorrer Granada,
          conocer su gente y descubrir por qué el café también
          puede convertirse en memoria.
        </p>
      </div>
    </section>
  );
}