export default function Cup() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        <div className="aspect-square rounded-3xl bg-stone-200" />

        <div>

          <span className="text-xs uppercase tracking-[0.35em] text-stone-500">
            La taza
          </span>

          <h2 className="mt-6 text-5xl font-light leading-tight">
            El final del recorrido es el comienzo del recuerdo.
          </h2>

          <p className="mt-8 text-lg leading-9 text-stone-600">
            Cada taza reúne el trabajo de muchas personas, el paisaje,
            el tiempo y la dedicación de quienes creen que el café
            también puede conservar la memoria de un territorio.
          </p>

        </div>

      </div>

    </section>
  );
}