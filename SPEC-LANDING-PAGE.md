# NEWAV Landing Page — Cahier des charges

> **Version** : v1 — **Date** : 11 juin 2026  
> **Architectes** : Jeremy (CDDO) + Marcel  
> **Cible** : `newav.eu` — page d'accueil scroll-snap  
> **Benchmark principal** : `https://www.tesla.com/fr_fr/modely`  
> **Assets disponibles** : `/public/images/` — 10 photos WebP en double résolution (full + 640px)

---

## 0. Règles globales

### MUST
- **Scroll-snap vertical** : chaque section S1→S9 est un snap-point. S0 (bandeau promo) et S10 (footer) sont hors snap.
- **WCAG 2.2 AA** : contraste ≥ 4.5:1, `alt` sur toutes les images, labels sur tous les boutons, navigation clavier, focus visible, `prefers-reduced-motion` respecté.
- **Mobile-first** : tout doit fonctionner sur mobile <640px. 3 breakpoints : mobile, tablette (640-1024px), desktop (>1024px).
- **Stack imposée** : Next.js 15 App Router, TypeScript strict (pas de `any`), Tailwind CSS v4, Framer Motion, `next/image`.

### SPEC
- **Palette** : sage `#8BA888` · anthracite `#2D2D2D` · bone `#F5F0EB`
- **Typos** : Plus Jakarta Sans (titres) · Inter (corps) — via `next/font`
- **Navbar** : fixe, transparente → opaque au scroll, logo NEWAV à gauche, menu hamburger à droite
- **Footer** : fond noir, liens discrets vers pages légales + sections

### REF
- L'expérience Tesla Model Y dans sa globalité : rythme, densité, nombre de CTA, hiérarchie visuelle

### FREE
- Micro-animations, transitions, effets de survol

---

## 1. S0 — Bandeau promo

Barre fine en haut de page, hors scroll-snap, discrète mais lisible.

- **Texte** : "Acompte de 1 000 € remboursable — production par ordre de réservation"
- **Style** : fond blanc semi-transparent flouté, texte centré, petit, gris foncé

---

## 2. S1 — Hero

Plein écran. Carrousel de 3 photos avec titre et 2 CTAs superposés — exactement comme la section 1 du Model Y Tesla.

- **Hauteur** : 100vh, snap obligatoire
- **Photos** : 3 slides full-bleed (object-cover, zéro marge). Rotation auto toutes les 5 secondes, pause au survol. Flèches gauche/droite + dots de navigation.
- **Titre** : "NEWAV" en blanc, très grand, centré
- **Sous-titre** : "Le premier van 100 % électrique accessible à tous." en blanc 70%, centré
- **Position texte** : dans le tiers supérieur de l'écran (comme Tesla), centré horizontalement
- **CTA 1** : "Commander" — fond bleu Tesla #3457dc, texte blanc
- **CTA 2** : "Essayer" — fond blanc, texte noir
- **Overlay** : gradient très léger pour garantir la lisibilité sans écraser la photo

---

## 3. S2 — Cartes caractéristiques

Des grandes cartes arrondies en carrousel horizontal. Référence : la section "Caractéristiques" du Model Y.

- **Fond** : blanc
- **Titre** : "Un van électrique qui change tout."
- **6 cartes** : Sécurité · Accessibilité · Autonomie · Conduite assistée · Performance · Connectivité
- **Style carte** : ratio portrait (~4:5), bords arrondis 16px, fond gris très clair
- **Photo dans la carte** : contenue en entier (object-contain), avec du padding à l'intérieur de la carte (~12%). Le véhicule ne doit jamais être coupé. Zoom léger au survol.
- **Label** : en bas à gauche de la carte, nom de la caractéristique
- **Icône "+"** : cercle en haut à droite, apparaît au survol
- **Défilement** : horizontal, fluide, avec flèches gauche/droite si le contenu déborde

---

## 4. S3 — Chiffres-clés

Section specs façon Tesla : 4 métriques sur fond noir. C'est la **seule** section de la page avec un fond noir (hors footer).

- **Fond** : noir #000000
- **Titre** : "Performance NEWAV EA1"
- **4 chiffres** : Autonomie · 0 à 50 km/h · Charge rapide · Volume utile
- **Mise en page** : 2 colonnes sur mobile, 4 sur desktop
- **Disclaimer** : "Spécifications estimées" en tout petit en bas

---

## 5. S4 — Design extérieur

Une grande photo plein écran avec un message superposé.

- **Hauteur** : 100vh, snap obligatoire
- **Photo** : full-bleed (object-cover), détail design du véhicule
- **Titre** : "Un design qui ne s'excuse de rien."
- **Sous-titre** : description du bandeau LED, des jantes, de la teinte
- **Overlay** : gradient léger

---

## 6. S5 — Intérieur

Layout split : texte à gauche, photo à droite sur desktop. Photo au-dessus du texte sur mobile.

