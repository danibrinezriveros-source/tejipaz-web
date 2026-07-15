import Image from "next/image";

type Props = {
  image: string;
  title: string;
};

export default function BridgeImage({
  image,
  title,
}: Props) {
  return (
    <div className="relative h-[340px] overflow-hidden rounded-3xl">

      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition duration-700 hover:scale-105"
        sizes="(max-width:768px) 100vw, 40vw"
      />

    </div>
  );
}