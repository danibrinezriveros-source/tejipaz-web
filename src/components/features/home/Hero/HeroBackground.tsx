export default function HeroBackground() {
  return (
    <div className="absolute inset-0">
      <div className="h-full w-full bg-gradient-to-b from-stone-900 via-stone-800 to-stone-700" />

      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}