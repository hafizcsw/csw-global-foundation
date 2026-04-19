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
    <footer className="relative border-t border-hairline bg-card">
      <div className="gold-divider" />
      <div className="container-csw py-20 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 flex flex-col gap-5">
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-2xl text-ink">{t("brand.name")}</span>
            <span className="text-[10px] uppercase tracking-[0.32em] text-gold">
              {t("brand.tagline")}
            </span>
          </div>
          <p className="text-sm text-ink-soft max-w-sm leading-[1.8]">{t("footer.parent")}</p>
        </div>
        <nav className="md:col-span-5 flex flex-wrap content-start gap-x-8 gap-y-4">
          {FOOTER_NAV.map((item) => (
            <Link
              key={item.key}
              to={item.to}
              className="text-[11px] uppercase tracking-[0.24em] text-ink-soft hover:text-gold transition-colors duration-500"
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
        </nav>
        <div className="md:col-span-3 flex flex-col items-start md:items-end gap-5">
          <LanguageSwitcher />
          <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            © {year} · {t("footer.rights")}
          </span>
        </div>
      </div>
    </footer>
  );
};
