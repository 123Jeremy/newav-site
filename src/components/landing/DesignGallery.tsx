"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { designGallerySlides } from "@/lib/images";

const INTERVAL_MS = 5000;

export function DesignGallery() {
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
    setActiveIndex((index + designGallerySlides.length) % designGallerySlides.length);
  }, []);

  useEffect(() => {
    if (reducedMotion || isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % designGallerySlides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, reducedMotion]);

  return (
    <div
      role="region"
      aria-roledescription="carrousel"
      aria-label="Galerie design extérieur NEWAV EA1"
      className="absolute inset-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {designGallerySlides.map((slide, index) => (
        <div
          key={slide.src}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} sur ${designGallerySlides.length}`}
          aria-hidden={index !== activeIndex}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      <div
        role="tablist"
        aria-label="Position dans la galerie design"
        className="absolute bottom-8 right-6 z-10 flex gap-2 md:bottom-12 md:right-12"
      >
        {designGallerySlides.map((slide, index) => (
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