- **Fond** : blanc
- **Titre** : "Monter à bord sans demander la permission."
- **Texte** : paragraphe sur l'accessibilité bien conçue + citation "Accessible design benefits everyone."
- **Photo** : intérieur du véhicule, contenue en entier (object-contain) dans un cadre arrondi, avec padding
- **La photo ne doit jamais être coupée** (object-contain, pas object-cover)

---

## 7. S6 — Technologie

Trois cartes texte en grille.

- **Fond** : gris très clair
- **Titre** : "La technologie qui veille."
- **3 cartes** : Conduite assistée · Connectivité · Modularité
- **Style** : cartes blanches arrondies avec titre + description courte
- **Grille** : 1 colonne mobile → 3 colonnes desktop

---

## 8. S7 — Sécurité

Layout split inversé : photo à gauche, texte à droite sur desktop. Texte en premier sur mobile.

- **Fond** : blanc
- **Titre** : "Conçu pour votre sécurité."
- **Texte** : 3 courts paragraphes sur châssis, ancrages fauteuil, confiance
- **Photo** : contenue en entier (object-contain) dans un cadre arrondi, avec padding

---

## 9. S8 — Lifestyle

Photo plein écran, ambiance.

- **Hauteur** : 100vh, snap obligatoire
- **Photo** : full-bleed (object-cover), véhicule dans un cadre de vie
- **Titre** : "Une vie entière dans un véhicule."
- **Sous-titre** : "Par tous les temps. Pour toutes les escapades."
- **Overlay** : très léger

---

## 10. S9 — Appel à l'action

Section de conversion, un seul bouton.

- **Fond** : blanc
- **Titre** : "Composez le vôtre."
- **Sous-titre** : mention de l'acompte remboursable et des options de personnalisation
- **CTA unique** : "Configurer mon NEWAV" — fond bleu Tesla, texte blanc
- **Pas d'autre distraction** : un seul bouton, pas de liens secondaires

---

## 11. S10 — Footer

- **Fond** : noir
- **Liens** : Mentions légales · Confidentialité · Accessibilité · Contact · Investisseurs · Presse
- **Copyright** : NEWAV © 2026
- **Texte** : discret (gris 30%), petit

---

## 12. Règles visuelles non-négociables

| Élément | Règle |
|---|---|
| Fond noir | S3 et S10 **uniquement** |
| Fond blanc | S2, S5, S7, S9 |
| Photos full-bleed (object-cover) | S1, S4, S8 |
| Photos contenues (object-contain + padding) | S2, S5, S7 |
| Fond section blanc ≠ fond carte gris clair | Les cartes dans S2/S6 doivent se distinguer du fond |
| Images | `next/image` obligatoire, WebP, alt descriptif |
| Palette | sage / anthracite / bone — jamais d'autres couleurs primaires |
| Typos | Plus Jakarta Sans + Inter — jamais de fallback système |

---

## 13. Checklist de validation

### Structure
- [ ] 11 sections dans l'ordre : PromoBar → Hero → Cartes → Chiffres → Design → Intérieur → Technologie → Sécurité → Lifestyle → CTA → Footer
- [ ] Scroll-snap mandatory sur S1 à S9
- [ ] S0 et S10 hors snap

### Visuel
- [ ] Aucun fond noir sauf S3 et S10
- [ ] Photos full-bleed = object-cover, sans marge
- [ ] Photos en carte = object-contain + padding, jamais coupées
- [ ] Palette respectée
- [ ] Typos respectées

### Accessibilité (WCAG 2.2 AA)
- [ ] Tous les `<img>` ont un `alt` descriptif
- [ ] Tous les `<button>` ont un label
- [ ] Navigation clavier complète
- [ ] Focus visible partout
- [ ] Contraste ≥ 4.5:1
- [ ] `prefers-reduced-motion` : pas d'animations automatiques si demandé

### Performance
- [ ] `next/image` partout
- [ ] WebP
- [ ] LCP < 2.5s
- [ ] `loading="lazy"` sauf premier écran

### Code
- [ ] TypeScript strict, pas de `any`
- [ ] Composants découpés (pas un seul fichier de 300 lignes)
- [ ] `'use client'` seulement là où l'interactivité l'exige

---

## 14. Assets fournis

Toutes les images sont en WebP, dans `/public/images/`, en deux tailles (full + 640px mobile).

| Image | Usage prévu |
|---|---|
| Véhicule sous la neige | S1 slide 1 |
| Véhicule en conduite | S1 slide 2 |
| Véhicule sur route désert | S1 slide 3 |
| Détail face avant LED | S4 |
| Intérieur + rampe | S5 |
| Fauteuil + sécurité | S7 |
| Véhicule au bord d'un lac | S8 |
| Recharge | S2 carte 3 |
| Conduite assistée | S2 carte 4 |
| App connectée | S2 carte 6 |
| Performance | S1 slide 2 + S2 carte 5 |
| Sécurité intérieure | S2 carte 1 |
| Accessibilité intérieure | S2 carte 2 |
