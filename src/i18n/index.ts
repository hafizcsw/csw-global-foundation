import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Per-language resource files. Every supported language has its own JSON file
// in ./locales/<code>.json. Currently only `en` is translation-complete; the
// other 11 files are STRUCTURAL SCAFFOLDS (mirror of en) and must be
// translated by linguists before being marked translation-ready.
import en from "./locales/en.json";
import ar from "./locales/ar.json";
import fr from "./locales/fr.json";
import es from "./locales/es.json";
import de from "./locales/de.json";
import pt from "./locales/pt.json";
import zh from "./locales/zh.json";
import ja from "./locales/ja.json";
import ko from "./locales/ko.json";
import ru from "./locales/ru.json";
import hi from "./locales/hi.json";
import bn from "./locales/bn.json";

/**
 * Translation status per locale.
 *  - "translated": linguist-reviewed, production copy.
 *  - "scaffold":   file exists with full key structure but content is the EN
 *                  fallback, awaiting translation. Architecture is ready;
 *                  copy is not.
 */
export type TranslationStatus = "translated" | "scaffold";

export interface LanguageEntry {
  code: string;
  label: string;
  dir: "ltr" | "rtl";
  status: TranslationStatus;
}

// Approved 12-language baseline.
export const SUPPORTED_LANGUAGES: readonly LanguageEntry[] = [
  { code: "en", label: "English",    dir: "ltr", status: "translated" },
  { code: "ar", label: "العربية",    dir: "rtl", status: "scaffold"   },
  { code: "fr", label: "Français",   dir: "ltr", status: "scaffold"   },
  { code: "es", label: "Español",    dir: "ltr", status: "scaffold"   },
  { code: "de", label: "Deutsch",    dir: "ltr", status: "scaffold"   },
  { code: "pt", label: "Português",  dir: "ltr", status: "scaffold"   },
  { code: "zh", label: "中文",        dir: "ltr", status: "scaffold"   },
  { code: "ja", label: "日本語",      dir: "ltr", status: "scaffold"   },
  { code: "ko", label: "한국어",      dir: "ltr", status: "scaffold"   },
  { code: "ru", label: "Русский",    dir: "ltr", status: "scaffold"   },
  { code: "hi", label: "हिन्दी",       dir: "ltr", status: "scaffold"   },
  { code: "bn", label: "বাংলা",      dir: "ltr", status: "scaffold"   },
] as const;

export type LanguageCode = (typeof SUPPORTED_LANGUAGES)[number]["code"];

const bundles: Record<LanguageCode, typeof en> = {
  en, ar, fr, es, de, pt, zh, ja, ko, ru, hi, bn,
};

const resources = SUPPORTED_LANGUAGES.reduce<Record<string, { translation: typeof en }>>(
  (acc, { code }) => {
    acc[code] = { translation: bundles[code as LanguageCode] };
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
