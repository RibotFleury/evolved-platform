import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <section className="space-y-6 py-12">
      <h1 className="text-3xl font-bold">{dict.contactPage.title}</h1>
      <p className="max-w-2xl text-gray-700">{dict.contactPage.description}</p>

      {/* Formulaire statique aujourd’hui — demain on connecte à Supabase */}
      <form className="space-y-4 max-w-lg">
        <input
          className="w-full rounded border p-3"
          placeholder="Name / Nom"
        />
        <input
          className="w-full rounded border p-3"
          placeholder="Email"
          type="email"
        />
        <input
          className="w-full rounded border p-3"
          placeholder="Subject / Sujet"
        />
        <textarea
          className="w-full rounded border p-3"
          placeholder="Message"
          rows={5}
        />
        <button className="rounded bg-black px-6 py-2 text-white hover:bg-gray-800">
          Send / Envoyer
        </button>
      </form>
    </section>
  );
}