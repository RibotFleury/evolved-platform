import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { resolveLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { supabaseServer } from "@/lib/supabase/server";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dict = await getDictionary(locale);

  return buildMetadata({
    title: dict.metadata.contact.title,
    description: dict.metadata.contact.description,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dict = await getDictionary(locale);

  async function sendMessage(formData: FormData) {
    "use server";

    const website = String(formData.get("website") ?? "").trim();

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
    <Section>
      <div className="space-y-8">
        <PageHero
          title={dict.contactPage.title}
          description={dict.contactPage.description}
        />

        <form action={sendMessage} className="max-w-xl space-y-4">
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
            className="w-full rounded-xl border border-[var(--border)] p-3"
            placeholder={locale === "fr" ? "Nom" : "Name"}
            required
          />

          <input
            name="email"
            type="email"
            className="w-full rounded-xl border border-[var(--border)] p-3"
            placeholder="Email"
            required
          />

          <input
            name="subject"
            className="w-full rounded-xl border border-[var(--border)] p-3"
            placeholder={locale === "fr" ? "Sujet" : "Subject"}
            required
          />

          <textarea
            name="message"
            className="w-full rounded-xl border border-[var(--border)] p-3"
            placeholder="Message"
            rows={6}
            required
          />

          <button className="rounded-xl bg-[var(--primary)] px-6 py-3 text-white transition hover:bg-[var(--primary-hover)]">
            {locale === "fr" ? "Envoyer" : "Send"}
          </button>
        </form>
      </div>
    </Section>
  );
}