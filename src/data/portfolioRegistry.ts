/**
 * CSW Global — Canonical Portfolio Registry
 *
 * Single source of truth for every entity owned, operated, incubated, or
 * held under disclosure by CSW Global. Names are brand identifiers and
 * remain in their English form across all 12 locales. Only descriptive
 * fields are translated, via portfolio.entities.<id>.* i18n keys.
 *
 * Rules:
 *  - No entity may be added here without an explicit decision to publish it.
 *  - Stage values follow the registry contract; do not invent intermediate stages.
 *  - publishable_now = true means the entity may render publicly.
 *  - Anything not in this file remains internal_only / pending_disclosure.
 */

export type EntityType =
  | "company"
  | "brand"
  | "platform"
  | "intelligence_engine"
  | "community"
  | "IP_future_venture";

export type Stage = "concept" | "in_development" | "operating" | "scaling";
export type Flagship = "flagship" | "support";
export type Visibility = "public" | "internal" | "hybrid";
export type PublishStatus = "publishable_now" | "internal_only" | "pending_disclosure";

export type GroupId = "global_platforms" | "intelligence_engines" | "premium_markets" | "frontier_ventures";

export interface PortfolioEntity {
  /** Stable id used as i18n key suffix and React key. Lowercase, snake_case. */
  id: string;
  /** Brand identifier — same in every locale. */
  name: string;
  entity_type: EntityType;
  sector: string;
  stage: Stage;
  flagship_or_support: Flagship;
  visibility: Visibility;
  publish_status: PublishStatus;
  group: GroupId;
  /** Optional audience tag (i18n via portfolio.audience.<value>). */
  target_audience: string;
}

export const PORTFOLIO_GROUPS: { id: GroupId; order: number }[] = [
  { id: "global_platforms", order: 1 },
  { id: "intelligence_engines", order: 2 },
  { id: "premium_markets", order: 3 },
  { id: "frontier_ventures", order: 4 },
];

export const PORTFOLIO_REGISTRY: PortfolioEntity[] = [
  // G1 — Global Platforms
  {
    id: "csw_world",
    name: "CSW World",
    entity_type: "platform",
    sector: "education_and_institutional_access",
    stage: "in_development",
    flagship_or_support: "flagship",
    visibility: "public",
    publish_status: "publishable_now",
    group: "global_platforms",
    target_audience: "students_and_institutions",
  },
  {
    id: "oryxa_pitch_studio",
    name: "Oryxa Pitch Studio",
    entity_type: "platform",
    sector: "investor_communications",
    stage: "in_development",
    flagship_or_support: "flagship",
    visibility: "public",
    publish_status: "publishable_now",
    group: "global_platforms",
    target_audience: "founders_operators_and_investors",
  },
  {
    id: "investor_room",
    name: "Investor Room",
    entity_type: "platform",
    sector: "investor_presentation_runtime",
    stage: "in_development",
    flagship_or_support: "support",
    visibility: "public",
    publish_status: "publishable_now",
    group: "global_platforms",
    target_audience: "investors_and_founders",
  },
  {
    id: "luxury_real_estate_ai",
    name: "Luxury Real Estate AI",
    entity_type: "platform",
    sector: "luxury_real_estate_and_ai_concierge",
    stage: "in_development",
    flagship_or_support: "flagship",
    visibility: "public",
    publish_status: "publishable_now",
    group: "global_platforms",
    target_audience: "investors_buyers_and_agents",
  },
  // G2 — Intelligence Engines
  {
    id: "orx_rank",
    name: "ORX Rank",
    entity_type: "intelligence_engine",
    sector: "education_intelligence_and_future_readiness",
    stage: "in_development",
    flagship_or_support: "flagship",
    visibility: "public",
    publish_status: "publishable_now",
    group: "intelligence_engines",
    target_audience: "students_institutions_and_admins",
  },
  // G3 — Premium Markets & Communities
  {
    id: "all_to_one",
    name: "ALL TO ONE",
    entity_type: "community",
    sector: "elite_business_community_and_deal_flow",
    stage: "concept",
    flagship_or_support: "flagship",
    visibility: "public",
    publish_status: "publishable_now",
    group: "premium_markets",
    target_audience: "entrepreneurs_investors_and_executives",
  },
  // G4 — Frontier Ventures
  {
    id: "sky_battle",
    name: "Sky Battle",
    entity_type: "IP_future_venture",
    sector: "future_sports_drones_and_entertainment",
    stage: "concept",
    flagship_or_support: "flagship",
    visibility: "public",
    publish_status: "publishable_now",
    group: "frontier_ventures",
    target_audience: "audiences_sponsors_and_future_partners",
  },
  {
    id: "ai_plumbing",
    name: "AI Plumbing",
    entity_type: "platform",
    sector: "ai_diagnostics_services_and_marketplace",
    stage: "concept",
    flagship_or_support: "flagship",
    visibility: "public",
    publish_status: "publishable_now",
    group: "frontier_ventures",
    target_audience: "homeowners_technicians_and_local_suppliers",
  },
];

/** Number of additional initiatives held under disclosure. null = render neutral copy. */
export const PENDING_DISCLOSURE_COUNT: number | null = null;

export const groupedEntities = () =>
  PORTFOLIO_GROUPS.map((g) => ({
    group: g.id,
    entities: PORTFOLIO_REGISTRY.filter((e) => e.group === g.id),
  }));
