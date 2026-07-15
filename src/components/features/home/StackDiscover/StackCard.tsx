type Props = {
  title: string;
  description: string;
  emoji: string;
  color: string;
  index: number;
};

export default function StackCard({
  title,
  description,
  emoji,
  color,
  index,
}: Props) {
  return (
    <article
      className="
        absolute
        left-1/2
        w-full
        max-w-3xl
        -translate-x-1/2
        rounded-[36px]
        shadow-2xl
        transition-all
        duration-700
      "
      style={{
        top: `${index * 22}px`,
        backgroundColor: color,
        zIndex: 20 - index,
      }}
    >
      <div className="flex min-h-[480px] flex-col justify-between p-14">

        <div className="text-7xl">
          {emoji}
        </div>

        <div>

          <h3 className="text-5xl font-bold text-[#3D2D18]">
            {title}
          </h3>

          <p className="mt-8 max-w-xl text-lg leading-9 text-[#6E6257]">
            {description}
          </p>

          <button
            className="
              mt-12
              rounded-full
              border
              border-[#3D2D18]
              px-8
              py-4
              font-semibold
              transition
              hover:bg-[#3D2D18]
              hover:text-white
            "
          >
            Descubrir →
          </button>

        </div>

      </div>
    </article>
  );
}