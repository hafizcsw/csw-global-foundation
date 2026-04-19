import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "@/i18n";
import { Check, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const current = SUPPORTED_LANGUAGES.find((l) => l.code === i18n.language) ?? SUPPORTED_LANGUAGES[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ink-soft hover:text-gold transition-colors duration-500"
        aria-label={t("footer.language")}
      >
        <Globe className="h-3.5 w-3.5" />
        <span>{current.label}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[240px] max-h-[60vh] overflow-y-auto">
        {SUPPORTED_LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className="flex items-center justify-between gap-3 text-sm cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <span>{lang.label}</span>
              {lang.status === "scaffold" && (
                <span className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground border border-hairline px-1.5 py-0.5">
                  scaffold
                </span>
              )}
            </span>
            {lang.code === current.code && <Check className="h-3.5 w-3.5 text-gold" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
