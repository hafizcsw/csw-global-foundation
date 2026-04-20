interface ImageStripProps {
  src: string;
  alt?: string;
  /** Aspect ratio class. Default 21/6 — narrow letterbox. */
  aspect?: string;
  /** Tailwind max-width class for the strip container. */
  maxWidth?: string;
  position?: string;
}

/**
 * ImageStrip — Bugatti-pattern small letterbox image used inline in
 * editorial chapters. NOT a background. Sits above the headline as a
 * controlled visual cue. Respects light/dark theme via background tokens.
 */
export const ImageStrip = ({
  src,
  alt = "",
  aspect = "aspect-[21/6]",
  maxWidth = "max-w-3xl",
  position = "center",
}: ImageStripProps) => {
  return (
    <div className={`${maxWidth} w-full ${aspect} overflow-hidden bg-secondary/40 mb-10 md:mb-14`}>
      <img
        src={src}
        alt={alt}
        aria-hidden={alt ? undefined : true}
        loading="lazy"
        className="w-full h-full object-cover select-none"
        style={{ objectPosition: position }}
      />
    </div>
  );
};
