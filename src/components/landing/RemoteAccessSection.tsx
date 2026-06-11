import { remoteAccessImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

const FEATURES = [
  {
    title: "Ajustez votre climat",
    description:
      "Chauffez ou refroidissez l'habitacle avant d'entrer. Activez le Mode Animal pour vos compagnons ou le Mode Camp pour des nuits confortables.",
  },
  {
    title: "Verrouillez et déverrouillez d'un geste",
    description: "Donnez l'accès à d'autres personnes même quand vous n'êtes pas là.",
  },
  {
    title: "Gardez un œil sur les choses",
    description:
      "Activez le Mode Sentinelle pour surveiller les environs de votre véhicule lorsqu'il est stationné.",
  },
  {
    title: "Suivez votre charge",
    description:
      "Programmez la recharge, démarrez ou arrêtez les sessions et suivez la progression en temps réel.",
  },
] as const;

export function RemoteAccessSection() {
  return (
    <section
      id="connectivite"
      aria-labelledby="remote-access-heading"
      className="snap-section flex items-center bg-white px-6 py-16"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl md:order-1">
          <ResponsiveImage
            src={remoteAccessImage}
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-2xl"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="text-sm font-medium uppercase tracking-wide text-anthracite/60">
            Accès à distance via l&apos;app Tesla
          </p>
          <h2
            id="remote-access-heading"
            className="mt-3 font-display text-3xl font-bold text-anthracite md:text-4xl lg:text-5xl"
          >
            Accès à distance, à tout moment
          </h2>
          <p className="mt-6 text-base leading-relaxed text-anthracite/80">
            En plus d&apos;utiliser votre téléphone comme clé, préconditionnez, accédez
            et surveillez votre véhicule à distance via l&apos;app Tesla.
          </p>

          <ul className="mt-10 space-y-8">
            {FEATURES.map((feature) => (
              <li key={feature.title}>
                <h3 className="font-display text-lg font-semibold text-anthracite">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-anthracite/75">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
