import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "./LanguageSwitcher";

const FOOTER_NAV = [
  { key: "about", to: "/about" },
  { key: "portfolio", to: "/portfolio" },
  { key: "ourModel", to: "/our-model" },
  { key: "leadership", to: "/leadership" },
  { key: "news", to: "/news" },
  { key: "careers", to: "/careers" },
  { key: "contact", to: "/contact" },
] as const;

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-background border-t border-hairline">
      <div className="container-csw py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4 flex flex-col gap-3">
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-lg text-ink">{t("brand.name")}</span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              {t("brand.tagline")}
            </span>
          </div>
          <p className="text-xs text-ink-soft max-w-sm leading-relaxed">{t("footer.parent")}</p>
        </div>
        <nav className="md:col-span-5 flex flex-wrap gap-x-6 gap-y-3">
          {FOOTER_NAV.map((item) => (
            <Link
              key={item.key}
              to={item.to}
              className="text-xs uppercase tracking-[0.18em] text-ink-soft hover:text-ink transition-colors"
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
        </nav>
        <div className="md:col-span-3 flex flex-col items-start md:items-end gap-4">
          <LanguageSwitcher />
          <span className="text-xs text-muted-foreground">© {year} · {t("footer.rights")}</span>
        </div>
      </div>
    </footer>
  );
};
