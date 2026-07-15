import { purpose } from "./purpose.data";

export default function Purpose() {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Encabezado */}

        <div className="max-w-3xl">

          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#D9B56D]">
            Nuestro propósito
          </span>

          <h2 className="mt-7 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] text-[#3D2D18]">
            Más que producir café,
            <br />
            queremos dejar una huella.
          </h2>

        </div>

        {/* Tarjetas */}

        <div className="mt-28 grid gap-14 md:grid-cols-2 lg:grid-cols-3">

          {purpose.map((item) => (

            <article
              key={item.number}
              className="
                group
                relative
                border-l-2
                border-[#E8D3A5]
                pl-8
                transition-all
                duration-500
                hover:border-[#D9B56D]
              "
            >

              {/* Número */}

              <span


              
                className="
                  block
                  text-5xl
                  font-bold
                  text-[#D9B56D]/25
                  transition-all
                  duration-500
                  group-hover:text-[#D9B56D]
                "
              >
                {item.number}
              </span>

              {/* Título */}

              <h3
                className="
                  mt-6
                  text-2xl
                  font-bold
                  leading-tight
                  text-[#3D2D18]
                  transition-colors
                  duration-500
                "
              >
                {item.title}
              </h3>

              {/* Texto */}

              <p
                className="
                  mt-5
                  text-[17px]
                  leading-8
                  text-[#6E6257]
                "
              >
                {item.description}
              </p>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}