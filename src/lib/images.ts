export interface ResponsiveImageSrc {
  full: string;
  mobile: string;
  alt: string;
}

export const heroSlides: ResponsiveImageSrc[] = [
  {
    full: "/images/hero-slide-1.png",
    mobile: "/images/hero-slide-1.png",
    alt: "NEWAV EA1 en mouvement sur route de montagne — vue arrière trois-quarts",
  },
  {
    full: "/images/hero-slide-2.png",
    mobile: "/images/hero-slide-2.png",
    alt: "NEWAV EA1 au bord d'un lac au coucher du soleil — rampe déployée, accessibilité",
  },
  {
    full: "/images/hero-slide-3.png",
    mobile: "/images/hero-slide-3.png",
    alt: "NEWAV EA1 en recharge — rampe d'accès et utilisateur en fauteuil roulant",
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
      full: "/images/connected-remote-access.png",
      mobile: "/images/connected-remote-access.png",
      alt: "Application NEWAV sur smartphone — accès à distance et contrôle du véhicule",
    },
  },
];

export const remoteAccessImage: ResponsiveImageSrc = {
  full: "/images/connected-remote-access.png",
  mobile: "/images/connected-remote-access.png",
  alt: "Main tenant un smartphone affichant l'application NEWAV — contrôle à distance du véhicule",
};

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
