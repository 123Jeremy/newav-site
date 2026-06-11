"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { interiorGallerySlides } from "@/lib/images";

const INTERVAL_MS = 5000;

export function InteriorGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + interiorGallerySlides.length) % interiorGallerySlides.length);
  }, []);

  useEffect(() => {
    if (reducedMotion || isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % interiorGallerySlides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, reducedMotion]);

  return (
    <div
      role="region"
      aria-roledescription="carrousel"
      aria-label="Galerie accessibilité intérieur NEWAV EA1"
      className="relative aspect-[4/3] overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {interiorGallerySlides.map((slide, index) => (
        <div
          key={slide.src}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} sur ${interiorGallerySlides.length}`}
          aria-hidden={index !== activeIndex}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-2xl"
            priority={index === 0}
          />
        </div>
      ))}

      <div
        role="tablist"
        aria-label="Position dans la galerie"
        className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2"
      >
        {interiorGallerySlides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Afficher l'image ${index + 1}`}
            onClick={() => goTo(index)}
            className={`h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/20 ${
              index === activeIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
