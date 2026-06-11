import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/mentions", label: "Mentions légales" },
  { href: "/confidentialite", label: "Confidentialité" },
  { href: "/accessibility", label: "Accessibilité" },
  { href: "/contact", label: "Contact" },
  { href: "/investisseurs", label: "Investisseurs" },
  { href: "/presse", label: "Presse" },
] as const;

export function Footer() {
  return (
    <footer className="bg-black px-6 py-12">
      <nav aria-label="Liens de pied de page">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {FOOTER_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs text-white/30 hover:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage rounded-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <p className="mt-8 text-center text-xs text-white/30">
        NEWAV © 2026
      </p>
    </footer>
  );
}
