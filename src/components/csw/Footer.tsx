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

/**
 * Bugatti-grade footer — pure obsidian, Antonio brand mark, hairline grid.
 */
export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-obsidian text-parchment border-t border-parchment/15">
      <div className="container-csw py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-14">
        <div className="md:col-span-5 flex flex-col gap-6">
          <Link to="/" className="inline-block">
            <span
              className="font-display uppercase text-3xl md:text-4xl text-parchment"
              style={{ fontWeight: 700, letterSpacing: "0.16em" }}
            >
              {t("brand.name")}
            </span>
          </Link>
          <p className="text-sm text-parchment/60 max-w-sm leading-[1.85]">{t("footer.parent")}</p>
        </div>
        <nav className="md:col-span-4 flex flex-col gap-4">
          <div className="font-mono text-[10px] tracking-[0.36em] uppercase text-parchment/45 mb-2">
            {t("nav.menu", { defaultValue: "Menu" })}
          </div>
          {FOOTER_NAV.map((item) => (
            <Link
              key={item.key}
              to={item.to}
              className="font-display uppercase text-lg md:text-xl text-parchment/85 hover:text-parchment transition-colors duration-500"
              style={{ fontWeight: 600, letterSpacing: "0.04em" }}
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
        </nav>
        <div className="md:col-span-3 flex flex-col items-start md:items-end gap-6">
          <LanguageSwitcher />
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-parchment/45">
            © {year} · {t("footer.rights")}
          </span>
        </div>
      </div>
    </footer>
  );
};
