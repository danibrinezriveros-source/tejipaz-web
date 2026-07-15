import BridgeContent from "./BridgeContent";
import BridgeImage from "./BridgeImage";
import { BridgeProps } from "./bridge.types";

export default function Bridge({
  tag,
  title,
  description,
  image,
  button,
  href,
  reverse = false,
}: BridgeProps) {
  return (
    <section className="bg-white py-20">

      <div
        className={`mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >

        <BridgeImage
          image={image}
          title={title}
        />

        <BridgeContent
          tag={tag}
          title={title}
          description={description}
          button={button}
          href={href}
        />

      </div>

    </section>
  );
}