import Link from "next/link";

const NAV_LINKS = [
  { href: "/vehicule", label: "Véhicule" },
  { href: "#interieur", label: "Intérieur" },
  { href: "#securite", label: "Sécurité" },
  { href: "/reserver", label: "Réserver" },
];

export function Navbar() {
  return (
    <header className="fixed top-8 inset-x-0 z-40">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6"
      >
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-wide text-white drop-shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm"
        >
          NEWAV
        </Link>

        <details className="relative group">
          <summary
            aria-label="Ouvrir le menu"
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage [&::-webkit-details-marker]:hidden"
          >
            <span aria-hidden="true" className="flex flex-col gap-1">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </summary>
          <ul
            role="list"
            className="absolute right-0 mt-2 min-w-48 rounded-lg bg-white py-2 shadow-lg"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-2 text-sm text-anthracite hover:bg-sectionGray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sage"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </nav>
    </header>
  );
}
