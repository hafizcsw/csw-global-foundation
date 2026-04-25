import { ReactNode, forwardRef } from "react";
import { ImageStrip } from "./ImageStrip";

interface HomeSectionProps {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt?: string;
  imageAspect?: string;
  imagePosition?: string;
  children?: ReactNode;
  tone?: "default" | "muted";
  id?: string;
}

export const HomeSection = forwardRef<HTMLElement, HomeSectionProps>(function HomeSection(
  {
    index,
    eyebrow,
    title,
    body,
    imageSrc,
    imageAlt,
    imageAspect = "aspect-[21/6]",
    imagePosition = "center",
    children,
    tone = "default",
    id,
  },
  ref,
) {
  return (
    <section
      ref={ref}
      id={id}
      className={`border-t border-border/70 ${tone === "muted" ? "bg-secondary/35" : "bg-background"}`}
    >
      <div className="container-csw py-16 md:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[96px_minmax(0,1fr)] lg:gap-12">
          <div className="flex items-start lg:pt-3">
            <div className="font-mono text-[10px] tracking-[0.36em] uppercase text-muted-foreground">
              {index}
            </div>
          </div>

          <div className="space-y-10 md:space-y-12">
            <ImageStrip
              src={imageSrc}
              alt={imageAlt ?? title}
              aspect={imageAspect}
              maxWidth="max-w-4xl"
              position={imagePosition}
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-start">
              <div className="space-y-5">
                <div className="font-mono text-[10px] tracking-[0.36em] uppercase text-muted-foreground">
                  {eyebrow}
                </div>
                <h2
                  className="font-display text-[1.9rem] leading-[0.95] text-foreground md:text-[2.8rem] lg:text-[3.5rem] max-w-[14ch]"
                  style={{ fontWeight: 600, letterSpacing: "0.005em" }}
                >
                  {title}
                </h2>
              </div>

              {body ? (
                <p className="max-w-xl text-sm leading-[1.9] text-muted-foreground md:text-base lg:pt-1">
                  {body}
                </p>
              ) : (
                <div />
              )}
            </div>

            {children ? <div>{children}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
});