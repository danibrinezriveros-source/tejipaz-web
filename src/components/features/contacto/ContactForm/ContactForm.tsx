export default function ContactForm() {
  return (
    <section className="bg-stone-50 py-24">

      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Nombre"
            className="w-full rounded-xl border border-stone-300 p-4"
          />

          <input
            type="email"
            placeholder="Correo"
            className="w-full rounded-xl border border-stone-300 p-4"
          />

          <textarea
            rows={6}
            placeholder="Mensaje"
            className="w-full rounded-xl border border-stone-300 p-4"
          />

          <button
            className="rounded-full bg-stone-900 px-8 py-4 text-white"
          >
            Enviar mensaje
          </button>

        </form>

      </div>

    </section>
  );
}