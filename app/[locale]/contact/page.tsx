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
    if (website) redirect(`/${locale}/contact/success`);

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

    if (error) redirect(`/${locale}/contact/error`);
    redirect(`/${locale}/contact/success`);
  }

  const infoItems = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: locale === "fr" ? "Email" : "Email",
      value: "contact@evolved.africa",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: locale === "fr" ? "Localisation" : "Location",
      value: locale === "fr" ? "Afrique — présence panafricaine" : "Africa — pan-African presence",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      label: locale === "fr" ? "Disponibilité" : "Availability",
      value: locale === "fr" ? "Lun – Ven, 9h – 18h" : "Mon – Fri, 9am – 6pm",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: locale === "fr" ? "Réponse" : "Response time",
      value: locale === "fr" ? "Sous 24 à 48h" : "Within 24 to 48h",
    },
  ];

  return (
    <>
      <Section>
        <PageHero
          title={dict.contactPage.title}
          description={dict.contactPage.description}
        />
      </Section>

      <Section>
        <div className="overflow-hidden rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.1)]">
          <div className="grid md:grid-cols-[1fr_1.4fr]">

            {/* ── Colonne gauche — fond sombre ── */}
            <div className="flex flex-col justify-between gap-10 bg-[linear-gradient(160deg,#050b16_0%,#0b1730_50%,#145da1_100%)] p-8 md:p-10">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  {locale === "fr"
                    ? "Parlons de votre projet"
                    : "Let's talk about your project"}
                </h2>
                <p className="leading-7 text-white/70">
                  {locale === "fr"
                    ? "Que vous ayez une idée, un besoin ou une question, nous sommes là pour vous accompagner."
                    : "Whether you have an idea, a need or a question, we are here to support you."}
                </p>
              </div>

              {/* Infos de contact */}
              <ul className="space-y-5">
                {infoItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-sm text-white/90">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Tagline bas */}
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
                {locale === "fr"
                  ? "Apprendre aujourd'hui, évoluer demain."
                  : "Learn today, evolve tomorrow."}
              </p>
            </div>

            {/* ── Colonne droite — formulaire clair ── */}
            <div className="bg-white p-8 md:p-10">
              <form action={sendMessage} className="space-y-5">
                {/* Honeypot anti-spam */}
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

                {/* Nom + Email côte à côte */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700">
                      {locale === "fr" ? "Nom" : "Name"}
                      <span className="ml-1 text-[var(--primary)]">*</span>
                    </label>
                    <input
                      name="name"
                      className="w-full rounded-xl border border-[var(--border)] bg-gray-50 p-3 text-sm outline-none transition focus:border-[var(--primary)] focus:bg-white focus:ring-2 focus:ring-[rgba(20,93,161,0.12)]"
                      placeholder={locale === "fr" ? "Votre nom" : "Your name"}
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700">
                      Email
                      <span className="ml-1 text-[var(--primary)]">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="w-full rounded-xl border border-[var(--border)] bg-gray-50 p-3 text-sm outline-none transition focus:border-[var(--primary)] focus:bg-white focus:ring-2 focus:ring-[rgba(20,93,161,0.12)]"
                      placeholder={locale === "fr" ? "votre@email.com" : "your@email.com"}
                      required
                    />
                  </div>
                </div>

                {/* Sujet */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    {locale === "fr" ? "Sujet" : "Subject"}
                    <span className="ml-1 text-[var(--primary)]">*</span>
                  </label>
                  <input
                    name="subject"
                    className="w-full rounded-xl border border-[var(--border)] bg-gray-50 p-3 text-sm outline-none transition focus:border-[var(--primary)] focus:bg-white focus:ring-2 focus:ring-[rgba(20,93,161,0.12)]"
                    placeholder={
                      locale === "fr"
                        ? "Ex : Développement d'une application"
                        : "Ex: Application development"
                    }
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    Message
                    <span className="ml-1 text-[var(--primary)]">*</span>
                  </label>
                  <textarea
                    name="message"
                    className="w-full rounded-xl border border-[var(--border)] bg-gray-50 p-3 text-sm outline-none transition focus:border-[var(--primary)] focus:bg-white focus:ring-2 focus:ring-[rgba(20,93,161,0.12)]"
                    placeholder={
                      locale === "fr"
                        ? "Décrivez votre projet ou votre besoin..."
                        : "Describe your project or need..."
                    }
                    rows={6}
                    required
                  />
                </div>

                {/* Bouton */}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(20,93,161,0.35)] transition hover:bg-[var(--primary-hover)] hover:shadow-[0_4px_20px_rgba(20,93,161,0.5)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  {locale === "fr" ? "Envoyer le message" : "Send message"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </Section>
    </>
  );
}