import "server-only";
import { defaultLocale, type Locale } from "./config";

const dictionaries = {
  fr: () => import("@/dictionaries/fr.json").then((m) => m.default),
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
} as const;

export async function getDictionary(locale: Locale) {
  const loader = dictionaries[locale] ?? dictionaries[defaultLocale];
  return loader();
}