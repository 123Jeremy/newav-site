import { safetyImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

export function SafetySection() {
  return (
    <section
      id="securite"
      aria-labelledby="safety-heading"
      className="snap-section flex items-center bg-white px-6 py-16"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl md:order-1">
          <ResponsiveImage
            src={safetyImage}
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-2xl"
          />
        </div>

        <div className="order-1 md:order-2">
          <h2
            id="safety-heading"
            className="font-display text-3xl font-bold text-anthracite md:text-5xl"
          >
            Conçu pour votre sécurité.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-anthracite/80">
            Châssis renforcé et structure calibrée pour les contraintes du
            transport de personnes à mobilité réduite.
          </p>
          <p className="mt-4 text-base leading-relaxed text-anthracite/80">
            Points d&apos;ancrage homologués pour fauteuil roulant, testés et
            certifiés selon les normes en vigueur.
          </p>
          <p className="mt-4 text-base leading-relaxed text-anthracite/80">
            Parce que la confiance ne se décrète pas : elle se construit, voyage
            après voyage.
          </p>
        </div>
      </div>
    </section>
  );
}
