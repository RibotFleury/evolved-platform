import Link from "next/link";
import type { Metadata } from "next";
import { resolveLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { supabaseServer } from "@/lib/supabase/server";
import Section from "@/components/Section";
import Card from "@/components/Card";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";

type ProjectRow = {
  id: string;
  slug: string;
  title_fr: string;
  title_en: string;
  summary_fr: string;
  summary_en: string;
  status: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dict = await getDictionary(locale);

  return buildMetadata({
    title: dict.metadata.home.title,
    description: dict.metadata.home.description,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dict = await getDictionary(locale);

  const supabase = supabaseServer();
  const { data: projects } = await supabase
    .from("projects")
    .select("id,slug,title_fr,title_en,summary_fr,summary_en,status")
    .order("created_at", { ascending: false })
    .limit(2);

  const featuredProjects = (projects ?? []) as ProjectRow[];

  return (
    <>
      {/* ── Hero ── */}
      <Section className="pt-16 md:pt-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full bg-[rgba(20,93,161,0.08)] px-4 py-2 text-sm font-medium text-[var(--primary)]">
              {dict.home.subtitle}
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-black md:text-5xl">
                EvolveD
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-gray-600">
                {dict.home.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/services`}
                className="rounded-xl bg-[var(--primary)] px-6 py-3 text-white transition hover:bg-[var(--primary-hover)]"
              >
                {dict.home.ctaServices}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="rounded-xl border border-[var(--border)] px-6 py-3 text-black transition hover:bg-gray-50"
              >
                {dict.home.ctaContact}
              </Link>
            </div>
          </div>

          {/* ── Image hero — pattern projects (fill dans div h-fixe) ── */}
          <FadeIn delay={0.2}>
            <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
              <div className="relative h-[320px] w-full md:h-[420px]">
                <Image
                  src="/images/hero-placeholder.png"
                  alt={
                    locale === "fr"
                      ? "Jeunes talents africains dans un environnement technologique"
                      : "Young African talents in a technological environment"
                  }
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h2 className="text-xl font-semibold text-white md:text-2xl">
                  {locale === "fr"
                    ? "Former, innover, transformer"
                    : "Train, innovate, transform"}
                </h2>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/90">
                  {locale === "fr"
                    ? "Construire un écosystème numérique africain fondé sur le talent, l'apprentissage et l'impact."
                    : "Building an African digital ecosystem powered by talent, learning, and impact."}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ── Stats ── */}
      <Section>
        <FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dict.homeStats.map(
              (stat: { value: string; label: string }, index: number) => (
                <Card key={index} className="text-center">
                  <div className="text-3xl font-bold text-[var(--primary)] md:text-4xl">
                    {stat.value}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {stat.label}
                  </p>
                </Card>
              )
            )}
          </div>
        </FadeIn>
      </Section>

      {/* ── Pourquoi EvolveD ── */}
      <FadeIn>
        <Section>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">

            {/* Image "why" — même pattern projects */}
            <div className="relative overflow-hidden rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              <div className="relative h-[280px] w-full">
                <Image
                  src="/images/why-evolved.svg"
                  alt={
                    locale === "fr"
                      ? "EvolveD — connecter talents, formation et opportunités en Afrique"
                      : "EvolveD — connecting talents, training and opportunities in Africa"
                  }
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 top-0 flex items-center justify-start p-4">
                  <span className="rounded-full bg-[#1f66d1] px-4 py-2 text-sm font-semibold text-white shadow-sm">
                    {locale === "fr" ? "Notre mission" : "Our mission"}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-black md:text-3xl">
                {locale === "fr" ? "Pourquoi EvolveD ?" : "Why EvolveD?"}
              </h2>
              <p className="leading-7 text-gray-600">
                {locale === "fr"
                  ? "L'Afrique regorge de talents capables d'apprendre, d'innover et de construire des solutions technologiques puissantes."
                  : "Africa is full of talents capable of learning, innovating, and building powerful technological solutions."}
              </p>
              <p className="leading-7 text-gray-600">
                {locale === "fr"
                  ? "Cependant, ces talents manquent souvent d'un écosystème favorable pour s'exprimer et créer un impact réel."
                  : "However, these talents often lack the right ecosystem to express themselves and create real impact."}
              </p>
              <p className="leading-7 text-gray-600">
                {locale === "fr"
                  ? "EvolveD existe pour combler ce fossé en connectant formation, innovation et opportunités."
                  : "EvolveD exists to bridge this gap by connecting training, innovation, and opportunities."}
              </p>

              <Card className="bg-[rgba(20,93,161,0.05)] p-8">
                <h3 className="text-xl font-semibold text-black">
                  {locale === "fr"
                    ? "Un écosystème complet"
                    : "A complete ecosystem"}
                </h3>
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li>• {locale === "fr" ? "Formation pratique" : "Hands-on training"}</li>
                  <li>• {locale === "fr" ? "Projets concrets" : "Real-world projects"}</li>
                  <li>• {locale === "fr" ? "Opportunités professionnelles" : "Career opportunities"}</li>
                </ul>
              </Card>
            </div>
          </div>
        </Section>
      </FadeIn>

      {/* ── Services ── */}
      <Section>
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-black md:text-3xl">
              {dict.home.sections.servicesTitle}
            </h2>
            <p className="max-w-2xl text-gray-600">
              {locale === "fr"
                ? "Des expertises concrètes pour accompagner les besoins digitaux des entreprises, institutions et talents."
                : "Practical expertise to support the digital needs of companies, institutions and talent."}
            </p>
          </div>

          {/* Bannière services — pattern projects */}
          <div className="relative overflow-hidden rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
            <div className="relative h-[200px] w-full">
              <Image
                src="/images/services-banner.svg"
                alt={
                  locale === "fr"
                    ? "Nos services — Web, IA et Cybersécurité"
                    : "Our services — Web, AI and Cybersecurity"
                }
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 top-0 flex items-center justify-start p-4">
                <span className="rounded-full bg-[#1f66d1] px-4 py-2 text-sm font-semibold text-white shadow-sm">
                  {dict.home.sections.servicesTitle}
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {dict.homeCards.services.map(
              (
                service: { title: string; description: string },
                index: number
              ) => (
                <Card key={index}>
                  <h3 className="text-lg font-semibold text-black">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600">
                    {service.description}
                  </p>
                </Card>
              )
            )}
          </div>
        </div>
      </Section>

      {/* ── Projets en vedette ── */}
      <Section className="bg-[rgba(20,93,161,0.03)]">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-black md:text-3xl">
              {dict.home.sections.projectsTitle}
            </h2>
            <p className="max-w-2xl text-gray-600">
              {locale === "fr"
                ? "Quelques initiatives en cours qui illustrent notre démarche."
                : "A few ongoing initiatives that reflect our approach."}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <Card key={project.id}>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-black">
                    {locale === "fr" ? project.title_fr : project.title_en}
                  </h3>
                  <span className="rounded-full bg-[rgba(20,93,161,0.08)] px-3 py-1 text-xs font-medium text-[var(--primary)]">
                    {project.status}
                  </span>
                </div>
                <p className="mt-3 leading-7 text-gray-600">
                  {locale === "fr" ? project.summary_fr : project.summary_en}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Impact ── */}
      <Section>
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-black md:text-3xl">
              {dict.home.sections.impactTitle}
            </h2>
            <p className="max-w-2xl text-gray-600">
              {locale === "fr"
                ? "Notre ambition dépasse la technologie : nous voulons créer un impact durable."
                : "Our ambition goes beyond technology: we want to create lasting impact."}
            </p>
          </div>

          {/* Bannière impact — pattern projects */}
          <div className="relative overflow-hidden rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
            <div className="relative h-[200px] w-full">
              <Image
                src="/images/impact-banner.svg"
                alt={
                  locale === "fr"
                    ? "Notre impact — formation, innovation, transformation"
                    : "Our impact — training, innovation, transformation"
                }
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 top-0 flex items-center justify-start p-4">
                <span className="rounded-full bg-[#1f66d1] px-4 py-2 text-sm font-semibold text-white shadow-sm">
                  {dict.home.sections.impactTitle}
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {dict.homeCards.impact.map(
              (
                item: { title: string; description: string },
                index: number
              ) => (
                <Card key={index}>
                  <h3 className="text-lg font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600">
                    {item.description}
                  </p>
                </Card>
              )
            )}
          </div>
        </div>
      </Section>
    </>
  );
}