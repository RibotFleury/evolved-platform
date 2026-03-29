import Link from "next/link";
import type { Metadata } from "next";
import { resolveLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { supabaseServer } from "@/lib/supabase/server";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import Card from "@/components/Card";
import FadeIn from "@/components/FadeIn";

type ServiceRow = {
  id: string;
  slug: string;
  title_fr: string;
  title_en: string;
  description_fr: string;
  description_en: string;
  icon: string | null;
  position: number;
  is_active: boolean;
};

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  code: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  sparkles: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
      <path d="M19 13l.75 2.25L22 16l-2.25.75L19 19l-.75-2.25L16 16l2.25-.75z" />
      <path d="M5 17l.5 1.5L7 19l-1.5.5L5 21l-.5-1.5L3 19l1.5-.5z" />
    </svg>
  ),
  shield: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

function ServiceIcon({
  icon,
  fallback,
}: {
  icon: string | null;
  fallback: number;
}) {
  if (icon && SERVICE_ICONS[icon]) {
    return <>{SERVICE_ICONS[icon]}</>;
  }
  if (icon) {
    return <span className="text-xl">{icon}</span>;
  }
  return <>{fallback + 1}</>;
}

const HeroIllustration = () => (
  <svg
    viewBox="0 0 480 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full max-w-md"
    aria-hidden="true"
  >
    <ellipse cx="240" cy="280" rx="200" ry="30" fill="rgba(20,93,161,0.06)" />
    <rect
      x="80"
      y="60"
      width="320"
      height="200"
      rx="16"
      fill="rgba(20,93,161,0.07)"
      stroke="rgba(20,93,161,0.15)"
      strokeWidth="1.5"
    />
    <rect
      x="100"
      y="78"
      width="280"
      height="160"
      rx="8"
      fill="white"
      stroke="rgba(20,93,161,0.2)"
      strokeWidth="1"
    />
    <rect x="118" y="96" width="120" height="8" rx="4" fill="rgba(20,93,161,0.25)" />
    <rect x="118" y="112" width="80" height="6" rx="3" fill="rgba(20,93,161,0.12)" />
    <rect x="118" y="126" width="180" height="6" rx="3" fill="rgba(20,93,161,0.08)" />
    <rect x="118" y="138" width="140" height="6" rx="3" fill="rgba(20,93,161,0.08)" />
    <rect x="118" y="185" width="20" height="35" rx="4" fill="rgba(20,93,161,0.3)" />
    <rect x="144" y="170" width="20" height="50" rx="4" fill="rgba(20,93,161,0.5)" />
    <rect x="170" y="178" width="20" height="42" rx="4" fill="rgba(20,93,161,0.35)" />
    <rect x="196" y="160" width="20" height="60" rx="4" fill="var(--primary, #145da1)" />
    <rect x="222" y="172" width="20" height="48" rx="4" fill="rgba(20,93,161,0.4)" />
    <circle
      cx="56"
      cy="180"
      r="22"
      fill="rgba(20,93,161,0.1)"
      stroke="rgba(20,93,161,0.2)"
      strokeWidth="1.5"
    />
    <circle cx="56" cy="172" r="9" fill="rgba(20,93,161,0.3)" />
    <path
      d="M38 202 Q56 192 74 202"
      stroke="rgba(20,93,161,0.3)"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <circle
      cx="424"
      cy="180"
      r="22"
      fill="rgba(20,93,161,0.1)"
      stroke="rgba(20,93,161,0.2)"
      strokeWidth="1.5"
    />
    <circle cx="424" cy="172" r="9" fill="rgba(20,93,161,0.3)" />
    <path
      d="M406 202 Q424 192 442 202"
      stroke="rgba(20,93,161,0.3)"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <line
      x1="78"
      y1="180"
      x2="100"
      y2="180"
      stroke="rgba(20,93,161,0.2)"
      strokeWidth="1.5"
      strokeDasharray="4 3"
    />
    <line
      x1="380"
      y1="180"
      x2="402"
      y2="180"
      stroke="rgba(20,93,161,0.2)"
      strokeWidth="1.5"
      strokeDasharray="4 3"
    />
    <rect x="310" y="90" width="70" height="32" rx="8" fill="var(--primary, #145da1)" />
    <rect x="320" y="99" width="40" height="5" rx="2.5" fill="white" opacity="0.9" />
    <rect x="320" y="109" width="28" height="4" rx="2" fill="white" opacity="0.6" />
  </svg>
);

