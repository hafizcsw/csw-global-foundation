import { useTranslation } from "react-i18next";

export const ProofStrip = () => {
  const { t } = useTranslation();
  const items = t("proof.items", { returnObjects: true }) as string[];
  return (
    <section className="relative border-y border-hairline-soft bg-obsidian-soft/50">
      <div className="container-csw py-8">
        <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              {idx > 0 && (
                <span className="hidden md:inline-block h-1 w-1 rounded-full bg-gold/60" aria-hidden />
              )}
              <span className="text-[10px] uppercase tracking-[0.32em] text-ink-soft">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
