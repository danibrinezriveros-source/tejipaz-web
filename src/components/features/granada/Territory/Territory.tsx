import Image from "next/image";

export default function Territory() {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">

        {/* Contenido */}

        <div className="max-w-xl">

          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#D9B56D]">
            El territorio
          </span>

          <h2 className="mt-7 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] text-[#3D2D18]">
            Aquí comienza
            <br />
            cada historia.
          </h2>

          <p className="mt-10 text-lg leading-9 text-[#6E6257]">
            Granada no es solamente un municipio.
            Es el lugar donde familias, caficultores y visitantes
            construyen nuevos recuerdos alrededor del café.
          </p>

        </div>

        {/* Imagen */}

        <div className="group relative min-h-[560px] overflow-hidden rounded-[32px]">

          <Image
            src="/images/granada/granada.jpg"
            alt="Montañas de Granada"
            fill

            priority
            sizes="(max-width:768px) 100vw, 50vw"
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-105
            "
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

          {/* Tarjeta */}

          <div
            className="
              absolute
              bottom-8
              right-8
              overflow-hidden
              rounded-2xl
              border
              border-white/20
              bg-white/10
              backdrop-blur-xl
            "
          >

            <div
              className="
                px-6
                py-5
                text-white

                translate-y-24
                opacity-0

                transition-all
                duration-700
                ease-out

                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >

              <span className="text-xs uppercase tracking-[0.35em] text-white/70">
                Granada · Antioquia
              </span>

              <h3 className="mt-3 text-2xl font-bold">
                2.100 msnm
              </h3>

              <p className="mt-2 max-w-[220px] text-sm leading-6 text-white/80">
                Montañas cafeteras, memoria viva y un territorio que sigue
                escribiendo su historia.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}