import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] lg:min-h-screen items-center justify-center overflow-hidden">

      <Image
        src="/images/cafe/hero.jpg"
        alt="Café Tejipaz"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 max-w-5xl px-6 text-center text-white lg:px-8">

        <span className="text-sm
uppercase
tracking-[0.28em]
font-medium
text-[#3D2D18] text-stone-200">
          Capítulo III
        </span>

        <h1 className="mt-8 text-6xl font-light leading-tight md:text-8xl">
          El café.
        </h1>

        <p className="mx-auto mt-10 max-w-3xl text-xl leading-8 lg:leading-9 text-stone-100">
          Cada taza comienza mucho antes de llegar a tus manos.
          Comienza en una historia.
        </p>

      </div>

    </section>
  );
}