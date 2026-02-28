import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <section className="space-y-6 py-12">
      <h1 className="text-3xl font-bold">{dict.servicesPage.title}</h1>
      <p className="max-w-2xl text-gray-700">{dict.servicesPage.description}</p>

      {/* Placeholder : demain (Jour 3/4) on remplace par les services Supabase */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {dict.servicesList.map((service: any, index: number) => (
    <div key={index} className="rounded-lg border p-5">
      <h2 className="font-semibold">{service.title}</h2>
      <p className="mt-2 text-sm text-gray-600">
        {service.description}
      </p>
    </div>
  ))}
</div>
    </section>
  );
}