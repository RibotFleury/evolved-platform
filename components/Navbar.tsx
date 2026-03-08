"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";

type NavLabels = {
  about: string;
  services: string;
  projects: string;
  contact: string;
};

function getLocaleFromPath(pathname: string): Locale {
  const maybeLocale = pathname.split("/")[1];
  return (locales.includes(maybeLocale as Locale) ? maybeLocale : "fr") as Locale;
}

function switchLocale(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/");
  segments[1] = nextLocale;
  return segments.join("/") || `/${nextLocale}`;
}

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar({ labels }: { labels?: NavLabels }) {
  const safe: NavLabels = labels ?? {
    about: "About",
    services: "Services",
    projects: "Projects",
    contact: "Contact",
  };

  const pathname = usePathname();
  const currentLocale = getLocaleFromPath(pathname);

  const nextLocale: Locale = currentLocale === "fr" ? "en" : "fr";
  const nextPath = switchLocale(pathname, nextLocale);

  const navItems = [
    { href: `/${currentLocale}/about`, label: safe.about },
    { href: `/${currentLocale}/services`, label: safe.services },
    { href: `/${currentLocale}/projects`, label: safe.projects },
    { href: `/${currentLocale}/contact`, label: safe.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href={`/${currentLocale}`}
          className="text-xl font-bold tracking-tight text-[var(--primary)]"
        >
          EvolveD
        </Link>

        <div className="flex items-center gap-3 md:gap-5">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  active
                    ? "text-[var(--primary)]"
                    : "text-gray-700 hover:text-[var(--primary)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href={nextPath}
            className="rounded-full border border-[var(--border)] px-3 py-1.5 text-sm font-medium text-black transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            {nextLocale.toUpperCase()}
          </Link>
        </div>
      </nav>
    </header>
  );
}