import Image from "next/image";

interface ProductCardProps {
  image: string;
  hoverImage: string;
  title: string;
  description: string;
  category: string;
  weight: string;
}

export default function ProductCard({
  image,
  hoverImage,
  title,
  description,
  category,
  weight,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

      <div className="relative aspect-square overflow-hidden">

  <Image
    src={image}
    alt={title}
    fill
    className="absolute inset-0 object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
  />

  <Image
    src={hoverImage}
    alt={title}
    fill
    className="absolute inset-0 object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
  />

</div>

      <div className="p-8">

        <span className="text-xs uppercase tracking-[0.3em] text-stone-500">
          {category}
        </span>

        <h3 className="mt-3 text-2xl font-light">
          {title}
        </h3>

        <p className="mt-5 leading-8 text-stone-600">
          {description}
        </p>

        <div className="mt-8 flex items-center justify-between">

          <span className="text-sm text-stone-500">
            {weight}
          </span>

          <button className="font-medium text-[#3D2D18] transition hover:opacity-70">
            Ver más →
          </button>

        </div>

      </div>

    </article>
  );
}