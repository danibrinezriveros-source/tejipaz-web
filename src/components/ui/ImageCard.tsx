import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
}

export default function ImageCard({
  src,
  alt,
}: ImageCardProps) {
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-3xl">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}