import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useTheme } from "./ThemeProvider";

export const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const isDark = theme === "dark";
  const label = isDark ? t("theme.toLight") : t("theme.toDark");
  const isFilmHero = pathname === "/";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`relative inline-flex h-9 w-9 items-center justify-center border transition-all duration-500 ${isFilmHero ? "border-parchment/30 text-parchment/75 hover:text-gold hover:border-gold" : "border-hairline text-ink-soft hover:text-gold hover:border-gold"}`}
    >
      <Sun
        className={`absolute h-4 w-4 transition-all duration-500 ${
          isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
        }`}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all duration-500 ${
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
        }`}
      />
    </button>
  );
};
