export default function Logo() {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <div className="h-10 w-10 rounded-full bg-stone-300" />

      <div className="min-w-0">
        <h1 className="truncate text-lg font-bold tracking-wide text-stone-900">
          TEJIPAZ
        </h1>

        <p className="text-xs text-stone-600">
          Café de la Memoria
        </p>
      </div>
    </div>
  );
}