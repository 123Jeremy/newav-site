import { DesignGallery } from "@/components/landing/DesignGallery";

export function DesignSection() {
  return (
    <section
      id="design"
      aria-labelledby="design-heading"
      className="snap-section relative overflow-hidden"
    >
      <DesignGallery />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30"
      />
      <div className="relative z-10 flex h-full items-end justify-start px-6 pb-8 md:px-12 md:pb-14 lg:pb-20">
        <div className="max-w-2xl text-left">
          <h2
            id="design-heading"
            className="font-display text-3xl font-bold text-white md:text-5xl"
          >
            Un design qui ne s&apos;excuse de rien.
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Bandeau LED signature, jantes sculptées et teinte sauge mat — une
            silhouette affirmée, pensée pour durer.
          </p>
        </div>
      </div>
    </section>
  );
}
