import { useTranslation } from "react-i18next";
import { SectionHeader } from "./SectionHeader";

export const Capabilities = () => {
  const { t } = useTranslation();
  const items = t("capabilities.items", { returnObjects: true }) as string[];
  return (
    <section id="capabilities" className="border-b border-hairline">
      <div className="container-csw py-24 md:py-32">
        <SectionHeader
          eyebrow={t("capabilities.eyebrow")}
          title={t("capabilities.title")}
          body={t("capabilities.body")}
        />
        <ul className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
          {items.map((item, i) => (
            <li
              key={i}
              className="bg-background p-6 md:p-8 flex items-start gap-4 min-h-[120px]"
            >
              <span className="text-[11px] tracking-[0.22em] text-gold pt-1.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-xl text-ink leading-tight">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
