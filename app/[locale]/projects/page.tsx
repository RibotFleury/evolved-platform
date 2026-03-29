import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { resolveLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { supabaseServer } from "@/lib/supabase/server";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import Card from "@/components/Card";
import FadeIn from "@/components/FadeIn";

type ProjectRow = {
  id: string;
  slug: string;
  title_fr: string;
  title_en: string;
  summary_fr: string;
  summary_en: string;
  status: string;
  category: string | null;
  tags: string[];
  created_at: string;
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
    title: dict.metadata.projects.title,
    description: dict.metadata.projects.description,
  });
}

function getStatusLabel(
  status: string,
  dict: Awaited<ReturnType<typeof getDictionary>>
) {
  if (status === "done") return dict.projectsRich.status.done;
  if (status === "paused") return dict.projectsRich.status.paused;
  return dict.projectsRich.status.ongoing;
}

function getProjectImage(slug: string) {
  const images: Record<string, string> = {
    "evolved-platform": "/images/projects/evolved-platform.png",
    "training-program": "/images/projects/training-program.png",
  };

  return images[slug] ?? "/images/projects/evolved-platform.png";
}

function getCategoryLabel(category: string | null, locale: string) {
  if (!category) return locale === "fr" ? "Projet" : "Project";

  const normalized = category.toLowerCase();

  if (normalized === "web") return locale === "fr" ? "Plateforme Web" : "Web Platform";
  if (normalized === "education") return locale === "fr" ? "Formation" : "Training";

  return category;
}

function getStatusClass(status: string) {
  if (status === "done") {
    return "bg-white text-gray-900";
  }

  if (status === "paused") {
    return "bg-gray-700 text-white";
  }

  return "bg-[#27ae60] text-white";
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dict = await getDictionary(locale);

  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from("projects")
    .select(
      "id,slug,title_fr,title_en,summary_fr,summary_en,status,category,tags,created_at"
    )
    .order("created_at", { ascending: false });

  const projects = (data ?? []) as ProjectRow[];

  return (
    <>
      <Section>
        <FadeIn>
          <div className="space-y-8">
            <PageHero
              title={dict.projectsPage.title}
              description={dict.projectsPage.description}
            />

            <div className="rounded-[28px] bg-[rgba(20,93,161,0.10)] px-6 py-8 md:px-10">
              <h2 className="text-center text-2xl font-semibold text-[var(--primary)] md:text-3xl">
                {dict.projectsRich.introTitle}
              </h2>

              <p className="mx-auto mt-4 max-w-4xl text-center text-lg leading-8 text-gray-700">
                {dict.projectsRich.introDescription}
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <div className="space-y-8">
          {error && (
            <p className="text-sm text-red-600">
              {locale === "fr"
                ? `Erreur lors du chargement des projets : ${String(error)}`
                : `Error while loading projects: ${String(error)}`}
            </p>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.08}>
                <Card className="overflow-hidden p-0 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
                  <div className="relative h-[260px] w-full overflow-hidden">
                    <Image
                      src={getProjectImage(project.slug)}
                      alt={locale === "fr" ? project.title_fr : project.title_en}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                      <span className="rounded-full bg-[#1f66d1] px-4 py-2 text-sm font-semibold text-white shadow-sm">
                        {getCategoryLabel(project.category, locale)}
                      </span>

                      <span
                        className={`rounded-full px-4 py-2 text-sm font-semibold shadow-sm ${getStatusClass(
                          project.status
                        )}`}
                      >
                        {getStatusLabel(project.status, dict)}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-[30px] font-semibold leading-tight text-[#1f2a44] md:text-[34px]">
                      {locale === "fr" ? project.title_fr : project.title_en}
                    </h2>

                    <div className="my-4 h-px w-full bg-[var(--border)]" />

                    <p className="text-lg leading-8 text-gray-700">
                      {locale === "fr" ? project.summary_fr : project.summary_en}
                    </p>

                    {project.tags?.length ? (
                      <div className="mt-5 flex flex-wrap gap-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <FadeIn>
          <div className="overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#050b16_0%,#0b1730_40%,#145DA1_100%)] px-8 py-10 text-white md:px-12 md:py-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold md:text-4xl">
                  {locale === "fr"
                    ? "Discutons de votre projet"
                    : "Let’s discuss your project"}
                </h2>

                <p className="mt-4 text-lg leading-8 text-white/85">
                  {locale === "fr"
                    ? "Prêt à démarrer votre projet avec nous ? Contactez-nous dès aujourd’hui pour en savoir plus sur nos services et nos solutions sur mesure."
                    : "Ready to start your project with us? Contact us today to learn more about our services and tailored solutions."}
                </p>
              </div>

              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center rounded-2xl bg-[#1f66d1] px-8 py-4 text-lg font-semibold text-white transition hover:opacity-90"
              >
                {locale === "fr" ? "Contactez-nous" : "Contact us"}
              </Link>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}