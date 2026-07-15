import Link from "next/link";

export default function Visit() {
  return (
    <section className="bg-[#FCFBF8] py-28 lg:py-40">

      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#D9B56D]">
          El siguiente capítulo
        </span>

        <h2 className="mt-7 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] text-[#3D2D18]">
          Ahora conoces
          <br />
          el territorio.
        </h2>

        <p className="mx-auto mt-10 max-w-2xl text-lg leading-9 text-[#6E6257]">
          Descubriste el lugar donde nace esta historia.
          Ahora es momento de recorrerla, vivirla y compartir un café
          con quienes la hacen posible.
        </p>

        <Link
          href="/experiencias"
          className="
            group
            mt-14
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-[#3D2D18]
            px-10
            py-5
            text-white
            transition-all
            duration-500
            ease-out
            hover:-translate-y-1
            hover:bg-[#D9B56D]
          "
        >
          <span>Descubrir experiencias</span>

          <span
            className="
              transition-transform
              duration-500
              group-hover:translate-x-1
            "
          >
            →
          </span>

        </Link>

        {/* Separador */}

        <div className="mx-auto mt-24 h-px w-40 bg-[#D9B56D]/40" />

        {/* Próximo capítulo */}

        <div className="mt-10">

          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#D9B56D]">
            Capítulo V
          </p>

          <h3 className="mt-4 text-3xl font-bold text-[#3D2D18]">
            Experiencias
          </h3>

          <p className="mt-4 text-[#6E6257]">
            El territorio se comprende mejor cuando se vive.
          </p>

        </div>

      </div>

    </section>
  );
}