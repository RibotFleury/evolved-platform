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
  segments[1] = nextLocale; // remplace /fr/... par /en/...
  return segments.join("/") || `/${nextLocale}`;
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

  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href={`/${currentLocale}`} className="font-semibold">
          EvolveD
        </Link>

        <div className="flex items-center gap-4">
          <Link href={`/${currentLocale}/about`} className="text-sm hover:underline">
            {safe.about}
          </Link>
          <Link href={`/${currentLocale}/services`} className="text-sm hover:underline">
            {safe.services}
          </Link>
          <Link href={`/${currentLocale}/projects`} className="text-sm hover:underline">
            {safe.projects}
          </Link>
          <Link href={`/${currentLocale}/contact`} className="text-sm hover:underline">
            {safe.contact}
          </Link>

          <Link
            href={nextPath}
            className="rounded border px-3 py-1 text-sm hover:bg-gray-50"
          >
            {nextLocale.toUpperCase()}
          </Link>
        </div>
      </nav>
    </header>
  );
}