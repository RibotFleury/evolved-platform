import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <section className="space-y-6 py-12">
      <h1 className="text-3xl font-bold">
        {dict.about.title}
      </h1>

      <p className="text-gray-700 max-w-2xl">
        {dict.about.description}
      </p>

      <div className="rounded-lg bg-gray-50 p-6">
        <h2 className="text-xl font-semibold mb-2">
          Mission
        </h2>
        <p className="text-gray-600">
          {dict.about.mission}
        </p>
      </div>
    </section>
  );
}