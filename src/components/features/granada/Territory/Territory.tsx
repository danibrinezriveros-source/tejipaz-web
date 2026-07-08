import Image from "next/image";
export default function Territory() {
  return (
    <section className="bg-white py-20 lg:py-20 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:gap-20 px-6 lg:px-8 lg:grid-cols-1 lg:grid-cols-1 lg:grid-cols-2">

        <div>

          <span className="uppercase tracking-[0.35em] text-stone-500">
            El territorio
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            Aquí comienza cada historia.
          </h2>

          <p className="mt-8 text-lg leading-8 lg:leading-9 text-stone-600">
            Granada no es solamente un municipio.
            Es el lugar donde familias, caficultores y visitantes
            construyen nuevos recuerdos alrededor del café.
          </p>
          

        </div>

        <div className="relative min-h-[500px] overflow-hidden rounded-3xl shadow-xl">

          <Image
            src= "/images/granada/granada.jpg"
            alt="montañas de granada"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width:768px) 100vw, 50vw"
            priority
          />

        </div>
        

      </div>
    </section>
  );
}