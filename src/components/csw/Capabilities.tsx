import { useTranslation } from "react-i18next";
import capStrategy from "@/assets/cap-strategy.jpg";
import capProductDevelopment from "@/assets/cap-product-development.jpg";
import capAiSystems from "@/assets/cap-ai-systems.jpg";

/**
 * Bugatti-pattern Capabilities: three monumental visual cards on pure ground,
 * no hairlines, no numbering. Image → uppercase title → body. The locale's
 * capabilities.items array is mapped 1:1 onto three captioned visuals;
 * extra items render as a clean text manifest below for 12-language fidelity.
 */
export const Capabilities = () => {
  const { t } = useTranslation();
  const items = t("capabilities.items", { returnObjects: true }) as string[];
  const images = [capStrategy, capProductDevelopment, capAiSystems];
  const captions = t("capabilities.captions", { returnObjects: true }) as
    | string[]
    | Record<string, never>;
  const captionList = Array.isArray(captions) ? captions : [];
  const featured = items.slice(0, 3);
  const rest = items.slice(3);

  return (
    <section id="capabilities" className="relative bg-background border-b border-hairline-soft">
      <div className="container-csw py-32 md:py-44">
        <div className="max-w-5xl">
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-ink-muted mb-8">
            {t("capabilities.eyebrow")}
          </div>
          <h2
            className="font-display uppercase text-ink leading-[0.95] text-4xl md:text-6xl lg:text-7xl"
            style={{ fontWeight: 700, letterSpacing: "0.005em" }}
          >
            {t("capabilities.title")}
          </h2>
          <p className="mt-10 text-base md:text-lg text-ink-soft leading-[1.85] max-w-2xl">
            {t("capabilities.body")}
          </p>
        </div>

        <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-14">
          {featured.map((title, i) => (
            <article key={i} className="group flex flex-col">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={images[i]}
                  alt={title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <h3
                className="mt-8 font-display uppercase text-ink leading-[1.05] text-xl md:text-2xl lg:text-[1.7rem]"
                style={{ fontWeight: 700, letterSpacing: "0.005em" }}
              >
                {title}
              </h3>
              {captionList[i] && (
                <p className="mt-4 text-sm md:text-[15px] text-ink-soft leading-[1.85] max-w-md">
                  {captionList[i]}
                </p>
              )}
            </article>
          ))}
        </div>

        {rest.length > 0 && (
          <ul className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {rest.map((item, i) => (
              <li
                key={i}
                className="font-display uppercase text-ink leading-[1.1] text-base md:text-lg"
                style={{ fontWeight: 600, letterSpacing: "0.005em" }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
