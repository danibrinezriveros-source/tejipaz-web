import ManifestoText from "./ManifestoText";
import ManifestoSignature from "./ManifestoSignature";

export default function Manifesto() {
  return (
    <section className="border-b border-[#E8D3A5] bg-[#FCFBF8]">
      <div className="mx-auto flex min-h-[90vh] max-w-5xl flex-col justify-center px-6 py-24 lg:min-h-screen lg:px-8 lg:py-36">

        <ManifestoText />

        <ManifestoSignature />

      </div>
    </section>
  );
}