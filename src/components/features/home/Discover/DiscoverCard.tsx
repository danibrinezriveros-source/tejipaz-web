import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export default function DiscoverCard({
  title,
  description,
  image,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="
        group
        relative
        overflow-hidden
        rounded-[2rem]
        aspect-[4/5]
      "
    >
      <Image
        src={image}
        alt={title}
        fill
        className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-8">

        <h3 className="text-3xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-8 text-white/85">
          {description}
        </p>

        <span
          className="
            mt-8
            inline-flex
            items-center
            gap-2
            text-sm
            font-semibold
            uppercase
            tracking-[0.25em]
            text-[#D9B56D]
            transition-all
            duration-500
            group-hover:translate-x-2
          "
        >
          Descubrir →
        </span>

      </div>
    </Link>
  );
}