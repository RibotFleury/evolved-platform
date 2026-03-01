import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { supabaseServer } from "@/lib/supabase/server";

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

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from("projects")
    .select("id,slug,title_fr,title_en,summary_fr,summary_en,status,category,tags,created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <section className="space-y-4 py-12">
        <h1 className="text-3xl font-bold">{dict.projectsPage.title}</h1>
        <p className="text-red-600 text-sm">
          Erreur lors du chargement des projets: {error.message}
        </p>
      </section>
    );
  }

  const projects = (data ?? []) as ProjectRow[];

  return (
    <section className="space-y-6 py-12">
      <h1 className="text-3xl font-bold">{dict.projectsPage.title}</h1>
      <p className="max-w-2xl text-gray-700">{dict.projectsPage.description}</p>

      <div className="space-y-4">
        {projects.map((p) => (
          <div key={p.id} className="rounded-lg border p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">
                {locale === "fr" ? p.title_fr : p.title_en}
              </h2>
              <span className="rounded bg-gray-100 px-2 py-1 text-xs">
                {p.status}
              </span>
            </div>

            <p className="mt-2 text-sm text-gray-600">
              {locale === "fr" ? p.summary_fr : p.summary_en}
            </p>

            {p.tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}