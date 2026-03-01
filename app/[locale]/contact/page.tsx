import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { supabaseServer } from "@/lib/supabase/server";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  async function sendMessage(formData: FormData) {
    "use server";

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      // On ne peut pas facilement “afficher” ici sans state client,
      // donc on fait un throw: Next affichera une erreur (on améliorera au Jour 4/5).
      throw new Error("Missing required fields");
    }

    const supabase = supabaseServer();
    const { error } = await supabase.from("contact_messages").insert({
      name,
      email,
      subject,
      message,
      locale,
    });

    if (error) throw new Error(error.message);
  }

  return (
    <section className="space-y-6 py-12">
      <h1 className="text-3xl font-bold">{dict.contactPage.title}</h1>
      <p className="max-w-2xl text-gray-700">{dict.contactPage.description}</p>

      <form action={sendMessage} className="space-y-4 max-w-lg">
        <input
          name="name"
          className="w-full rounded border p-3"
          placeholder={locale === "fr" ? "Nom" : "Name"}
          required
        />
        <input
          name="email"
          className="w-full rounded border p-3"
          placeholder="Email"
          type="email"
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
          placeholder={locale === "fr" ? "Message" : "Message"}
          rows={5}
          required
        />

        <button className="rounded bg-black px-6 py-2 text-white hover:bg-gray-800">
          {locale === "fr" ? "Envoyer" : "Send"}
        </button>

        <p className="text-xs text-gray-500">
          {locale === "fr"
            ? "En cliquant sur Envoyer, votre message sera enregistré pour traitement."
            : "By clicking Send, your message will be saved for processing."}
        </p>
      </form>
    </section>
  );
}