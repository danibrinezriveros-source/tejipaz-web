import Image from "next/image";

type Props = {
  title: string;
  place: string;
  description: string;
  image: string;
  reverse?: boolean;
};

export default function HistoryCard({
  title,
  place,
  description,
  image,
  reverse = false,
}: Props) {
  return (
    <article
      className={`group grid items-center gap-20 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Imagen */}

      <div className="relative aspect-[4/5] overflow-hidden rounded-[32px]">

        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:768px) 100vw, 50vw"
          className="
            object-cover
            transition-all
            duration-700
            ease-out
            group-hover:scale-105
          "
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Etiqueta */}

        <div
          className="
            absolute
            bottom-6
            left-6

            translate-y-8
            opacity-0

            rounded-xl
            border
            border-white/20
            bg-white/10
            px-5
            py-3

            text-white
            backdrop-blur-xl

            transition-all
            duration-700
            ease-out

            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <span className="text-xs uppercase tracking-[0.35em] text-white/70">
            {place}
          </span>
        </div>

      </div>

      {/* Texto */}

      <div>

        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#D9B56D]">
          Capítulo
        </span>

        <h3
          className="
            mt-5
            text-4xl
            lg:text-5xl
            font-bold
            leading-tight
            text-[#3D2D18]

            transition-colors
            duration-500

            group-hover:text-[#D9B56D]
          "
        >
          {title}
        </h3>

        <p className="mt-8 text-lg leading-9 text-[#6E6257]">
          {description}
        </p>

      </div>

    </article>
  );
}