import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0">

      <Image
     src="/images/home/hero.jpg"
     alt="Paisaje de Tejipaz"
     fill
     priority
     sizes="100vw"
     className="object-cover"
     />

      <div className="absolute inset-0 bg-black/45" />

    </div>
  );
}