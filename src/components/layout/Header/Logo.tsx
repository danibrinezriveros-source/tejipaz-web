
import Image from "next/image";
export default function Logo() {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <Image
  src="/logo/tejipaz.jpg"
  alt="Logo Tejipaz"
  width={44}
  height={44}
  className="h-11 w-11 object-contain"
  priority
/>

      <div className="min-w-0">
        <h1 className="text-base md:text-lg font-semibold tracking-[0.18em] text-stone-900">
  TEJIPAZ
</h1>

        <p className="hidden text-xs text-stone-600 md:block">
          Café de la Memoria
        </p>
      </div>
    </div>
  );
}