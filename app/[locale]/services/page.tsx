import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { supabaseServer } from "@/lib/supabase/server";

type ServiceRow = {
  id: string;
  slug: string;
  title_fr: string;
  title_en: string;
  description_fr: string;
  description_en: string;
  icon: string | null;
  position: number;
  is_active: boolean;
};

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from("services")
    .select("id,slug,title_fr,title_en,description_fr,description_en,icon,position,is_active")
    .eq("is_active", true)
    .order("position", { ascending: true });

  if (error) {
    return (
      <section className="space-y-4 py-12">
        <h1 className="text-3xl font-bold">{dict.servicesPage.title}</h1>
        <p className="text-red-600 text-sm">
          Erreur lors du chargement des services: {error.message}
        </p>
      </section>
    );
  }

  const services = (data ?? []) as ServiceRow[];

  return (
    <section className="space-y-6 py-12">
      <h1 className="text-3xl font-bold">{dict.servicesPage.title}</h1>
      <p className="max-w-2xl text-gray-700">{dict.servicesPage.description}</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.id} className="rounded-lg border p-5">
            <h2 className="font-semibold">
              {locale === "fr" ? s.title_fr : s.title_en}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {locale === "fr" ? s.description_fr : s.description_en}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}