import Image from "next/image";
type Props = {
  title: string;
  description: string;
  image: string;
};

export default function ExperienceCard({
  title,
  description,
  image,
}: Props) {
  return (
    <article className="rounded-3xl border border-stone-200 p-10">

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
            
              /></div>

      <h3 className="mt-8 text-3xl font-light">
        {title}
      </h3>

      <p className="mt-6 leading-8 text-stone-600">
        {description}
      </p>

    </article>
    
  );
}