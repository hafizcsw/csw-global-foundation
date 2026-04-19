import { useTranslation } from "react-i18next";
import { SectionHeader } from "./SectionHeader";

export const Capabilities = () => {
  const { t } = useTranslation();
  const items = t("capabilities.items", { returnObjects: true }) as string[];
  return (
    <section id="capabilities" className="relative bg-background border-b border-hairline-soft">
      <div className="container-csw py-32 md:py-44">
        <SectionHeader
          eyebrow={t("capabilities.eyebrow")}
          title={t("capabilities.title")}
          body={t("capabilities.body")}
        />
        <ul className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline-soft border border-hairline-soft">
          {items.map((item, i) => (
            <li
              key={i}
              className="bg-background p-8 md:p-10 flex flex-col gap-8 min-h-[200px] transition-colors duration-700 hover:bg-secondary/40"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="font-display uppercase text-ink leading-[1.1] text-lg md:text-xl"
                style={{ fontWeight: 600, letterSpacing: "0.005em" }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
