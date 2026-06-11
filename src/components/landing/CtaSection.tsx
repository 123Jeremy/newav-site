import Link from "next/link";

export function CtaSection() {
  return (
    <section
      id="configurer"
      aria-labelledby="cta-heading"
      className="snap-section flex flex-col items-center justify-center bg-white px-6 py-16 text-center"
    >
      <h2
        id="cta-heading"
        className="font-display text-3xl font-bold text-anthracite md:text-5xl"
      >
        Composez le vôtre.
      </h2>
      <p className="mt-6 max-w-xl text-base text-anthracite/75">
        Acompte de 1 000 € remboursable. Personnalisez votre configuration,
        vos finitions et vos options d&apos;accessibilité.
      </p>
      <Link
        href="/reserver"
        className="mt-10 inline-flex min-w-[260px] items-center justify-center rounded bg-teslaBlue px-10 py-4 text-sm font-medium text-white hover:bg-teslaBlue/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2"
      >
        Configurer mon NEWAV
      </Link>
    </section>
  );
}
