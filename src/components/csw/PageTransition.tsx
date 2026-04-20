/**
 * PageTransition — cinematic obsidian→parchment fade band.
 * Placed between the dark PageHeader and the first flat institutional
 * section to remove the abrupt cinematic→editorial jump and create
 * page-to-page continuity across the institution.
 */
export const PageTransition = () => (
  <div aria-hidden className="relative h-24 md:h-32 -mt-px overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(180deg, hsl(220 25% 3%) 0%, hsl(var(--background)) 100%)",
      }}
    />
    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-px w-16 bg-gold/60" />
  </div>
);
