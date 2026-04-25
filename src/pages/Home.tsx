import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Seo } from "@/components/csw/Seo";
import { HeroFilm } from "@/components/csw/HeroFilm";
import { HomeSection } from "@/components/csw/HomeSection";
import architecture from "@/assets/cinema-architecture-1.jpg";
import dataLattice from "@/assets/cinema-data-lattice.jpg";
import corridor from "@/assets/cinema-corridor.jpg";
import drafting from "@/assets/cinema-drafting.jpg";
import skyline from "@/assets/cinema-skyline.jpg";
import obsidian from "@/assets/cinema-obsidian-veins.jpg";
import globalNetwork from "@/assets/cinema-global-network.jpg";

const Home = () => {
  const { t } = useTranslation();
  const reach = t("home.reach.metrics", { returnObjects: true }) as Array<{ value: string; label: string }>;
  const arenas = t("home.domains.items", { returnObjects: true }) as Array<{ code: string; title: string; body: string }>;
  const ventures = t("home.ventures.items", { returnObjects: true }) as Array<{ name: string; sector: string; status: string; description: string }>;
  const intel = t("home.intelligence.steps", { returnObjects: true }) as Array<{ code: string; title: string; body: string }>;
  const live = t("home.live.items", { returnObjects: true }) as Array<{ category: string; date: string; title: string }>;
  const lanes = ["partnerships", "institutions", "media", "strategic"] as const;

  return (
    <div className="bg-background text-foreground">
      <Seo titleKey="seo.home.title" descriptionKey="seo.home.description" />
      <HeroFilm />

      <HomeSection
        index="02"
        eyebrow={t("home.world.eyebrow")}
        title={t("home.world.title")}
        body={t("home.world.body")}
        imageSrc={architecture}
        imageAspect="aspect-[21/6]"
        imagePosition="center 40%"
      />

      <HomeSection
        index="03"
        eyebrow={t("home.domains.eyebrow")}
        title={t("home.domains.title")}
        body={t("home.domains.body")}
        imageSrc={dataLattice}
        imageAspect="aspect-[21/5]"
        tone="muted"
      >
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
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
      </HomeSection>

      <HomeSection
        index="04"
        eyebrow={t("home.ventures.eyebrow")}
        title={t("home.ventures.title")}
        body={t("home.ventures.body")}
        imageSrc={corridor}
        imageAspect="aspect-[21/5]"
        imagePosition="center 60%"
      >
        <div className="divide-y divide-border border-y border-border max-w-5xl w-full">
          {ventures.slice(0, 4).map((v, i) => (
            <div key={v.name} className="grid grid-cols-1 gap-4 py-7 md:grid-cols-12 md:gap-6">
              <div className="font-mono text-[10px] tracking-[0.32em] text-muted-foreground pt-1 md:col-span-1">
                0{i + 1}
              </div>
              <div className="md:col-span-5">
                <div
                  className="font-display uppercase text-foreground text-lg md:text-2xl leading-[1.05] mb-2"
                  style={{ fontWeight: 600 }}
                >
                  {v.name}
                </div>
                <p className="text-[12px] leading-[1.7] text-muted-foreground max-w-md">{v.description}</p>
              </div>
              <div className="text-xs text-muted-foreground pt-1 md:col-span-3">{v.sector}</div>
              <div className="text-xs text-muted-foreground pt-1 md:col-span-3">{v.status}</div>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection
        index="05"
        eyebrow={t("home.intelligence.eyebrow")}
        title={t("home.intelligence.title")}
        body={t("home.intelligence.body")}
        imageSrc={drafting}
        imageAspect="aspect-[21/5]"
        tone="muted"
      >
        <div className="grid grid-cols-1 gap-px bg-border max-w-6xl w-full md:grid-cols-5">
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
      </HomeSection>

      <HomeSection
        index="06"
        eyebrow={t("home.reach.eyebrow")}
        title={t("home.reach.title")}
        body={t("home.reach.body")}
        imageSrc={skyline}
        imageAspect="aspect-[21/5]"
        imagePosition="center 35%"
      >
        <div className="grid grid-cols-1 gap-px bg-border max-w-4xl w-full md:grid-cols-3">
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
      </HomeSection>

      <HomeSection
        index="07"
        eyebrow={t("home.live.eyebrow")}
        title={t("home.live.title")}
        body=""
        imageSrc={obsidian}
        imageAspect="aspect-[21/5]"
        tone="muted"
      >
        <div className="grid grid-cols-1 gap-px bg-border max-w-6xl w-full md:grid-cols-3">
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
      </HomeSection>

      <HomeSection
        index="08"
        eyebrow={t("home.entry.eyebrow")}
        title={t("home.entry.title")}
        body={t("home.entry.body")}
        imageSrc={globalNetwork}
        imageAspect="aspect-[21/6]"
      >
        <div className="mt-2 flex flex-wrap gap-4">
          <Link to="/contact" className="btn-pill">
            {t("home.entry.cta")}
          </Link>
          <Link to="/our-model" className="btn-pill">
            {t("home.hero.secondaryCta")}
          </Link>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-x-10 gap-y-4 max-w-4xl md:grid-cols-4">
          {lanes.map((lane) => (
            <div key={lane} className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
              {t(`home.entry.lanes.${lane}`)}
            </div>
          ))}
        </div>
      </HomeSection>
    </div>
  );
};

export default Home;
