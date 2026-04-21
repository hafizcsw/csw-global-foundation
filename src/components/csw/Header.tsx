import { useTranslation } from "react-i18next";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

import imgAbout from "@/assets/cinema-architecture-1.jpg";
import imgPortfolio from "@/assets/cinema-skyline.jpg";
import imgOurModel from "@/assets/cinema-data-lattice.jpg";
import imgLeadership from "@/assets/cinema-drafting.jpg";
import imgNews from "@/assets/cinema-corridor.jpg";
import imgCareers from "@/assets/cinema-obsidian-veins.jpg";
import imgContact from "@/assets/cinema-global-network.jpg";
import imgBrand from "@/assets/cinema-liquid-gold.jpg";

type NavGroup = {
  groupKey: string;
  items: { key: string; to: string; image: string }[];
};

const NAV_GROUPS: NavGroup[] = [
  {
    groupKey: "house",
    items: [
      { key: "about", to: "/about", image: imgAbout },
      { key: "ourModel", to: "/our-model", image: imgOurModel },
      { key: "leadership", to: "/leadership", image: imgLeadership },
    ],
  },
  {
    groupKey: "work",
    items: [
      { key: "portfolio", to: "/portfolio", image: imgPortfolio },
      { key: "news", to: "/news", image: imgNews },
    ],
  },
  {
    groupKey: "engage",
    items: [
      { key: "careers", to: "/careers", image: imgCareers },
      { key: "contact", to: "/contact", image: imgContact },
    ],
  },
];

const ALL_ITEMS = NAV_GROUPS.flatMap((g) => g.items);

