import { useTranslation } from "react-i18next";
import { NavLink, Link } from "react-router-dom";
import { LanguageSwitcher } from "./LanguageSwitcher";

// Door 1 locked nav order: About, Portfolio, Our Model, Leadership, News, Careers, Contact
const NAV_ITEMS = [
  { key: "about", to: "/about" },
  { key: "portfolio", to: "/portfolio" },
  { key: "ourModel", to: "/our-model" },
  { key: "leadership", to: "/leadership" },
  { key: "news", to: "/news" },
  { key: "careers", to: "/careers" },
  { key: "contact", to: "/contact" },
] as const;

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-hairline">
      <div className="container-csw flex items-center justify-between h-16">
        <Link to="/" className="flex items-baseline gap-3">
          <span className="font-serif text-xl tracking-wide text-ink">{t("brand.name")}</span>
          <span className="hidden md:inline text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            {t("brand.tagline")}
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.key}
              to={item.to}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.18em] transition-colors ${
                  isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                }`
              }
            >
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};
