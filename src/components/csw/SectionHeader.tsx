import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title?: string;
  body?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export const SectionHeader = ({ eyebrow, title, body, align = "left", children }: SectionHeaderProps) => {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "text-start";
  return (
    <div className={`max-w-3xl flex flex-col ${alignment}`}>
      {eyebrow && (
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      )}
      {title && (
        <h2 className="display text-3xl md:text-5xl lg:text-6xl">{title}</h2>
      )}
      {body && (
        <p className="mt-8 text-base md:text-lg text-ink-soft leading-[1.8] max-w-2xl">{body}</p>
      )}
      {children}
    </div>
  );
};
