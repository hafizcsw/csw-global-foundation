import { HeroFilm } from "@/components/csw/HeroFilm";
import { WorldOfCSW } from "@/components/csw/WorldOfCSW";
import { FlagshipDomains } from "@/components/csw/FlagshipDomains";
import { FlagshipVentures } from "@/components/csw/FlagshipVentures";
import { OperatingIntelligence } from "@/components/csw/OperatingIntelligence";
import { InstitutionalReach } from "@/components/csw/InstitutionalReach";
import { CSWLive } from "@/components/csw/CSWLive";
import { StrategicEntry } from "@/components/csw/StrategicEntry";

/**
 * CSW Global — Cinematic Flagship Homepage.
 * Eight choreographed sections expressing a parent-company world,
 * not a product page. Bugatti-grade pacing applied to AI / aerospace /
 * institutions / infrastructure. All copy 12-language ready.
 */
const Home = () => (
  <>
    <HeroFilm />
    <WorldOfCSW />
    <FlagshipDomains />
    <FlagshipVentures />
    <OperatingIntelligence />
    <InstitutionalReach />
    <CSWLive />
    <StrategicEntry />
  </>
);

export default Home;
