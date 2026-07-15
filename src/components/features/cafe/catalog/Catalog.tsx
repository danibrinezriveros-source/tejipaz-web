import { products } from "../../../../content/products";
import ProductCard from "./ProductCard";

export default function Catalog() {
  return (
    <section className="bg-stone-50 py-20 lg:py-32">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <span className="uppercase tracking-[0.35em] text-stone-500">
          Catálogo
        </span>

        <h2 className="mt-6 text-4xl font-light">
          Nuestro café
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
          Cada producto representa el trabajo de las familias caficultoras
          y el compromiso de Tejipaz con el territorio.
        </p>

       <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

  {products.map((product) => (

    <ProductCard
      key={product.id}
      image={product.image}
      hoverImage={product.hoverImage}
      title={product.name}
      description={product.description}
      category={product.category}
      weight={product.weight}
    />

  ))}

</div>

      </div>

    </section>
  );
}