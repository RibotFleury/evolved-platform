import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <section className="space-y-8 py-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">EvolveD</h1>

        <h2 className="text-xl text-gray-700">{dict.home.subtitle}</h2>

        <p className="max-w-2xl text-gray-600">{dict.home.description}</p>

        <div className="flex gap-4 pt-4">
          <button className="rounded bg-black px-6 py-2 text-white hover:bg-gray-800">
            {dict.home.ctaServices}
          </button>

          <button className="rounded border px-6 py-2 hover:bg-gray-50">
            {dict.home.ctaContact}
          </button>
        </div>
      </div>
    </section>
  );
}