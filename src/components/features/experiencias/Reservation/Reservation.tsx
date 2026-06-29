import Link from "next/link";

export default function Reservation() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto max-w-5xl rounded-[40px] bg-stone-900 px-10 py-20 text-center text-white">

        <span className="text-xs uppercase tracking-[0.35em] text-stone-400">
          Reserva
        </span>

        <h2 className="mt-6 text-5xl font-light leading-tight">
          Tu próximo recuerdo comienza aquí.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-stone-300">
          Agenda una experiencia y descubre Granada desde la mirada
          de quienes la viven todos los días.
        </p>

        <Link
          href="/contacto"
          className="mt-12 inline-flex rounded-full border border-white px-8 py-4 transition hover:bg-white hover:text-stone-900"
        >
          Reservar experiencia
        </Link>

      </div>

    </section>
  );
}