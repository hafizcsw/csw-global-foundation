import { useTranslation } from "react-i18next";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-700 ${
        scrolled
          ? "bg-obsidian/85 backdrop-blur-xl border-b border-hairline shadow-elegant"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-csw flex items-center justify-between h-20">
        <Link to="/" className="flex items-baseline gap-3 group">
          <span className="font-serif text-xl tracking-wide text-ink group-hover:text-gold transition-colors duration-500">
            {t("brand.name")}
          </span>
          <span className="hidden md:inline text-[10px] uppercase tracking-[0.32em] text-ink-muted">
            {t("brand.tagline")}
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-9">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.key}
              to={item.to}
              className={({ isActive }) =>
                `relative text-[11px] uppercase tracking-[0.24em] transition-colors duration-500 py-2 ${
                  isActive
                    ? "text-gold"
                    : "text-ink-soft hover:text-ink"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {t(`nav.${item.key}`)}
                  {isActive && (
                    <span className="absolute -bottom-0.5 inset-x-0 h-px bg-gold" />
                  )}
                </>
              )}
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
