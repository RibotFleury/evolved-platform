import { redirect } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { supabaseServer } from "@/lib/supabase/server";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/buildMetadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return buildMetadata({
    title: dict.metadata.contact.title,
    description: dict.metadata.contact.description,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  async function sendMessage(formData: FormData) {
    "use server";

    const website = String(formData.get("website") ?? "").trim();

    // Honeypot anti-spam
    if (website) {
      redirect(`/${locale}/contact/success`);
    }

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      redirect(`/${locale}/contact/error`);
    }

    const supabase = supabaseServer();

    const { error } = await supabase.from("contact_messages").insert({
      name,
      email,
      subject,
      message,
      locale,
    });

    if (error) {
      redirect(`/${locale}/contact/error`);
    }

    redirect(`/${locale}/contact/success`);
  }

  return (
    <section className="space-y-6 py-12">
      <h1 className="text-3xl font-bold">{dict.contactPage.title}</h1>
      <p className="max-w-2xl text-gray-700">{dict.contactPage.description}</p>

      <form action={sendMessage} className="max-w-lg space-y-4">
        <div className="hidden">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <input
          name="name"
          className="w-full rounded border p-3"
          placeholder={locale === "fr" ? "Nom" : "Name"}
          required
        />
        <input
          name="email"
          type="email"
          className="w-full rounded border p-3"
          placeholder="Email"
          required
        />
        <input
          name="subject"
          className="w-full rounded border p-3"
          placeholder={locale === "fr" ? "Sujet" : "Subject"}
          required
        />
        <textarea
          name="message"
          className="w-full rounded border p-3"
          placeholder="Message"
          rows={5}
          required
        />

        <button className="rounded bg-black px-6 py-2 text-white hover:bg-gray-800">
          {locale === "fr" ? "Envoyer" : "Send"}
        </button>
      </form>
    </section>
  );
}