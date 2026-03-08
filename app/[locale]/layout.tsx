import type { ReactNode } from "react";
import { defaultLocale, locales, resolveLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dict = await getDictionary(locale);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar labels={dict.nav} />
      <main className="mx-auto max-w-5xl p-4">{children}</main>
      <Footer />
    </div>
  );
}