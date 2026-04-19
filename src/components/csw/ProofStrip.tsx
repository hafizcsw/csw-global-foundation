import { useTranslation } from "react-i18next";

export const ProofStrip = () => {
  const { t } = useTranslation();
  const items = t("proof.items", { returnObjects: true }) as string[];
  return (
    <section className="border-b border-hairline bg-secondary/40">
      <div className="container-csw py-6">
        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-3">
          {items.map((item, idx) => (
            <span
              key={idx}
              className="text-[11px] uppercase tracking-[0.22em] text-ink-soft"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
