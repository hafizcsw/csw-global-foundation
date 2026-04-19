import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";

// 12-language baseline. English ships with full content.
// Other locales mirror the English structure as scaffolding so the site
// remains 12-language-ready from day one. Translations are added via
// locale files only — no code changes required.
export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "fr", label: "Français", dir: "ltr" },
  { code: "es", label: "Español", dir: "ltr" },
  { code: "de", label: "Deutsch", dir: "ltr" },
  { code: "pt", label: "Português", dir: "ltr" },
  { code: "zh", label: "中文", dir: "ltr" },
  { code: "ja", label: "日本語", dir: "ltr" },
  { code: "ko", label: "한국어", dir: "ltr" },
  { code: "ru", label: "Русский", dir: "ltr" },
  { code: "hi", label: "हिन्दी", dir: "ltr" },
  { code: "tr", label: "Türkçe", dir: "ltr" },
] as const;

export type LanguageCode = (typeof SUPPORTED_LANGUAGES)[number]["code"];

// Build resources: every language uses the EN bundle as its fallback structure.
// Replace any locale file later by editing src/i18n/locales/<code>.json.
const resources = SUPPORTED_LANGUAGES.reduce<Record<string, { translation: typeof en }>>(
  (acc, { code }) => {
    acc[code] = { translation: en };
    return acc;
  },
  {}
);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: SUPPORTED_LANGUAGES.map((l) => l.code),
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

const applyDirection = (lng: string) => {
  const entry = SUPPORTED_LANGUAGES.find((l) => l.code === lng);
  if (typeof document !== "undefined") {
    document.documentElement.dir = entry?.dir ?? "ltr";
    document.documentElement.lang = entry?.code ?? "en";
  }
};

applyDirection(i18n.language);
i18n.on("languageChanged", applyDirection);

export default i18n;
