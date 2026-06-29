export default function ContactInfo() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:px-8 md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        <article>
          <h3 className="text-2xl font-light">Ubicación</h3>
          <p className="mt-4 text-stone-600">
            Granada, Antioquia
          </p>
        </article>

        <article>
          <h3 className="text-2xl font-light">Correo</h3>
          <p className="mt-4 text-stone-600">
            hola@tejipaz.com
          </p>
        </article>

        <article>
          <h3 className="text-2xl font-light">WhatsApp</h3>
          <p className="mt-4 text-stone-600">
            +57 300 000 0000
          </p>
        </article>

      </div>

    </section>
  );
}