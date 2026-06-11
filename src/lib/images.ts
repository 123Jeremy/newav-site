export interface ResponsiveImageSrc {
  full: string;
  mobile: string;
  alt: string;
}

export const heroSlides: ResponsiveImageSrc[] = [
  {
    full: "/images/09-snow.webp",
    mobile: "/images/09-snow-640.webp",
    alt: "NEWAV EA1 sous la neige, vue trois-quarts avant",
  },
  {
    full: "/images/07-performance.webp",
    mobile: "/images/07-performance-640.webp",
    alt: "NEWAV EA1 en conduite dynamique sur route",
  },
  {
    full: "/images/10-design-desert.webp",
    mobile: "/images/10-design-desert-640.webp",
    alt: "NEWAV EA1 sur route désertique, mise en valeur du design",
  },
];

export interface FeatureCard {
  label: string;
  image: ResponsiveImageSrc;
  imageFit?: "cover" | "contain";
  imageClassName?: string;
}

export const featureCards: FeatureCard[] = [
  {
    label: "Sécurité",
    image: {
      full: "/images/01-safety-interior.webp",
      mobile: "/images/01-safety-interior-640.webp",
      alt: "Intérieur NEWAV EA1 — systèmes de sécurité et ancrages fauteuil",
    },
  },
  {
    label: "Accessibilité",
    image: {
      full: "/images/feature-accessibility-v2.png",
      mobile: "/images/feature-accessibility-v2.png",
      alt: "Personne en fauteuil roulant montant à bord du NEWAV EA1 via la rampe intégrée au coucher du soleil",
    },
  },
  {
    label: "Autonomie",
    imageClassName: "scale-110 object-[100%_42%]",
    image: {
      full: "/images/03-recharge.webp",
      mobile: "/images/03-recharge-640.webp",
      alt: "NEWAV EA1 en recharge rapide — gros plan sur la borne et le câble de charge",
    },
  },
  {
    label: "Conduite assistée",
    image: {
      full: "/images/feature-assisted-driving.png",
      mobile: "/images/feature-assisted-driving.png",
      alt: "NEWAV EA1 — conduite assistée, utilisatrice en fauteuil roulant et écran de sécurité active",
    },
  },
  {
    label: "Performance",
    image: {
      full: "/images/07-performance.webp",
      mobile: "/images/07-performance-640.webp",
      alt: "NEWAV EA1 — performances électriques en situation réelle",
    },
  },
  {
    label: "Connectivité",
    image: {
      full: "/images/08-connected-app.webp",
      mobile: "/images/08-connected-app-640.webp",
      alt: "Application connectée NEWAV synchronisée avec le véhicule",
    },
  },
];

export const designGallerySlides: GallerySlide[] = [
  {
    src: "/images/design-gallery-1.png",
    alt: "NEWAV EA1 — vue arrière trois-quarts, bandeau LED signature et jantes sculptées",
  },
  {
    src: "/images/design-gallery-2.png",
    alt: "NEWAV EA1 — vue avant trois-quarts en mouvement, bandeau LED et teinte sauge",
  },
];

export interface GallerySlide {
  src: string;
  alt: string;
}

export const interiorGallerySlides: GallerySlide[] = [
  {
    src: "/images/interior-gallery-1.png",
    alt: "Personne en fauteuil roulant montant à bord du NEWAV EA1 via la rampe intégrée",
  },
  {
    src: "/images/interior-gallery-2.png",
    alt: "Vue arrière du NEWAV EA1 — hayon ouvert, rampe déployée et plancher plat",
  },
  {
    src: "/images/interior-gallery-3.png",
    alt: "Profil du NEWAV EA1 — porte coulissante ouverte avec rampe d'accès intégrée",
  },
];

export const safetyImage: ResponsiveImageSrc = {
  full: "/images/safety-anchoring.png",
  mobile: "/images/safety-anchoring-640.png",
  alt: "Assistant sécurisant un fauteuil roulant avec sangles d'ancrage homologuées à l'intérieur du van NEWAV EA1",
};

export const lifestyleImage: ResponsiveImageSrc = {
  full: "/images/06-accessibility-lakeside.webp",
  mobile: "/images/06-accessibility-lakeside-640.webp",
  alt: "NEWAV EA1 au bord d'un lac — escapade en pleine nature",
};
