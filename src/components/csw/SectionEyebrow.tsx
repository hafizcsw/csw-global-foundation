import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface SectionEyebrowProps {
  /** i18n key for the parent group label (e.g. "nav.groups.house"). */
  groupKey: string;
  /** i18n key for the current section label (e.g. "nav.leadership"). */
  sectionKey: string;
}

/**
 * Slim persistent identity strip placed under the page header on
 * interior pages. Carries the cinematic→editorial transition by
 * mirroring the header's hairline + monospace caps language and
 * grounding the visitor in the institution's information architecture.
 *
 * Renders as a single line: HOME · GROUP · SECTION
 * RTL-safe — uses logical separators and inherits document direction.
 */
export const SectionEyebrow = ({ groupKey, sectionKey }: SectionEyebrowProps) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <nav
      aria-label="breadcrumb"
      className="relative bg-background border-b border-hairline-soft"
    >
      <div className="container-csw">
        <ol className="flex flex-wrap items-center gap-x-3 gap-y-1 py-4 font-mono text-[10px] uppercase tracking-[0.32em] text-ink-muted">
          <li>
            <Link
              to="/"
              className="transition-colors duration-500 hover:text-ink"
            >
              {t("brand.name")}
            </Link>
          </li>
          <li aria-hidden className="text-ink/30">·</li>
          <li className="text-ink-muted">{t(groupKey)}</li>
          <li aria-hidden className="text-ink/30">·</li>
          <li aria-current="page" className="text-ink">
            {t(sectionKey)}
          </li>
          <li aria-hidden className="ml-auto text-ink/30 hidden md:block">
            <span className="font-mono text-[9px] tracking-[0.4em]">
              {pathname}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
};
