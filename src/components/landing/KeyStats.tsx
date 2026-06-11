import Image from "next/image";

const STATS = [
  { value: "400 km", label: "Autonomie" },
  { value: "6 s", label: "0 à 50 km/h" },
  { value: "30 min", label: "Charge rapide" },
  { value: "5,2 m³", label: "Volume utile" },
] as const;

export function KeyStats() {
  return (
    <section
      id="performance"
      aria-labelledby="stats-heading"
      className="snap-section flex items-center bg-white px-6 py-16"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
        <div className="relative aspect-[16/10] w-full max-w-3xl overflow-hidden rounded-2xl">
          <Image
            src="/images/performance-hero-v2.png"
            alt="NEWAV EA1 en conduite dynamique sur route de montagne — performance électrique"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover rounded-2xl"
            priority={false}
          />
        </div>

        <div className="mt-10 w-full text-center">
          <h2
            id="stats-heading"
            className="font-display text-3xl font-bold text-anthracite md:text-4xl"
          >
            Performance NEWAV EA1
          </h2>

          <dl className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="text-sm text-anthracite/60">{stat.label}</dt>
                <dd className="mt-2 font-display text-2xl font-bold text-anthracite md:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 text-xs text-anthracite/40">
            Spécifications estimées
          </p>
        </div>
      </div>
    </section>
  );
}