const IntroIllustration = () => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-40 shrink-0 opacity-80"
    aria-hidden="true"
  >
    <circle cx="100" cy="100" r="90" fill="rgba(20,93,161,0.06)" />
    <rect
      x="50"
      y="45"
      width="100"
      height="120"
      rx="10"
      fill="white"
      stroke="rgba(20,93,161,0.2)"
      strokeWidth="1.5"
    />
    <rect
      x="75"
      y="38"
      width="50"
      height="18"
      rx="6"
      fill="rgba(20,93,161,0.15)"
      stroke="rgba(20,93,161,0.2)"
      strokeWidth="1.5"
    />
    {[70, 92, 114, 136].map((y, i) => (
      <g key={y}>
        <rect
          x="62"
          y={y}
          width="12"
          height="12"
          rx="3"
          fill={i < 3 ? "var(--primary, #145da1)" : "rgba(20,93,161,0.15)"}
        />
        {i < 3 && (
          <path
            d={`M ${65} ${y + 6} L ${68} ${y + 9} L ${71} ${y + 3}`}
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        <rect
          x="82"
          y={y + 2}
          width={i === 3 ? 40 : 60}
          height="7"
          rx="3.5"
          fill="rgba(20,93,161,0.12)"
        />
      </g>
    ))}
  </svg>
);

const ProcessIllustration = () => (
  <svg
    viewBox="0 0 600 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto my-2 w-full max-w-lg"
    aria-hidden="true"
  >
    <line
      x1="60"
      y1="40"
      x2="540"
      y2="40"
      stroke="rgba(20,93,161,0.15)"
      strokeWidth="2"
      strokeDasharray="6 4"
    />
    {[60, 300, 540].map((cx, i) => (
      <g key={cx}>
        <circle
          cx={cx}
          cy="40"
          r="20"
          fill="var(--primary, #145da1)"
          opacity={0.15 + i * 0.25}
        />
        <circle
          cx={cx}
          cy="40"
          r="12"
          fill="var(--primary, #145da1)"
          opacity={0.3 + i * 0.25}
        />
        <text x={cx} y="44" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
          0{i + 1}
        </text>
      </g>
    ))}
    {[180, 420].map((x) => (
      <path
        key={x}
        d={`M ${x - 8} 36 L ${x + 8} 40 L ${x - 8} 44`}
        fill="none"
        stroke="rgba(20,93,161,0.3)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ))}
  </svg>
);

const CtaIllustration = () => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="hidden w-32 shrink-0 opacity-20 lg:block"
    aria-hidden="true"
  >
    <circle cx="80" cy="80" r="70" stroke="white" strokeWidth="1" />
    <circle cx="80" cy="80" r="50" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
    <circle cx="80" cy="80" r="30" fill="rgba(255,255,255,0.08)" stroke="white" strokeWidth="1" />
    <path
      d="M 60 80 L 75 95 L 100 65"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dict = await getDictionary(locale);

  return buildMetadata({
    title: dict.metadata.services.title,
    description: dict.metadata.services.description,
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dict = await getDictionary(locale);

  const supabase = supabaseServer();
  const { data, error } = await supabase
    .from("services")
    .select(
      "id,slug,title_fr,title_en,description_fr,description_en,icon,position,is_active"
    )
    .eq("is_active", true)
    .order("position", { ascending: true });

  const services = (data ?? []) as ServiceRow[];

  const fallbackServices = (dict.servicesList as {
    title: string;
    description: string;
  }[]).map((s, i) => ({
    id: String(i),
    slug: "",
    title_fr: s.title,
    title_en: s.title,
    description_fr: s.description,
    description_en: s.description,
    icon: null,
    position: i,
    is_active: true,
  }));

  const displayServices = services.length > 0 ? services : fallbackServices;

  return (
    <>
      <Section>
        <FadeIn>
          <div className="space-y-8">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <PageHero
                  title={dict.servicesPage.title}
                  description={dict.servicesPage.description}
                />
              </div>
              <div className="flex justify-center md:justify-end">
                <HeroIllustration />
              </div>
            </div>

            <Card className="bg-[rgba(20,93,161,0.04)]">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-black md:text-2xl">
                    {dict.servicesRich.introTitle}
                  </h2>
                  <p className="mt-3 max-w-3xl leading-8 text-gray-600">
                    {dict.servicesRich.introDescription}
                  </p>
                </div>
                <IntroIllustration />
              </div>
            </Card>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <div className="space-y-8">
          {error && (
            <p className="text-sm text-red-600">
              {locale === "fr"
                ? `Erreur lors du chargement des services : ${String(error)}`
                : `Error while loading services: ${String(error)}`}
            </p>
          )}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {displayServices.map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.08}>
                <Card className="h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(20,93,161,0.08)] text-[var(--primary)]">
                    <ServiceIcon icon={service.icon} fallback={index} />
                  </div>

                  <h2 className="text-lg font-semibold text-black">
                    {locale === "fr" ? service.title_fr : service.title_en}
                  </h2>

                  <p className="mt-3 leading-7 text-gray-600">
                    {locale === "fr"
                      ? service.description_fr
                      : service.description_en}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[rgba(20,93,161,0.03)]">
        <div className="space-y-8">
          <FadeIn>
            <h2 className="text-2xl font-bold text-black md:text-3xl">
              {dict.servicesRich.processTitle}
            </h2>
            <ProcessIllustration />
          </FadeIn>

          <div className="grid gap-4 md:grid-cols-3">
            {dict.servicesRich.processItems.map(
              (
                item: { title: string; description: string },
                index: number
              ) => (
                <FadeIn key={index} delay={index * 0.08}>
                  <Card className="h-full">
                    <div className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
                      0{index + 1}
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-black">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </Card>
                </FadeIn>
              )
            )}
          </div>
        </div>
      </Section>

      <Section>
        <FadeIn>
          <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#050b16_0%,#0b1730_45%,#145DA1_100%)] px-8 py-10 text-white md:px-10 md:py-12">
            <div className="absolute -right-10 top-1/2 hidden -translate-y-1/2 lg:block">
              <CtaIllustration />
            </div>

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold md:text-3xl">
                  {dict.servicesRich.ctaTitle}
                </h2>
                <p className="mt-3 leading-7 text-white/80">
                  {dict.servicesRich.ctaDescription}
                </p>
              </div>

              <Link
  href={`/${locale}/contact`}
  className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold transition hover:scale-[1.02] hover:bg-white/90 sm:w-auto"
  style={{ color: "#145DA1" }}
>
  {dict.servicesRich.ctaButton}
</Link>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}