import { useTranslation } from "react-i18next";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

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
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isFilmHero = pathname === "/";
  // Bugatti-style layout only over the film hero (homepage, before scroll)
  const bugattiMode = isFilmHero && !scrolled;
  const useInverse = isFilmHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-700 ${
          scrolled
            ? "bg-obsidian/85 backdrop-blur-xl border-b border-hairline shadow-elegant"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {bugattiMode ? (
          // ===== Bugatti-style: MENU left · Brand absolute-center · Tools right =====
          <div className="container-csw relative flex items-center justify-between h-20">
            {/* MENU trigger */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={t("nav.menu", { defaultValue: "Menu" }) as string}
              className="group inline-flex items-center gap-3 text-parchment hover:text-gold transition-colors duration-500"
            >
              <span className="flex flex-col gap-[5px]" aria-hidden>
                <span className="block h-px w-6 bg-current" />
                <span className="block h-px w-6 bg-current" />
              </span>
              <span className="font-mono text-[10px] tracking-[0.32em] uppercase">
                {t("nav.menu", { defaultValue: "Menu" })}
              </span>
            </button>

            {/* Brand — absolutely centered to the viewport line */}
            <Link
              to="/"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
            >
              <span className="font-serif text-base md:text-lg tracking-[0.32em] uppercase text-parchment group-hover:text-gold transition-colors duration-500 whitespace-nowrap">
                {t("brand.name")}
              </span>
            </Link>

            {/* Tools right */}
            <div className="flex items-center gap-3 text-parchment">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        ) : (
          // ===== Classic header (other pages, or homepage when scrolled) =====
          <div className="container-csw flex items-center justify-between h-20">
            <Link to="/" className="flex items-baseline gap-3 group">
              <span className={`font-serif text-xl tracking-wide transition-colors duration-500 ${useInverse ? "text-parchment group-hover:text-gold" : "text-ink group-hover:text-gold"}`}>
                {t("brand.name")}
              </span>
              <span className={`hidden md:inline text-[10px] uppercase tracking-[0.32em] ${useInverse ? "text-parchment/55" : "text-ink-muted"}`}>
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
                        : useInverse
                          ? "text-parchment/65 hover:text-parchment"
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
            <div className={`flex items-center gap-3 ${useInverse ? "text-parchment" : ""}`}>
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </header>

      {/* ===== Full-screen overlay menu (Bugatti-style) ===== */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-700 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-obsidian/96 backdrop-blur-2xl" />

        {/* Tonal vignette */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(220 25% 3% / 0) 0%, hsl(220 25% 3% / 0.6) 100%)",
          }}
        />

        {/* Top bar inside overlay */}
        <div className="relative container-csw flex items-center justify-between h-20">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="group inline-flex items-center gap-3 text-parchment hover:text-gold transition-colors duration-500"
          >
            <span className="relative w-5 h-5" aria-hidden>
              <span className="absolute top-1/2 left-0 w-5 h-px bg-current rotate-45" />
              <span className="absolute top-1/2 left-0 w-5 h-px bg-current -rotate-45" />
            </span>
            <span className="font-mono text-[11px] tracking-[0.32em] uppercase">
              {t("nav.close", { defaultValue: "Close" })}
            </span>
          </button>

          <Link to="/" className="font-serif text-xl tracking-[0.18em] uppercase text-parchment hover:text-gold transition-colors duration-500">
            {t("brand.name")}
          </Link>

          <div className="flex items-center gap-3 text-parchment">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>

        {/* Nav list */}
        <nav className="relative h-[calc(100%-5rem)] flex items-center">
          <div className="container-csw w-full">
            <ul className="flex flex-col gap-5 md:gap-6">
              {NAV_ITEMS.map((item, idx) => (
                <li
                  key={item.key}
                  className="overflow-hidden"
                  style={{
                    transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                    opacity: menuOpen ? 1 : 0,
                    transition: `transform 700ms cubic-bezier(0.2,0.7,0.2,1) ${150 + idx * 70}ms, opacity 700ms ease ${150 + idx * 70}ms`,
                  }}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `group inline-flex items-baseline gap-6 font-serif font-light tracking-[-0.02em] text-4xl md:text-6xl lg:text-7xl transition-colors duration-500 ${
                        isActive ? "text-gold" : "text-parchment hover:text-gold"
                      }`
                    }
                  >
                    <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-parchment/45 group-hover:text-gold/80 transition-colors">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>{t(`nav.${item.key}`)}</span>
                  </NavLink>
                </li>
              ))}
            </ul>

            <div
              className="mt-16 flex items-center gap-4"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(10px)",
                transition: `opacity 700ms ease ${150 + NAV_ITEMS.length * 70 + 100}ms, transform 700ms ease ${150 + NAV_ITEMS.length * 70 + 100}ms`,
              }}
            >
              <span className="h-px w-10 bg-gold/60" />
              <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-parchment/55">
                {t("brand.tagline")}
              </span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
