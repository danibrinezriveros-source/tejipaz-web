export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-full bg-stone-300" />

      <div>
        <h1 className="text-lg font-bold tracking-wide text-stone-900">
          TEJIPAZ
        </h1>

        <p className="text-xs text-stone-600">
          Café de la Memoria
        </p>
      </div>
    </div>
  );
}