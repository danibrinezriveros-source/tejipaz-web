import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Café Natural",
    category: "Origen Granada",
    description:
      "Notas dulces, chocolate y panela. Cultivado por familias caficultoras de Granada.",
    image: "/images/products/cafe-natural.jpg",
    hoverImage: "/images/products/cafe-especial-2.jpg",
    weight: "250 - 500 g",
    price: 0,
  },
  {
    id: 2,
    name: "Café Tradicional",
    category: "Molido",
    description:
      "Un café para el día a día, con el carácter y el sabor del mucilago.              ",
    image: "/images/products/cafe-tradicional.jpg",
    hoverImage: "/images/products/cafe-tradicional-hover.jpg",
    weight: "250 - 500 g",
    price: 0,
  },
  {
    id: 3,
    name: "Café Honey",
    category: "Especial",
    description:
      "Producción limitada de cafés seleccionados por su calidad excepcional.",
    image: "/images/products/honey.jpg",
    hoverImage: "/images/products/honey-hover.jpg",
    weight: "250 - 500 g",
    price: 0,
  },
];