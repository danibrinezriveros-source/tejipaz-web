import Image from "next/image";

export default function Origin() {
  return (
    <section className="bg-white py-20 lg:py-32">

      <div className="mx-auto grid max-w-7xl gap-10 lg:gap-20 px-6 lg:px-8 lg:grid-cols-2">

        <div className="flex flex-col justify-center">

          <span className="uppercase tracking-[0.35em] text-stone-500">
            Origen
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl lg:text-[2.8rem] font-light leading-tight">
            Todo nace en la montaña.
          </h2>

          <p className="mt-8 text-lg leading-8 lg:leading-9 text-stone-600">
            Antes del aroma, antes del tostado y antes de la taza,
            existe una tierra que da sentido a todo el proceso.
          </p>

        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">

          <Image
            src="/images/cafe/origen.jpg"
            alt="Cafetales de Tejipaz"
            fill
            className="object-cover transition duration-700 hover:scale-105"
          />

        </div>

      </div>

    </section>
  );
}