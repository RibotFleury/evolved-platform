import type { Metadata } from "next";
import { resolveLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { supabaseServer } from "@/lib/supabase/server";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import Card from "@/components/Card";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dict = await getDictionary(locale);

  return buildMetadata({
    title: dict.metadata.services.title,
    description: dict.metadata.services.description,
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dict = await getDictionary(locale);

  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from("services")
    .select(
      "id,slug,title_fr,title_en,description_fr,description_en,icon,position,is_active"
    )
    .eq("is_active", true)
    .order("position", { ascending: true });

  const services = (data ?? []) as ServiceRow[];

  return (
    <Section>
      <div className="space-y-8">
        <PageHero
          title={dict.servicesPage.title}
          description={dict.servicesPage.description}
        />

        {error && (
          <p className="text-sm text-red-600">
            {locale === "fr"
              ? "Erreur lors du chargement des services."
              : "Error while loading services."}
          </p>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id}>
              <h2 className="text-lg font-semibold text-black">
                {locale === "fr" ? service.title_fr : service.title_en}
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                {locale === "fr"
                  ? service.description_fr
                  : service.description_en}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}