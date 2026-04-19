import { useTranslation } from "react-i18next";
import { SectionHeader } from "./SectionHeader";

export const Capabilities = () => {
  const { t } = useTranslation();
  const items = t("capabilities.items", { returnObjects: true }) as string[];
  return (
    <section id="capabilities" className="relative border-b border-hairline-soft">
      <div className="container-csw py-32 md:py-40">
        <SectionHeader
          eyebrow={t("capabilities.eyebrow")}
          title={t("capabilities.title")}
          body={t("capabilities.body")}
        />
        <ul className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <li
              key={i}
              className="luxury-card p-8 md:p-10 flex flex-col gap-6 min-h-[180px] group"
            >
              <span className="text-[10px] tracking-[0.32em] uppercase text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-xl md:text-2xl text-ink leading-tight group-hover:text-gold transition-colors duration-700">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
