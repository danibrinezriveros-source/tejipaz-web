import Image from "next/image";
export default function Cup() {
  return (
     <section className="bg-white py-20 lg:py-32"> 

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:gap-10 lg:gap-20 px-6 lg:px-8 lg:grid-cols-1 lg:grid-cols-1 lg:grid-cols-2">

        <div className="relative aspect-square overflow-hidden rounded-3xl">

  <Image
    src="/images/cafe/taza.jpg"
    alt="Una taza de café Tejipaz"
    fill
    className="object-cover transition duration-700 hover:scale-105"
  />

</div>

        <div>

          <span className="text-xs uppercase tracking-[0.35em] text-stone-500">
            La taza
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            El final del recorrido es el comienzo del recuerdo.
          </h2>

          <p className="mt-8 text-lg leading-8 lg:leading-9 text-stone-600">
            Cada taza reúne el trabajo de muchas personas, el paisaje,
            el tiempo y la dedicación de quienes creen que el café
            también puede conservar la memoria de un territorio.
          </p>

        </div>

      </div>

    </section>
  );
}