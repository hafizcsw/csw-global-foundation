import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Seo } from "@/components/csw/Seo";
import { HeroFilm } from "@/components/csw/HeroFilm";
import { SnapChapter } from "@/components/csw/SnapChapter";
import { ImageStrip } from "@/components/csw/ImageStrip";
import architecture from "@/assets/cinema-architecture-1.jpg";
import dataLattice from "@/assets/cinema-data-lattice.jpg";
import corridor from "@/assets/cinema-corridor.jpg";
import drafting from "@/assets/cinema-drafting.jpg";
import skyline from "@/assets/cinema-skyline.jpg";
import obsidian from "@/assets/cinema-obsidian-veins.jpg";
import globalNetwork from "@/assets/cinema-global-network.jpg";

/**
 * CSW Global — Bugatti-pattern chaptered homepage.
 * Hero stays cinematic (video). All subsequent chapters follow the site
 * theme (light/dark via ThemeToggle) and use small contained ImageStrips
 * instead of full-bleed image backdrops. Body of the site is theme-driven.
 */
const Home = () => {
  const { t } = useTranslation();
  const reach = t("home.reach.metrics", { returnObjects: true }) as Array<{ value: string; label: string }>;
  const arenas = t("home.domains.items", { returnObjects: true }) as Array<{ code: string; title: string; body: string }>;
  const ventures = t("home.ventures.items", { returnObjects: true }) as Array<{ name: string; sector: string; status: string; description: string }>;
  const intel = t("home.intelligence.steps", { returnObjects: true }) as Array<{ code: string; title: string; body: string }>;
  const live = t("home.live.items", { returnObjects: true }) as Array<{ category: string; date: string; title: string }>;
  const lanes = ["partnerships", "institutions", "media", "strategic"] as const;

  return (
    <div className="snap-stage bg-background text-foreground">
      <Seo titleKey="seo.home.title" descriptionKey="seo.home.description" />
      {/* Chapter 01 — Sovereign Hero (video, locked dark) */}
      <HeroFilm />

      {/* Chapter 02 — Enter the World */}
      <SnapChapter index="02" overlay="none" align="center" textColor="ink">
        <ImageStrip src={architecture} aspect="aspect-[21/6]" maxWidth="max-w-3xl" position="center 40%" />
        <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8">
          {t("home.world.eyebrow")}
        </div>
        <h2
          className="font-display uppercase text-foreground leading-[0.95] text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[4.75rem] max-w-[18ch]"
          style={{ fontWeight: 600, letterSpacing: "0.005em" }}
        >
          {t("home.world.title")}
        </h2>
        <p className="mt-10 max-w-2xl text-base md:text-lg leading-[1.85] text-muted-foreground">
          {t("home.world.body")}
        </p>
      </SnapChapter>

      {/* Chapter 03 — Strategic Arenas */}
      <SnapChapter index="03" overlay="none" align="center" textColor="ink">
        <ImageStrip src={dataLattice} aspect="aspect-[21/5]" maxWidth="max-w-3xl" />
        <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-6">
          {t("home.domains.eyebrow")}
        </div>
        <h2
          className="font-display uppercase text-foreground leading-[0.95] text-[1.75rem] md:text-[2.5rem] lg:text-[3.25rem] max-w-[22ch] mb-8"
          style={{ fontWeight: 600 }}
        >
          {t("home.domains.title")}
        </h2>
        <p className="max-w-2xl text-sm md:text-base leading-[1.8] text-muted-foreground mb-12">
          {t("home.domains.body")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 max-w-6xl">
          {arenas.slice(0, 6).map((d) => (
            <div key={d.code} className="border-t border-border pt-5">
              <div className="font-mono text-[10px] tracking-[0.32em] text-muted-foreground mb-3">{d.code}</div>
              <div
                className="font-display uppercase text-foreground text-lg md:text-xl leading-[1.1] mb-3"
                style={{ fontWeight: 600, letterSpacing: "0.01em" }}
              >
                {d.title}
              </div>
              <p className="text-[13px] leading-[1.7] text-muted-foreground">{d.body}</p>
            </div>
          ))}
        </div>
      </SnapChapter>

      {/* Chapter 04 — Flagship Ventures */}
      <SnapChapter index="04" overlay="none" align="center" textColor="ink">
        <ImageStrip src={corridor} aspect="aspect-[21/5]" maxWidth="max-w-3xl" position="center 60%" />
        <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-6">
          {t("home.ventures.eyebrow")}
        </div>
        <h2
          className="font-display uppercase text-foreground leading-[0.95] text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] max-w-[22ch] mb-6"
          style={{ fontWeight: 600 }}
        >
          {t("home.ventures.title")}
        </h2>
        <p className="max-w-2xl text-sm md:text-base leading-[1.8] text-muted-foreground mb-10">
          {t("home.ventures.body")}
        </p>
        <div className="divide-y divide-border border-y border-border max-w-5xl w-full">
          {ventures.slice(0, 4).map((v, i) => (
            <div key={v.name} className="grid grid-cols-12 gap-6 py-7">
              <div className="col-span-1 font-mono text-[10px] tracking-[0.32em] text-muted-foreground pt-1">
                0{i + 1}
              </div>
              <div className="col-span-11 md:col-span-5">
                <div
                  className="font-display uppercase text-foreground text-lg md:text-2xl leading-[1.05] mb-2"
                  style={{ fontWeight: 600 }}
                >
                  {v.name}
                </div>
                <p className="text-[12px] leading-[1.7] text-muted-foreground max-w-md">{v.description}</p>
              </div>
              <div className="col-span-6 md:col-span-3 text-xs text-muted-foreground pt-1">{v.sector}</div>
              <div className="col-span-6 md:col-span-3 text-xs text-muted-foreground pt-1">{v.status}</div>
            </div>
          ))}
        </div>
      </SnapChapter>

      {/* Chapter 05 — Operating Intelligence */}
      <SnapChapter index="05" overlay="none" align="center" textColor="ink">
        <ImageStrip src={drafting} aspect="aspect-[21/5]" maxWidth="max-w-3xl" />
        <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-6">
          {t("home.intelligence.eyebrow")}
        </div>
        <h2
          className="font-display uppercase text-foreground leading-[0.95] text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] max-w-[22ch] mb-6"
          style={{ fontWeight: 600 }}
        >
          {t("home.intelligence.title")}
        </h2>
        <p className="max-w-2xl text-sm md:text-base leading-[1.8] text-muted-foreground mb-12">
          {t("home.intelligence.body")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-border max-w-6xl w-full">
          {intel.map((s) => (
            <div key={s.code} className="bg-background p-7 min-h-[220px] flex flex-col">
              <div className="font-mono text-[10px] tracking-[0.32em] text-muted-foreground mb-6">{s.code}</div>
              <div
                className="font-display uppercase text-foreground text-base md:text-lg leading-[1.15] mb-4"
                style={{ fontWeight: 600 }}
              >
                {s.title}
              </div>
              <p className="text-[12px] leading-[1.65] text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </SnapChapter>

      {/* Chapter 06 — Institutional Reach */}
      <SnapChapter index="06" overlay="none" align="center" textColor="ink">
        <ImageStrip src={skyline} aspect="aspect-[21/5]" maxWidth="max-w-3xl" position="center 35%" />
        <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-6">
          {t("home.reach.eyebrow")}
        </div>
        <h2
          className="font-display uppercase text-foreground leading-[0.95] text-[1.75rem] md:text-[2.5rem] lg:text-[3.25rem] max-w-[20ch] mb-6"
          style={{ fontWeight: 600 }}
        >
          {t("home.reach.title")}
        </h2>
        <p className="max-w-2xl text-sm md:text-base leading-[1.8] text-muted-foreground mb-10">
          {t("home.reach.body")}
        </p>
        <div className="grid grid-cols-3 gap-px bg-border max-w-4xl w-full">
          {reach.map((m) => (
            <div key={m.label} className="bg-background px-8 py-10">
              <div
                className="font-display uppercase text-foreground text-3xl md:text-4xl lg:text-5xl leading-none"
                style={{ fontWeight: 600 }}
              >
                {m.value}
              </div>
              <div className="mt-4 font-mono text-[9px] tracking-[0.32em] uppercase text-muted-foreground">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </SnapChapter>

      {/* Chapter 07 — CSW Live */}
      <SnapChapter index="07" overlay="none" align="center" textColor="ink">
        <ImageStrip src={obsidian} aspect="aspect-[21/5]" maxWidth="max-w-3xl" />
        <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-6">
          {t("home.live.eyebrow")}
        </div>
        <h2
          className="font-display uppercase text-foreground leading-[0.95] text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] max-w-[20ch] mb-12"
          style={{ fontWeight: 600 }}
        >
          {t("home.live.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border max-w-6xl w-full">
          {live.slice(0, 3).map((it, i) => (
            <article key={i} className="bg-background p-8 min-h-[220px] flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-muted-foreground">
                  {it.category}
                </span>
                <span className="h-px w-5 bg-border" />
                <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-muted-foreground">
                  {it.date}
                </span>
              </div>
              <div
                className="font-display uppercase text-foreground text-base md:text-lg leading-[1.2] mt-8"
                style={{ fontWeight: 600 }}
              >
                {it.title}
              </div>
            </article>
          ))}
        </div>
      </SnapChapter>

      {/* Chapter 08 — Strategic Entry */}
      <SnapChapter index="08" overlay="none" align="center" textColor="ink">
        <ImageStrip src={globalNetwork} aspect="aspect-[21/6]" maxWidth="max-w-3xl" />
        <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8">
          {t("home.entry.eyebrow")}
        </div>
        <h2
          className="font-display uppercase text-foreground leading-[0.95] text-[2rem] md:text-[3rem] lg:text-[4rem] max-w-[16ch]"
          style={{ fontWeight: 700, letterSpacing: "0.005em" }}
        >
          {t("home.entry.title")}
        </h2>
        <p className="mt-10 max-w-xl text-base md:text-lg leading-[1.85] text-muted-foreground">
          {t("home.entry.body")}
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link to="/contact" className="btn-pill">
            {t("home.entry.cta")}
          </Link>
          <Link to="/our-model" className="btn-pill">
            {t("home.hero.secondaryCta")}
          </Link>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-4 max-w-4xl">
          {lanes.map((lane) => (
            <div key={lane} className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
              {t(`home.entry.lanes.${lane}`)}
            </div>
          ))}
        </div>
      </SnapChapter>
    </div>
  );
};

export default Home;
