type Props = {
  number: string;
  title: string;
  description: string;
};

export default function ProcessCard({
  number,
  title,
  description,
}: Props) {
  return (
    <article
      className="
        group
        relative
        flex
        flex-col
        items-center
        text-center
        px-6
        py-10
        transition-all
        duration-500
        ease-out
         
      "
    >
      {/* Nodo */}

      <div
        className="
          h-5
          w-5
          rounded-full
          border-2
          border-stone-300
          bg-white
          transition-all
          duration-700
          group-hover:scale-150
          group-hover:border-[#D9B56D]
          group-hover:bg-[#D9B56D]
        "
      />

      {/* Número */}

      <span
        className="
          mt-5
          text-6xl
          font-light
          text-stone-200
          transition-all
          duration-700
          group-hover:text-[#D9B56D]
        "
      >
        {number}
      </span>

      {/* Título */}

      <h3
        className="
          mt-3
          text-2xl
          font-light
          text-stone-900
          transition-all
          duration-500
          group-hover:text-[#D9B56D]
          group-hover:tracking-wider
        "
      >
        {title}
      </h3>

      {/* Texto */}

      <p
        className="
          mt-5
          max-w-[260px]
          leading-8
          text-stone-600
          group-hover:text-[#D9B56D]
        "
      >
        {description}
      </p>

      {/* Línea */}

      <div
        className="
          mt-8
          h-[2px]
          w-0
          bg-[#D9B56D]
          transition-all
          duration-500
          group-hover:w-24
        "
      />
    </article>
  );
}