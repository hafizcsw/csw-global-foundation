import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import ogImage from "@/assets/og-csw-global.jpg";

interface SeoProps {
  /** i18n key for the page title (will be composed with brand). */
  titleKey: string;
  /** i18n key for the meta description. */
  descriptionKey: string;
}

/**
 * Per-page SEO. All copy comes from i18n — no fabricated claims.
 * Uses brand.name as the suffix and current locale for og:locale.
 */
export const Seo = ({ titleKey, descriptionKey }: SeoProps) => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const brand = t("brand.name", { defaultValue: "CSW Global" });
  const pageTitle = t(titleKey, { defaultValue: brand });
  const fullTitle = pathname === "/" ? `${brand} — ${t("meta.tagline", { defaultValue: pageTitle })}` : `${pageTitle} · ${brand}`;
  const description = t(descriptionKey, { defaultValue: t("meta.description", { defaultValue: "" }) });
  const url = typeof window !== "undefined" ? `${window.location.origin}${pathname}` : pathname;
  const ogUrl = typeof window !== "undefined" ? `${window.location.origin}${ogImage}` : ogImage;

  return (
    <Helmet>
      <html lang={i18n.language} dir={i18n.dir()} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={brand} />
      <meta property="og:locale" content={i18n.language} />
      <meta property="og:image" content={ogUrl} />
      <meta property="og:image:width" content="1216" />
      <meta property="og:image:height" content="640" />
      <meta property="og:image:alt" content={brand} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogUrl} />
    </Helmet>
  );
};
