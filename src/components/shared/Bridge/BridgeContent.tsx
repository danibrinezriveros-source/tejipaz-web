import Link from "next/link";

type Props = {
  tag: string;
  title: string;
  description: string;
  button: string;
  href: string;
};

export default function BridgeContent({
  tag,
  title,
  description,
  button,
  href,
}: Props) {
  return (
    <>

      <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#D9B56D]">
        {tag}
      </span>

      <h3 className="mt-5 text-4xl lg:text-5xl font-bold leading-tight text-[#3D2D18]">
        {title}
      </h3>

      <p className="mt-8 max-w-xl text-lg leading-9 text-[#6E6257]">
        {description}
      </p>

      <Link
        href={href}
        className="
          mt-10
          inline-flex
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
        {button}
      </Link>

    </>
  );
}