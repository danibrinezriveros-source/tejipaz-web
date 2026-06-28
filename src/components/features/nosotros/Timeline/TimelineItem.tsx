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
    <div className="relative flex gap-8">

      <div className="flex w-28 flex-col items-center">

        <div className="h-4 w-4 rounded-full bg-stone-900" />

        {!last && (
          <div className="mt-2 h-full w-px bg-stone-300" />
        )}

      </div>

      <div className="pb-20">

        <span className="text-sm uppercase tracking-[0.3em] text-stone-500">
          {year}
        </span>

        <h3 className="mt-3 text-3xl font-light text-stone-900">
          {title}
        </h3>

        <p className="mt-4 max-w-2xl leading-8 text-stone-600">
          {description}
        </p>

      </div>

    </div>
  );
}