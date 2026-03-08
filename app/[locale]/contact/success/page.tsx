import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";

export default async function ContactSuccessPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <section className="space-y-6 py-12">
      <h1 className="text-3xl font-bold">
        {dict.contactSuccessPage.title}
      </h1>

      <p className="max-w-2xl text-gray-700">
        {dict.contactSuccessPage.description}
      </p>

      <Link
        href={`/${locale}`}
        className="inline-block rounded bg-black px-6 py-2 text-white hover:bg-gray-800"
      >
        {dict.contactSuccessPage.backHome}
      </Link>
    </section>
  );
}