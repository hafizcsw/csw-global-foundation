import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title?: string;
  body?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  children?: ReactNode;
}

/**
 * Bugatti-grade section header — Antonio uppercase, hairline accent.
 */
export const SectionHeader = ({
  eyebrow,
  title,
  body,
  align = "left",
  tone = "light",
  children,
}: SectionHeaderProps) => {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "text-start";
  const eyebrowColor = tone === "dark" ? "text-parchment/60" : "text-ink-muted";
  const titleColor = tone === "dark" ? "text-parchment" : "text-ink";
  const bodyColor = tone === "dark" ? "text-parchment/70" : "text-ink-soft";
  const ruleColor = tone === "dark" ? "bg-parchment/40" : "bg-ink/40";

  return (
    <div className={`max-w-4xl flex flex-col ${alignment}`}>
      {eyebrow && (
        <div className="flex items-center gap-3 mb-8">
          <span className={`h-px w-10 ${ruleColor}`} />
          <span className={`font-mono text-[10px] uppercase tracking-[0.36em] ${eyebrowColor}`}>
            {eyebrow}
          </span>
        </div>
      )}
      {title && (
        <h2
          className={`font-display uppercase ${titleColor} leading-[0.95] text-3xl md:text-5xl lg:text-6xl`}
          style={{ fontWeight: 600, letterSpacing: "0.005em" }}
        >
          {title}
        </h2>
      )}
      {body && (
        <p className={`mt-8 text-base md:text-lg ${bodyColor} leading-[1.85] max-w-2xl`}>{body}</p>
      )}
      {children}
    </div>
  );
};
