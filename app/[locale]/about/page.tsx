import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import Card from "@/components/Card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return buildMetadata({
    title: dict.metadata.about.title,
    description: dict.metadata.about.description,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <Section>
      <div className="space-y-8">
        <PageHero
          title={dict.about.title}
          description={dict.about.description}
        />

        <Card>
          <h2 className="mb-2 text-xl font-semibold text-black">Mission</h2>
          <p className="leading-7 text-gray-600">{dict.about.mission}</p>
        </Card>
      </div>
    </Section>
  );
}