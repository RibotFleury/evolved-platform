import Link from "next/link";
import { resolveLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";

export default async function ContactErrorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dict = await getDictionary(locale);

  return (
    <Section>
      <div className="space-y-8">
        <PageHero
          title={dict.contactErrorPage.title}
          description={dict.contactErrorPage.description}
        />

        <Link
          href={`/${locale}/contact`}
          className="inline-block rounded-xl bg-[var(--primary)] px-6 py-3 text-white transition hover:bg-[var(--primary-hover)]"
        >
          {dict.contactErrorPage.backContact}
        </Link>
      </div>
    </Section>
  );
}