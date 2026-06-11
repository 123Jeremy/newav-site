import { InteriorGallery } from "@/components/landing/InteriorGallery";

export function InteriorSection() {
  return (
    <section
      id="interieur"
      aria-labelledby="interior-heading"
      className="snap-section flex items-center bg-white px-6 py-16"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <h2
            id="interior-heading"
            className="font-display text-3xl font-bold text-anthracite md:text-5xl"
          >
            Monter à bord sans demander la permission.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-anthracite/80">
            Rampe intégrée, plancher plat, volumes généreux : l&apos;accessibilité
            n&apos;est pas une option ajoutée après coup, elle structure chaque
            centimètre de l&apos;habitacle.
          </p>
          <blockquote className="mt-6 border-l-4 border-sage pl-4 text-anthracite/70 italic">
            Accessible design benefits everyone.
          </blockquote>
        </div>

        <div className="order-1 md:order-2">
          <InteriorGallery />
        </div>
      </div>
    </section>
  );
}
