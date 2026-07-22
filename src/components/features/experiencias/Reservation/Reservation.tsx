import Link from "next/link";

export default function Reservation() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div
        className="
          relative
          mx-auto
          max-w-5xl
          overflow-hidden
          rounded-[40px]
          bg-[url('/images/experiencias/reservation.jpg')]
          bg-cover
          bg-center
          px-10
          py-20
          text-center
          text-white
        "
      >
        {/* Capa oscura */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Contenido */}
        <div className="relative z-10">
          <span className="text-xs uppercase tracking-[0.35em] text-stone-300">
            Reserva
          </span>

          <h2 className="mt-6 text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
            Tu próximo recuerdo comienza aquí.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-stone-200 lg:leading-9">
            Agenda una experiencia y descubre Granada desde la mirada
            de quienes la viven todos los días.
          </p>

          <Link
            href="/contacto"
            className="
              mt-12
              inline-flex
              items-center
              rounded-full
              border
              border-white
              px-8
              py-4
              transition-all
              duration-300
              hover:bg-white
              hover:text-stone-900
            "
          >
            Reservar experiencia
          </Link>
        </div>
      </div>
    </section>
  );
}