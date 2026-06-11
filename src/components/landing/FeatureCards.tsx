"use client";

import { useRef } from "react";
import { featureCards } from "@/lib/images";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

export function FeatureCards() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: -1 | 1) => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.querySelector("article")?.clientWidth ?? 320;
    container.scrollBy({ left: direction * (cardWidth + 16), behavior: "smooth" });
  };

  return (
    <section
      id="caracteristiques"
      aria-labelledby="features-heading"
      className="h-svh snap-start snap-always flex flex-col justify-center bg-white py-16"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <h2
          id="features-heading"
          className="font-display text-3xl font-bold text-anthracite md:text-5xl"
        >
          Un van électrique qui change tout.
        </h2>
      </div>

      <div className="relative mt-10">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Carte précédente"
          className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-md hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage md:block"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Carte suivante"
          className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-md hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage md:block"
        >
          <span aria-hidden="true">›</span>
        </button>

        <div
          ref={scrollRef}
          role="list"
          aria-label="Caractéristiques du véhicule"
          className="flex gap-4 overflow-x-auto scroll-smooth px-6 pb-4 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {featureCards.map((card) => (
            <article
              key={card.label}
              role="listitem"
              className="group relative w-[72vw] max-w-xs shrink-0 snap-start overflow-hidden rounded-2xl aspect-[4/5] md:w-80"
            >
              <ResponsiveImage
                src={card.image}
                objectFit={card.imageFit ?? "cover"}
                sizes="(max-width: 640px) 72vw, 320px"
                className={`rounded-2xl transition-transform duration-500 motion-reduce:transition-none ${card.imageClassName ?? ""} ${
                  card.imageFit === "contain"
                    ? "scale-100 group-hover:scale-[1.02]"
                    : "group-hover:scale-105 motion-reduce:group-hover:scale-100"
                }`}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/55 via-transparent to-transparent"
              />
              <p className="absolute bottom-5 left-5 font-display text-lg font-semibold text-white">
                {card.label}
              </p>
              <span
                aria-hidden="true"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-anthracite/80 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
              >
                +
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
