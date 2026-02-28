import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <section className="space-y-6 py-12">
      <h1 className="text-3xl font-bold">{dict.projectsPage.title}</h1>
      <p className="max-w-2xl text-gray-700">{dict.projectsPage.description}</p>

      {/* Placeholder : demain (Jour 3/4) on remplace par les projets Supabase */}
      <div className="space-y-4">
  {dict.projectsList.map((project: any, index: number) => (
    <div key={index} className="rounded-lg border p-5">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">{project.title}</h2>
        <span className="rounded bg-gray-100 px-2 py-1 text-xs">
          {project.status}
        </span>
      </div>
      <p className="mt-2 text-sm text-gray-600">
        {project.description}
      </p>
    </div>
  ))}
</div>
    </section>
  );
}