import type { Metadata } from "next";
import { resolveLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { supabaseServer } from "@/lib/supabase/server";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import Card from "@/components/Card";

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
    <Section>
      <div className="space-y-8">
        <PageHero
          title={dict.projectsPage.title}
          description={dict.projectsPage.description}
        />

        {error && (
          <p className="text-sm text-red-600">
            {locale === "fr"
              ? "Erreur lors du chargement des projets."
              : "Error while loading projects."}
          </p>
        )}

        <div className="space-y-4">
          {projects.map((project) => (
            <Card key={project.id}>
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-lg font-semibold text-black">
                  {locale === "fr" ? project.title_fr : project.title_en}
                </h2>

                <span className="rounded-full bg-[rgba(20,93,161,0.08)] px-3 py-1 text-xs font-medium text-[var(--primary)]">
                  {project.status}
                </span>
              </div>

              <p className="mt-3 leading-7 text-gray-600">
                {locale === "fr" ? project.summary_fr : project.summary_en}
              </p>

              {project.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}