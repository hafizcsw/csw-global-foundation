import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title?: string;
  body?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export const SectionHeader = ({ eyebrow, title, body, align = "left", children }: SectionHeaderProps) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-start";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && <div className="eyebrow mb-6">{eyebrow}</div>}
      {title && <h2 className="display text-3xl md:text-4xl lg:text-5xl text-ink">{title}</h2>}
      {body && <p className="mt-6 text-base md:text-lg text-ink-soft leading-relaxed max-w-2xl">{body}</p>}
      {children}
    </div>
  );
};
