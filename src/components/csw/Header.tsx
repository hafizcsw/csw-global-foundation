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

  useEffect(() => {
    // Watch scroll on window AND on the snap-stage container (homepage)
    const onScroll = () => {
      const stage = document.querySelector(".snap-stage") as HTMLElement | null;
      const y = stage ? stage.scrollTop : window.scrollY;
      setScrolled(y > 60);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const stage = document.querySelector(".snap-stage");
    stage?.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      stage?.removeEventListener("scroll", onScroll as EventListener);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Homepage: header is absolute over hero, scrolls away with it.
  // Other pages: classic sticky header.
  const onHome = isFilmHero;

  return (
    <>
      {/* ===== Bugatti-style header — only on hero, fades on scroll ===== */}
      {onHome ? (
        <header
          className={`absolute top-0 left-0 right-0 z-40 transition-opacity duration-700 ${
            scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="container-csw relative flex items-center justify-between h-24">
            {/* MENU left */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={t("nav.menu", { defaultValue: "Menu" }) as string}
              className="group inline-flex items-center gap-3 text-parchment hover:text-parchment/70 transition-colors duration-500"
            >
              <span className="flex flex-col gap-[5px]" aria-hidden>
                <span className="block h-px w-7 bg-current" />
                <span className="block h-px w-7 bg-current" />
              </span>
              <span className="font-mono text-[11px] tracking-[0.32em] uppercase">
                {t("nav.menu", { defaultValue: "Menu" })}
              </span>
            </button>

            {/* Brand center — Antonio bold, wide tracking, like BUGATTI */}
            <Link
              to="/"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
            >
              <span
                className="font-display text-2xl md:text-3xl uppercase text-parchment group-hover:text-parchment/80 transition-colors duration-500 whitespace-nowrap"
                style={{ fontWeight: 700, letterSpacing: "0.18em" }}
              >
                {t("brand.name")}
              </span>
            </Link>

            {/* Tools right */}
            <div className="flex items-center gap-3 text-parchment">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        </header>
      ) : (
        <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-xl border-b border-hairline-soft">
          <div className="container-csw flex items-center justify-between h-20">
            <Link to="/" className="flex items-baseline gap-3 group">
              <span
                className="font-display text-xl md:text-2xl uppercase text-ink group-hover:text-ink/70 transition-colors duration-500"
                style={{ fontWeight: 700, letterSpacing: "0.16em" }}
              >
                {t("brand.name")}
              </span>
            </Link>
            <nav className="hidden lg:flex items-center gap-9">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.key}
                  to={item.to}
                  className={({ isActive }) =>
                    `relative font-mono text-[11px] uppercase tracking-[0.28em] transition-colors duration-500 py-2 ${
                      isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {t(`nav.${item.key}`)}
                      {isActive && <span className="absolute -bottom-0.5 inset-x-0 h-px bg-ink" />}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <LanguageSwitcher />
              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Menu"
                className="lg:hidden inline-flex items-center gap-2 text-ink"
              >
                <span className="flex flex-col gap-[4px]" aria-hidden>
                  <span className="block h-px w-6 bg-current" />
                  <span className="block h-px w-6 bg-current" />
                </span>
              </button>
            </div>
          </div>
        </header>
      )}

      {/* ===== Floating MENU pill — appears after hero scrolls away on homepage ===== */}
      {onHome && (
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Menu"
          className={`fixed top-6 left-6 z-40 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-parchment/40 bg-obsidian/70 backdrop-blur-md text-parchment hover:bg-obsidian/90 hover:border-parchment transition-all duration-700 ${
            scrolled ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"
          }`}
        >
          <span className="flex flex-col gap-[4px]" aria-hidden>
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
          </span>
          <span className="font-mono text-[10px] tracking-[0.32em] uppercase">
            {t("nav.menu", { defaultValue: "Menu" })}
          </span>
        </button>
      )}

      {/* ===== Full-screen overlay menu ===== */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-700 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
      >
        <div className="absolute inset-0 bg-obsidian/96 backdrop-blur-2xl" />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, hsl(220 25% 3% / 0) 0%, hsl(220 25% 3% / 0.6) 100%)",
          }}
        />

        <div className="relative container-csw flex items-center justify-between h-24">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close"
            className="group inline-flex items-center gap-3 text-parchment hover:text-parchment/70 transition-colors duration-500"
          >
            <span className="relative w-5 h-5" aria-hidden>
              <span className="absolute top-1/2 left-0 w-5 h-px bg-current rotate-45" />
              <span className="absolute top-1/2 left-0 w-5 h-px bg-current -rotate-45" />
            </span>
            <span className="font-mono text-[11px] tracking-[0.32em] uppercase">
              {t("nav.close", { defaultValue: "Close" })}
            </span>
          </button>

          <Link
            to="/"
            className="font-display text-2xl md:text-3xl uppercase text-parchment hover:text-parchment/80 transition-colors duration-500"
            style={{ fontWeight: 700, letterSpacing: "0.18em" }}
          >
            {t("brand.name")}
          </Link>

          <div className="flex items-center gap-3 text-parchment">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>

        <nav className="relative h-[calc(100%-6rem)] flex items-center">
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
                      `group inline-flex items-baseline gap-6 font-display uppercase text-5xl md:text-7xl lg:text-8xl transition-colors duration-500 ${
                        isActive ? "text-parchment" : "text-parchment/85 hover:text-parchment"
                      }`
                    }
                    style={{ fontWeight: 700, letterSpacing: "0.02em", lineHeight: 0.95 }}
                  >
                    <span className="font-mono text-[10px] tracking-[0.32em] text-parchment/40 group-hover:text-parchment/70 transition-colors">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>{t(`nav.${item.key}`)}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
