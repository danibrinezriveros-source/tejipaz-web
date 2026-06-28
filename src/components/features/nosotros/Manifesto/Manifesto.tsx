import ManifestoText from "./ManifestoText";
import ManifestoSignature from "./ManifestoSignature";

export default function Manifesto() {
  return (
    <section className="border-b border-stone-200 bg-stone-50">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-32">

        <ManifestoText />

        <ManifestoSignature />

      </div>
    </section>
  );
}