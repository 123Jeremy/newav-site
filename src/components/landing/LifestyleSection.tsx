import { lifestyleImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

export function LifestyleSection() {
  return (
    <section
      id="lifestyle"
      aria-labelledby="lifestyle-heading"
      className="snap-section relative overflow-hidden"
    >
      <ResponsiveImage src={lifestyleImage} objectFit="cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-black/25" />
      <div className="relative z-10 flex h-full items-end px-6 pb-20 md:items-center md:pb-0">
        <div className="max-w-2xl">
          <h2
            id="lifestyle-heading"
            className="font-display text-3xl font-bold text-white md:text-5xl"
          >
            Une vie entière dans un véhicule.
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Par tous les temps. Pour toutes les escapades.
          </p>
        </div>
      </div>
    </section>
  );
}
