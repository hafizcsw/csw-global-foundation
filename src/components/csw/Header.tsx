import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Header = () => {
  const { t } = useTranslation();
  const navItems = [
    { key: "portfolio", href: "#portfolio" },
    { key: "thesis", href: "#thesis" },
    { key: "operatingModel", href: "#operating-model" },
    { key: "capabilities", href: "#capabilities" },
    { key: "careers", href: "#careers" },
    { key: "contact", href: "#contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-hairline">
      <div className="container-csw flex items-center justify-between h-16">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-serif text-xl tracking-wide text-ink">{t("brand.name")}</span>
          <span className="hidden md:inline text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            {t("brand.tagline")}
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-xs uppercase tracking-[0.18em] text-ink-soft hover:text-ink transition-colors"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};
