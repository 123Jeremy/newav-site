export function PromoBar() {
  return (
    <div
      role="region"
      aria-label="Offre de pré-réservation"
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-anthracite/10"
    >
      <p className="py-2 px-4 text-center text-xs text-anthracite/70 font-sans">
        Acompte de 1 000 € remboursable — production par ordre de réservation
      </p>
    </div>
  );
}
