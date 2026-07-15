type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
  last?: boolean;
};

export default function TimelineItem({
  year,
  title,
  description,
  last = false,
}: TimelineItemProps) {
  return (
    <article className="group relative flex gap-10">

      {/* Línea */}

      <div className="flex w-28 flex-col items-center">

        <div
          className="
            h-5
            w-5
            rounded-full
            border-2
            border-[#D9B56D]
            bg-white
            transition-all
            duration-500
            group-hover:scale-125
            group-hover:bg-[#D9B56D]
          "
        />

        {!last && (
          <div className="mt-3 h-full w-[2px] bg-[#E8D3A5]" />
        )}

      </div>

      {/* Contenido */}

      <div className="pb-24">

        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#D9B56D]">
          {year}
        </span>

        <h3
          className="
            mt-4
            text-3xl
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

        <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[#6E6257]">
          {description}
        </p>

      </div>

    </article>
  );
}