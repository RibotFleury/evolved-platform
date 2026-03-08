import Link from "next/link";
import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { supabaseServer } from "@/lib/supabase/server";
import Section from "@/components/Section";
import Card from "@/components/Card";

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
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return buildMetadata({
    title: dict.metadata.home.title,
    description: dict.metadata.home.description,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
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

          <Card className="border-none bg-[rgba(20,93,161,0.05)] p-8 shadow-none">
            <div className="space-y-4">
              <div className="h-3 w-24 rounded-full bg-[var(--primary)]" />
              <h2 className="text-2xl font-semibold text-black">
                {locale === "fr"
                  ? "Une vision africaine du numérique"
                  : "An African vision of digital transformation"}
              </h2>
              <p className="leading-7 text-gray-600">
                {locale === "fr"
                  ? "Nous construisons un écosystème où l’apprentissage, l’innovation et l’impact se renforcent mutuellement."
                  : "We are building an ecosystem where learning, innovation and impact reinforce one another."}
              </p>
            </div>
          </Card>
        </div>
      </Section>

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