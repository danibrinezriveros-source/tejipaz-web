import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};

export default function HistoryCard({
  title,
  description,
  image,
  reverse = false,
}: Props) {
  return (
    <article
      className={`grid items-center gap-16 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          sizes="(max-width:768px) 100vw, 50vw"
        />

      </div>

      <div>

        <h3 className="text-4xl font-light">
          {title}
        </h3>

        <p className="mt-8 text-lg leading-8 lg:leading-9 text-stone-600">
          {description}
        </p>

      </div>
    </article>
  );
}