export const Header = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverImage, setHoverImage] = useState<string>(imgBrand);
  const [hoverKey, setHoverKey] = useState<string | null>(null);
  const isFilmHero = pathname === "/";
  const isDark = theme === "dark";
  const homeText = isDark ? "text-parchment" : "text-ink";
  const homeTextHover = isDark ? "group-hover:text-parchment/80" : "group-hover:text-ink/70";

  useEffect(() => {
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

  // Reset preview image when menu opens/closes
  useEffect(() => {
    if (menuOpen) {
      setHoverImage(imgBrand);
      setHoverKey(null);
    }
  }, [menuOpen]);

  const onHome = isFilmHero;

  return (
    <>
      {/* ===== Header on hero ===== */}
      {onHome ? (
        <header
          className={`absolute top-0 left-0 right-0 z-40 transition-opacity duration-700 ${
            scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="container-csw relative flex items-center justify-between h-24">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={t("nav.menu", { defaultValue: "Menu" }) as string}
              className={`group inline-flex items-center gap-3 transition-colors duration-500 ${homeText} ${isDark ? "hover:text-parchment/70" : "hover:text-ink-soft"}`}
            >
              <span className="flex flex-col gap-[5px]" aria-hidden>
                <span className="block h-px w-7 bg-current" />
                <span className="block h-px w-7 bg-current" />
              </span>
              <span className="font-mono text-[11px] tracking-[0.32em] uppercase">
                {t("nav.menu", { defaultValue: "Menu" })}
              </span>
            </button>

            <Link
              to="/"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
            >
              <span
                className={`font-display text-2xl md:text-3xl uppercase transition-colors duration-500 whitespace-nowrap ${homeText} ${homeTextHover}`}
                style={{ fontWeight: 700, letterSpacing: "0.18em" }}
              >
                {t("brand.name")}
              </span>
            </Link>

            <div className={`flex items-center gap-3 ${homeText}`}>
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        </header>
      ) : (
        <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-xl border-b border-hairline-soft">
          <div className="container-csw flex items-center justify-between h-20">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={t("nav.menu", { defaultValue: "Menu" }) as string}
              className="group inline-flex items-center gap-3 text-ink hover:text-ink-soft transition-colors duration-500"
            >
              <span className="flex flex-col gap-[5px]" aria-hidden>
                <span className="block h-px w-7 bg-current" />
                <span className="block h-px w-7 bg-current" />
              </span>
              <span className="font-mono text-[11px] tracking-[0.32em] uppercase">
                {t("nav.menu", { defaultValue: "Menu" })}
              </span>
            </button>

            <Link to="/" className="absolute left-1/2 -translate-x-1/2 group">
              <span
                className="font-display text-xl md:text-2xl uppercase text-ink group-hover:text-ink/70 transition-colors duration-500"
                style={{ fontWeight: 700, letterSpacing: "0.18em" }}
              >
                {t("brand.name")}
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        </header>
      )}

      {/* ===== Floating MENU pill on home after scroll ===== */}
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

      {/* ===== Bugatti-style full-screen menu ===== */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-700 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
      >
        {/* Background — parchment/light like Bugatti */}
        <div className="absolute inset-0 bg-background" />

        {/* Top bar */}
        <div className="relative flex items-center justify-between h-20 md:h-24 px-6 md:px-12 border-b border-hairline-soft">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close"
            className="group inline-flex items-center gap-3 text-ink hover:text-ink-soft transition-colors duration-500"
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
            className="absolute left-1/2 -translate-x-1/2 font-display text-xl md:text-2xl uppercase text-ink hover:text-ink/70 transition-colors duration-500"
            style={{ fontWeight: 700, letterSpacing: "0.18em" }}
          >
            {t("brand.name")}
          </Link>

          <div className="flex items-center gap-3 text-ink">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>

        {/* Body — left list / right preview */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,460px)_1fr] h-[calc(100%-5rem)] md:h-[calc(100%-6rem)]">
          {/* LEFT — sectioned list */}
          <div className="overflow-y-auto px-6 md:px-12 py-10 md:py-14 border-r border-hairline-soft">
            {NAV_GROUPS.map((group, gIdx) => (
              <div key={group.groupKey} className={gIdx > 0 ? "mt-12" : ""}>
                <div
                  className="font-mono text-[10px] tracking-[0.4em] uppercase text-ink-soft/70 mb-5"
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateY(0)" : "translateY(8px)",
                    transition: `opacity 600ms ease ${100 + gIdx * 80}ms, transform 600ms ease ${100 + gIdx * 80}ms`,
                  }}
                >
                  {t(`nav.groups.${group.groupKey}`, {
                    defaultValue:
                      group.groupKey === "house"
                        ? "LA MAISON"
                        : group.groupKey === "work"
                        ? "WORK"
                        : "ENGAGE",
                  })}
                </div>
                <ul className="flex flex-col">
                  {group.items.map((item, idx) => {
                    const itemIndex = ALL_ITEMS.findIndex((i) => i.key === item.key);
                    const isHovered = hoverKey === item.key;
                    return (
                      <li
                        key={item.key}
                        style={{
                          opacity: menuOpen ? 1 : 0,
                          transform: menuOpen ? "translateY(0)" : "translateY(14px)",
                          transition: `opacity 600ms ease ${180 + itemIndex * 60}ms, transform 600ms ease ${180 + itemIndex * 60}ms`,
                        }}
                      >
                        <NavLink
                          to={item.to}
                          onMouseEnter={() => {
                            setHoverImage(item.image);
                            setHoverKey(item.key);
                          }}
                          onFocus={() => {
                            setHoverImage(item.image);
                            setHoverKey(item.key);
                          }}
                          className={({ isActive }) =>
                            `group flex items-center justify-between gap-6 py-4 border-b border-hairline-soft transition-colors duration-500 ${
                              isActive || isHovered ? "text-ink" : "text-ink-soft hover:text-ink"
                            }`
                          }
                        >
                          <span
                            className="font-display uppercase text-2xl md:text-3xl"
                            style={{ fontWeight: 600, letterSpacing: "0.01em" }}
                          >
                            {t(`nav.${item.key}`)}
                          </span>
                          <span
                            className={`font-mono text-[10px] tracking-[0.3em] transition-transform duration-500 ${
                              isHovered ? "translate-x-1" : ""
                            }`}
                            aria-hidden
                          >
                            ›
                          </span>
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            {/* Footer micro-links inside the menu */}
            <div className="mt-14 pt-8 border-t border-hairline-soft flex flex-wrap gap-x-8 gap-y-3 text-ink-soft">
              <Link to="/contact" className="font-mono text-[10px] tracking-[0.3em] uppercase hover:text-ink transition-colors">
                {t("nav.contact")}
              </Link>
              <Link to="/careers" className="font-mono text-[10px] tracking-[0.3em] uppercase hover:text-ink transition-colors">
                {t("nav.careers")}
              </Link>
            </div>
          </div>

          {/* RIGHT — cinematic preview */}
          <div className="relative hidden lg:block overflow-hidden bg-obsidian">
            {/* Cross-faded preview images */}
            {[imgBrand, ...ALL_ITEMS.map((i) => i.image)]
              .filter((src, i, arr) => arr.indexOf(src) === i)
              .map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-out"
                  style={{ opacity: hoverImage === src ? 1 : 0 }}
                />
              ))}
            {/* Tonal grade for legibility */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, hsl(220 30% 3% / 0.15) 0%, hsl(220 30% 3% / 0.55) 100%)",
              }}
            />
            {/* Caption */}
            <div className="absolute bottom-10 left-10 right-10 text-parchment">
              <div
                className="font-mono text-[10px] tracking-[0.4em] uppercase text-parchment/70 mb-3"
                key={`eyebrow-${hoverKey ?? "brand"}`}
                style={{ animation: "fadeIn 700ms ease both" }}
              >
                {hoverKey
                  ? t(`nav.eyebrow.${hoverKey}`, { defaultValue: t("brand.tagline", { defaultValue: "" }) })
                  : t("brand.tagline", { defaultValue: "" })}
              </div>
              <div
                className="font-display uppercase text-3xl md:text-5xl leading-[0.95]"
                style={{ fontWeight: 700, letterSpacing: "0.01em" }}
                key={`title-${hoverKey ?? "brand"}`}
              >
                {hoverKey ? t(`nav.${hoverKey}`) : t("brand.name")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
