import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-background">
      <div className="container-csw py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-lg text-ink">{t("brand.name")}</span>
          <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            {t("brand.tagline")}
          </span>
        </div>
        <div className="text-xs text-ink-soft">{t("footer.parent")}</div>
        <div className="flex items-center gap-6">
          <LanguageSwitcher />
          <span className="text-xs text-muted-foreground">© {year} · {t("footer.rights")}</span>
        </div>
      </div>
    </footer>
  );
};
