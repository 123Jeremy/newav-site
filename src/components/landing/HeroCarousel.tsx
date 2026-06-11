"use client";

import { useCallback, useEffect, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { heroSlides } from "@/lib/images";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

const INTERVAL_MS = 5000;

export function HeroCarousel() {
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
    setActiveIndex((index + heroSlides.length) % heroSlides.length);
  }, []);

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (reducedMotion || isPaused) return;
    const timer = window.setInterval(goNext, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [goNext, isPaused, reducedMotion]);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    }
  };

  return (
    <section
      id="hero"
      aria-roledescription="carrousel"
      aria-label="Présentation NEWAV EA1"
      className="snap-section relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {heroSlides.map((slide, index) => (
        <div
          key={slide.full}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} sur ${heroSlides.length}`}
          aria-hidden={index !== activeIndex}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <ResponsiveImage
            src={slide}
            priority={index === 0}
            objectFit="cover"
            className="scale-100"
          />
        </div>
      ))}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/40"
      />

      <div className="relative z-10 flex h-full flex-col items-center px-6 pt-28 text-center">
        <h1 className="font-display text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
          NEWAV
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/70 md:text-xl">
          Le premier van 100 % électrique accessible à tous.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/reserver"
            className="inline-flex min-w-[200px] items-center justify-center rounded px-8 py-3 text-sm font-medium text-white bg-teslaBlue hover:bg-teslaBlue/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/30"
          >
            Commander
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-w-[200px] items-center justify-center rounded bg-white px-8 py-3 text-sm font-medium text-anthracite hover:bg-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2"
          >
            Essayer
          </Link>
        </div>
      </div>

      <button
        type="button"
        onClick={goPrev}
        aria-label="Slide précédente"
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white backdrop-blur-sm hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <span aria-hidden="true">‹</span>
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Slide suivante"
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white backdrop-blur-sm hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <span aria-hidden="true">›</span>
      </button>

      <div
        role="tablist"
        aria-label="Sélection de slide"
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2"
      >
        {heroSlides.map((slide, index) => (
          <button
            key={slide.full}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Aller à la slide ${index + 1}`}
            onClick={() => goTo(index)}
            className={`h-2.5 w-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
              index === activeIndex ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
