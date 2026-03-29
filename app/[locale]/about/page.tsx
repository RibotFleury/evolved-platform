import Image from "next/image";
import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { resolveLocale } from "@/lib/i18n/config";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import Card from "@/components/Card";
import FadeIn from "@/components/FadeIn";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dict = await getDictionary(locale);

  return buildMetadata({
    title: dict.metadata.about.title,
    description: dict.metadata.about.description,
  });
}

// ─── Icônes des valeurs ───────────────────────────────────────────────────────

const VALUE_ICONS = [
  // Innovation
  <svg key="innovation" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>,
  // Apprentissage continu
  <svg key="learning" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>,
  // Collaboration
  <svg key="collaboration" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
  // Impact social
  <svg key="impact" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>,
];

// ─── Icône check pour les listes ─────────────────────────────────────────────

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(20,93,161,0.1)]">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 text-[var(--primary)]">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

// ─── Icône flèche pour les listes ────────────────────────────────────────────

function ArrowIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(39,174,96,0.1)]">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 text-[#27ae60]">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dict = await getDictionary(locale);

  return (
    <>
      {/* ── Hero + Mission ── */}
      <Section>
        <FadeIn>
          <div className="space-y-8">
            <PageHero
              title={dict.about.title}
              description={dict.about.description}
            />

            <Card className="overflow-hidden p-0 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              <div className="relative h-[260px] w-full overflow-hidden">
                <Image
                  src="/images/about/hero-team.svg"
                  alt={
                    locale === "fr"
                      ? "Équipe EvolveD — transformation digitale en Afrique"
                      : "EvolveD team — digital transformation in Africa"
                  }
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                  <span className="rounded-full bg-[#1f66d1] px-4 py-2 text-sm font-semibold text-white shadow-sm">
                    EvolveD
                  </span>
                  <span className="rounded-full bg-[#27ae60] px-4 py-2 text-sm font-semibold text-white shadow-sm">
                    {locale === "fr" ? "Notre équipe" : "Our team"}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-[24px] font-semibold leading-tight text-[#1f2a44] md:text-[28px]">
                  Mission
                </h2>
                <div className="my-4 h-px w-full bg-[var(--border)]" />
                <p className="text-lg leading-8 text-gray-700">
                  {dict.about.mission}
                </p>
              </div>
            </Card>
          </div>
        </FadeIn>
      </Section>

      {/* ── Vision ── */}
      <Section className="bg-[rgba(20,93,161,0.03)]">
        <FadeIn>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-black md:text-3xl">
              {dict.aboutPage.visionTitle}
            </h2>

            <Card className="overflow-hidden p-0 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                  src="/images/about/vision-africa.svg"
                  alt={
                    locale === "fr"
                      ? "Skyline africaine — vision d'une Afrique numériquement autonome"
                      : "African skyline — vision of a digitally autonomous Africa"
                  }
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 top-0 flex items-center justify-start p-5">
                  <span className="rounded-full bg-[#1f66d1] px-4 py-2 text-sm font-semibold text-white shadow-sm">
                    {locale === "fr" ? "Vision 2030" : "Vision 2030"}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-lg leading-8 text-gray-700">
                  {dict.aboutPage.visionDescription}
                </p>
              </div>
            </Card>
          </div>
        </FadeIn>
      </Section>

      {/* ── Valeurs ── */}
      <Section>
        <div className="space-y-8">
          <FadeIn>
            <Card className="overflow-hidden p-0 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              <div className="relative h-[200px] w-full overflow-hidden">
                <Image
                  src="/images/about/values-teamwork.svg"
                  alt={
                    locale === "fr"
                      ? "Équipe diverse autour d'une table — nos valeurs"
                      : "Diverse team around a table — our values"
                  }
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                  <span className="rounded-full bg-[#1f66d1] px-4 py-2 text-sm font-semibold text-white shadow-sm">
                    {dict.aboutPage.valuesTitle}
                  </span>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* ── Cards valeurs avec icônes ── */}
          <div className="grid gap-4 md:grid-cols-2">
            {dict.aboutPage.values.map(
              (
                value: { title: string; description: string },
                index: number
              ) => (
                <FadeIn key={index} delay={index * 0.08}>
                  <Card className="h-full">
                    {/* Icône colorée */}
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(20,93,161,0.08)] text-[var(--primary)]">
                      {VALUE_ICONS[index]}
                    </div>
                    <h3 className="text-lg font-semibold text-black">
                      {value.title}
                    </h3>
                    <p className="mt-3 leading-7 text-gray-600">
                      {value.description}
                    </p>
                  </Card>
                </FadeIn>
              )
            )}
          </div>
        </div>
      </Section>

      {/* ── Objectifs & Impact ── */}
      <Section className="bg-[rgba(20,93,161,0.03)]">
        <div className="grid gap-8 md:grid-cols-2">
          <FadeIn>
            <Card className="h-full">
              <h2 className="text-2xl font-bold text-black">
                {dict.aboutPage.objectivesTitle}
              </h2>
              {/* ── Liste avec icône check ── */}
              <ul className="mt-4 space-y-3">
                {dict.aboutPage.objectives.map(
                  (item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <CheckIcon />
                      <span className="leading-6">{item}</span>
                    </li>
                  )
                )}
              </ul>
            </Card>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="h-full">
              <h2 className="text-2xl font-bold text-black">
                {dict.aboutPage.impactTitle}
              </h2>
              {/* ── Liste avec icône flèche ── */}
              <ul className="mt-4 space-y-3">
                {dict.aboutPage.impactItems.map(
                  (item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <ArrowIcon />
                      <span className="leading-6">{item}</span>
                    </li>
                  )
                )}
              </ul>
            </Card>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}