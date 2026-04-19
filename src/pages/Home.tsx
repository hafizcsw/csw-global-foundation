import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HeroFilm } from "@/components/csw/HeroFilm";
import { SnapChapter } from "@/components/csw/SnapChapter";

/**
 * CSW Global — Bugatti-grade chaptered cinematic homepage.
 * The page is a snap-scroll stage of 8 full-viewport chapters.
 * No automotive imagery — abstract gradient/landscape backgrounds only.
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
    <div className="snap-stage bg-obsidian text-parchment">
      {/* Chapter 01 — Sovereign Hero */}
      <HeroFilm />

      {/* Chapter 02 — Enter the World */}
      <SnapChapter
        index="02"
        background={
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 30%, hsl(220 30% 12%) 0%, hsl(220 25% 5%) 60%, hsl(220 22% 3%) 100%)",
            }}
          />
        }
        overlay="none"
        align="center"
      >
        <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-parchment/55 mb-10">
          {t("home.world.eyebrow")}
        </div>
        <h2
          className="font-display uppercase text-parchment leading-[0.9] text-[3rem] md:text-[5rem] lg:text-[7rem] xl:text-[8rem] max-w-[16ch]"
          style={{ fontWeight: 600, letterSpacing: "0.005em" }}
        >
          {t("home.world.title")}
        </h2>
        <p className="mt-12 max-w-2xl text-base md:text-lg leading-[1.85] text-parchment/65">
          {t("home.world.body")}
        </p>
      </SnapChapter>

      {/* Chapter 03 — Strategic Arenas */}
      <SnapChapter
        index="03"
        background={
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, hsl(220 22% 4%) 0%, hsl(220 18% 8%) 50%, hsl(220 25% 5%) 100%)",
            }}
          />
        }
        overlay="none"
        align="center"
      >
        <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-parchment/55 mb-8">
          {t("home.domains.eyebrow")}
        </div>
        <h2
          className="font-display uppercase text-parchment leading-[0.92] text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] max-w-[20ch] mb-14"
          style={{ fontWeight: 600 }}
        >
          {t("home.domains.title")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-8 max-w-5xl">
          {arenas.slice(0, 6).map((d) => (
            <div key={d.code} className="border-t border-parchment/15 pt-5">
              <div className="font-mono text-[10px] tracking-[0.32em] text-parchment/45 mb-3">{d.code}</div>
              <div
                className="font-display uppercase text-parchment text-lg md:text-xl leading-[1.1]"
                style={{ fontWeight: 600, letterSpacing: "0.01em" }}
              >
                {d.title}
              </div>
            </div>
          ))}
        </div>
      </SnapChapter>

      {/* Chapter 04 — Flagship Ventures */}
      <SnapChapter
        index="04"
        background={
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 80% 50%, hsl(220 25% 10%) 0%, hsl(220 22% 4%) 70%)",
            }}
          />
        }
        overlay="none"
        align="center"
      >
        <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-parchment/55 mb-8">
          {t("home.ventures.eyebrow")}
        </div>
        <h2
          className="font-display uppercase text-parchment leading-[0.92] text-[2.25rem] md:text-[3.5rem] lg:text-[4.5rem] max-w-[20ch] mb-14"
          style={{ fontWeight: 600 }}
        >
          {t("home.ventures.title")}
        </h2>
        <div className="divide-y divide-parchment/15 border-y border-parchment/15 max-w-5xl">
          {ventures.slice(0, 4).map((v, i) => (
            <div key={v.name} className="grid grid-cols-12 gap-6 py-6">
              <div className="col-span-1 font-mono text-[10px] tracking-[0.32em] text-parchment/40 pt-1">
                0{i + 1}
              </div>
              <div className="col-span-7">
                <div
                  className="font-display uppercase text-parchment text-xl md:text-2xl leading-[1.05]"
                  style={{ fontWeight: 600 }}
                >
                  {v.name}
                </div>
              </div>
              <div className="col-span-2 text-xs text-parchment/55">{v.sector}</div>
              <div className="col-span-2 text-xs text-parchment/55">{v.status}</div>
            </div>
          ))}
        </div>
      </SnapChapter>

      {/* Chapter 05 — Operating Intelligence */}
      <SnapChapter
        index="05"
        background={
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, hsl(220 22% 3%) 0%, hsl(220 18% 7%) 100%)",
            }}
          />
        }
        overlay="none"
        align="center"
      >
        <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-parchment/55 mb-8">
          {t("home.intelligence.eyebrow")}
        </div>
        <h2
          className="font-display uppercase text-parchment leading-[0.92] text-[2.25rem] md:text-[3.5rem] lg:text-[4.5rem] max-w-[20ch] mb-14"
          style={{ fontWeight: 600 }}
        >
          {t("home.intelligence.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-parchment/15 max-w-6xl">
          {intel.map((s) => (
            <div key={s.code} className="bg-obsidian p-7 min-h-[180px] flex flex-col justify-between">
              <div className="font-mono text-[10px] tracking-[0.32em] text-parchment/40">{s.code}</div>
              <div
                className="font-display uppercase text-parchment text-base md:text-lg leading-[1.15] mt-6"
                style={{ fontWeight: 600 }}
              >
                {s.title}
              </div>
            </div>
          ))}
        </div>
      </SnapChapter>

      {/* Chapter 06 — Institutional Reach */}
      <SnapChapter
        index="06"
        background={
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 30% 60%, hsl(220 28% 10%) 0%, hsl(220 22% 4%) 70%)",
            }}
          />
        }
        overlay="none"
        align="center"
      >
        <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-parchment/55 mb-8">
          {t("home.reach.eyebrow")}
        </div>
        <h2
          className="font-display uppercase text-parchment leading-[0.92] text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] max-w-[18ch] mb-12"
          style={{ fontWeight: 600 }}
        >
          {t("home.reach.title")}
        </h2>
        <div className="grid grid-cols-3 gap-px bg-parchment/15 max-w-4xl">
          {reach.map((m) => (
            <div key={m.label} className="bg-obsidian px-8 py-10">
              <div
                className="font-display uppercase text-parchment text-4xl md:text-6xl leading-none"
                style={{ fontWeight: 600 }}
              >
                {m.value}
              </div>
              <div className="mt-4 font-mono text-[9px] tracking-[0.32em] uppercase text-parchment/45">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </SnapChapter>

      {/* Chapter 07 — CSW Live */}
      <SnapChapter
        index="07"
        background={
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, hsl(220 25% 5%) 0%, hsl(220 18% 9%) 100%)",
            }}
          />
        }
        overlay="none"
        align="center"
      >
        <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-parchment/55 mb-8">
          {t("home.live.eyebrow")}
        </div>
        <h2
          className="font-display uppercase text-parchment leading-[0.92] text-[2.25rem] md:text-[3.5rem] lg:text-[4.5rem] max-w-[18ch] mb-14"
          style={{ fontWeight: 600 }}
        >
          {t("home.live.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-parchment/15 max-w-6xl">
          {live.slice(0, 3).map((it, i) => (
            <article key={i} className="bg-obsidian p-8 min-h-[200px] flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-parchment/55">
                  {it.category}
                </span>
                <span className="h-px w-5 bg-parchment/30" />
                <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-parchment/40">
                  {it.date}
                </span>
              </div>
              <div
                className="font-display uppercase text-parchment text-base md:text-lg leading-[1.2] mt-8"
                style={{ fontWeight: 600 }}
              >
                {it.title}
              </div>
            </article>
          ))}
        </div>
      </SnapChapter>

      {/* Chapter 08 — Strategic Entry */}
      <SnapChapter
        index="08"
        background={
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 90% 70% at 50% 50%, hsl(220 30% 8%) 0%, hsl(220 25% 3%) 80%)",
            }}
          />
        }
        overlay="none"
        align="center"
      >
        <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-parchment/55 mb-10">
          {t("home.entry.eyebrow")}
        </div>
        <h2
          className="font-display uppercase text-parchment leading-[0.9] text-[3rem] md:text-[5rem] lg:text-[7rem] max-w-[14ch]"
          style={{ fontWeight: 700, letterSpacing: "0.005em" }}
        >
          {t("home.entry.title")}
        </h2>
        <p className="mt-10 max-w-xl text-base md:text-lg leading-[1.85] text-parchment/65">
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
            <div key={lane} className="font-mono text-[10px] tracking-[0.28em] uppercase text-parchment/55">
              {t(`home.entry.lanes.${lane}`)}
            </div>
          ))}
        </div>
      </SnapChapter>
    </div>
  );
};

export default Home;
