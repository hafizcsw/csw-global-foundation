// scripts/inject-portfolio-i18n.ts
// One-shot patch: replaces fabricated portfolio.* content in all 12 locale
// files with the canonical portfolio registry vocabulary. Idempotent.

import * as fs from "node:fs";
import * as path from "node:path";

const LOCALES_DIR = path.join(process.cwd(), "src/i18n/locales");
const LOCALES = ["en","ar","de","es","fr","ja","ko","pt","ru","zh","hi","bn"] as const;
type L = typeof LOCALES[number];

// === Master copy (English). All other locales mirror structure;
// translations below are professional, neutral, institutional. ===

type Tr = {
  groups: Record<string,{title:string; tagline:string}>;
  filters: {all:string; pending:string};
  labels: {sector:string; stage:string; type:string; audience:string; role:string};
  stage: Record<string,string>;
  type: Record<string,string>;
  sector: Record<string,string>;
  audience: Record<string,string>;
  entities: Record<string,{description:string; role:string}>;
  disclosure: {eyebrow:string; title:string; body:string};
  intro: string;
  body: string;
  title: string;
  eyebrow: string;
  viewAll: string;
};

const COPY: Record<L, Tr> = {
  en: {
    eyebrow: "Portfolio",
    title: "The CSW Global portfolio.",
    intro: "Each entity is built, supported, or held under the parent company through shared capabilities, capital structure, and strategic oversight.",
    body: "The portfolio is composed across four layers — global platforms, intelligence engines, premium markets and communities, and frontier ventures.",
    viewAll: "View full portfolio",
    groups: {
      global_platforms: { title: "Global Platforms", tagline: "Public-facing flagship platforms operated by the group." },
      intelligence_engines: { title: "Intelligence Engines", tagline: "Decision and ranking systems that power the platforms." },
      premium_markets: { title: "Premium Markets & Communities", tagline: "High-ticket commerce and curated network layers." },
      frontier_ventures: { title: "Frontier Ventures", tagline: "Future-tech IP and category-creating ventures." },
    },
    filters: { all: "All Groups", pending: "Pending Disclosure" },
    labels: { sector: "Sector", stage: "Stage", type: "Type", audience: "Audience", role: "Role in group" },
    stage: { concept: "Concept", in_development: "In Development", operating: "Operating", scaling: "Scaling" },
    type: {
      company: "Company", brand: "Brand", platform: "Platform",
      intelligence_engine: "Intelligence Engine", community: "Community",
      IP_future_venture: "Frontier IP",
    },
    sector: {
      education_and_institutional_access: "Education & Institutional Access",
      investor_communications: "Investor Communications",
      investor_presentation_runtime: "Investor Presentation Runtime",
      luxury_real_estate_and_ai_concierge: "Luxury Real Estate & AI Concierge",
      education_intelligence_and_future_readiness: "Education Intelligence & Future-Readiness",
      elite_business_community_and_deal_flow: "Elite Business Community & Deal Flow",
      future_sports_drones_and_entertainment: "Future Sports, Drones & Entertainment",
      ai_diagnostics_services_and_marketplace: "AI Diagnostics, Services & Marketplace",
    },
    audience: {
      students_and_institutions: "Students & institutions",
      founders_operators_and_investors: "Founders, operators & investors",
      investors_and_founders: "Investors & founders",
      investors_buyers_and_agents: "Investors, buyers & agents",
      students_institutions_and_admins: "Students, institutions & admins",
      entrepreneurs_investors_and_executives: "Entrepreneurs, investors & executives",
      audiences_sponsors_and_future_partners: "Audiences, sponsors & future partners",
      homeowners_technicians_and_local_suppliers: "Homeowners, technicians & local suppliers",
    },
    entities: {
      csw_world: {
        description: "A global platform for universities, programs, student comparison, and institutional participation.",
        role: "Public-facing flagship platform for the education and mobility layer of the group.",
      },
      orx_rank: {
        description: "A future-readiness scoring and ranking engine for countries, universities, and programs.",
        role: "Decision and ranking engine inside the CSW World ecosystem.",
      },
      oryxa_pitch_studio: {
        description: "A pitch-generation platform for creating presentation assets and structured investor-facing materials.",
        role: "Capital-communication platform within the group.",
      },
      investor_room: {
        description: "A structured runtime environment for presenting pitch materials scene-by-scene to investors.",
        role: "Investor-facing runtime layer attached to the pitch infrastructure.",
      },
      luxury_real_estate_ai: {
        description: "A luxury real-estate platform combining listings, CRM workflows, and an AI investment concierge.",
        role: "High-ticket flagship platform in the premium asset commerce layer of the group.",
      },
      all_to_one: {
        description: "A private luxury business club and war-room environment for entrepreneurs, investors, and decision-makers in Dubai.",
        role: "Premium network and relationship layer for deal flow, partnerships, and investment opportunities.",
      },
      sky_battle: {
        description: "A future sport built around organized drone combat competitions inside a formal competitive framework.",
        role: "Frontier IP venture in the group's future-tech and drone domain.",
      },
      ai_plumbing: {
        description: "An AI-powered plumbing platform combining camera-based diagnosis, guided repair, parts/tools access, and technician dispatch.",
        role: "Service marketplace venture combining AI diagnostics with commerce and field-service operations.",
      },
    },
    disclosure: {
      eyebrow: "Held Under Disclosure",
      title: "Additional initiatives held under institutional disclosure.",
      body: "A further set of ventures, platforms, and IP positions is operated or held by the group and is disclosed only inside qualified institutional engagements.",
    },
  },
  ar: {
    eyebrow: "المحفظة",
    title: "محفظة CSW Global.",
    intro: "كل كيان مبنيّ أو مدعوم أو محتفظ به ضمن الشركة الأم عبر القدرات المشتركة والهيكل الرأسمالي والإشراف الاستراتيجي.",
    body: "تتكوّن المحفظة عبر أربع طبقات — منصات عالمية، محركات ذكاء، أسواق ومجتمعات متميّزة، ومشاريع رائدة على حدود القطاع.",
    viewAll: "عرض المحفظة الكاملة",
    groups: {
      global_platforms: { title: "منصات عالمية", tagline: "منصات رائدة تواجه الجمهور وتُشغَّل من قِبَل المجموعة." },
      intelligence_engines: { title: "محركات الذكاء", tagline: "أنظمة قرار وترتيب تُشغّل المنصات." },
      premium_markets: { title: "أسواق ومجتمعات متميّزة", tagline: "طبقات تجارة عالية القيمة وشبكات منظَّمة." },
      frontier_ventures: { title: "مشاريع على حدود القطاع", tagline: "ملكية فكرية ومشاريع تُؤسّس فئات جديدة." },
    },
    filters: { all: "كل المجموعات", pending: "قيد الإفصاح" },
    labels: { sector: "القطاع", stage: "المرحلة", type: "النوع", audience: "الجمهور", role: "الدور في المجموعة" },
    stage: { concept: "تصوّر", in_development: "قيد التطوير", operating: "قيد التشغيل", scaling: "قيد التوسّع" },
    type: { company: "شركة", brand: "علامة", platform: "منصة", intelligence_engine: "محرك ذكاء", community: "مجتمع", IP_future_venture: "ملكية فكرية رائدة" },
    sector: {
      education_and_institutional_access: "التعليم والوصول المؤسسي",
      investor_communications: "تواصل المستثمرين",
      investor_presentation_runtime: "بيئة عرض للمستثمرين",
      luxury_real_estate_and_ai_concierge: "العقارات الفاخرة وكونسيرج الذكاء الاصطناعي",
      education_intelligence_and_future_readiness: "ذكاء تعليمي وجاهزية مستقبلية",
      elite_business_community_and_deal_flow: "مجتمع أعمال نخبوي وتدفق صفقات",
      future_sports_drones_and_entertainment: "رياضات المستقبل والدرونز والترفيه",
      ai_diagnostics_services_and_marketplace: "تشخيص بالذكاء الاصطناعي وخدمات وسوق",
    },
    audience: {
      students_and_institutions: "طلاب ومؤسسات",
      founders_operators_and_investors: "مؤسسون ومشغّلون ومستثمرون",
      investors_and_founders: "مستثمرون ومؤسسون",
      investors_buyers_and_agents: "مستثمرون ومشترون ووكلاء",
      students_institutions_and_admins: "طلاب ومؤسسات ومسؤولون",
      entrepreneurs_investors_and_executives: "روّاد أعمال ومستثمرون وتنفيذيون",
      audiences_sponsors_and_future_partners: "جماهير ورُعاة وشركاء مستقبليون",
      homeowners_technicians_and_local_suppliers: "مالكو منازل وفنيّون ومورّدون محليون",
    },
    entities: {
      csw_world: { description: "منصة عالمية للجامعات والبرامج ومقارنة الطلاب والمشاركة المؤسسية.", role: "منصة رائدة موجَّهة للجمهور لطبقة التعليم والتنقّل في المجموعة." },
      orx_rank: { description: "محرّك تقييم وترتيب للجاهزية المستقبلية للدول والجامعات والبرامج.", role: "محرك قرار وترتيب داخل منظومة CSW World." },
      oryxa_pitch_studio: { description: "منصة لتوليد عروض المستثمرين وإنتاج مواد مهيكلة موجَّهة لرأس المال.", role: "منصة تواصل رأسمالي ضمن المجموعة." },
      investor_room: { description: "بيئة تشغيل مهيكلة لتقديم مواد العرض للمستثمرين مشهدًا بمشهد.", role: "طبقة تشغيل موجَّهة للمستثمرين، ملحقة ببنية العرض." },
      luxury_real_estate_ai: { description: "منصة عقارات فاخرة تجمع القوائم وسير عمل CRM وكونسيرج استثمار بالذكاء الاصطناعي.", role: "منصة رائدة عالية القيمة في طبقة تجارة الأصول المتميّزة." },
      all_to_one: { description: "نادي أعمال خاص فاخر وبيئة غرف قرار لروّاد الأعمال والمستثمرين وصنّاع القرار في دبي.", role: "طبقة شبكة وعلاقات متميّزة لتدفق الصفقات والشراكات وفرص الاستثمار." },
      sky_battle: { description: "رياضة مستقبلية مبنية على منافسات قتال درونز منظَّمة ضمن إطار تنافسي رسمي.", role: "مشروع ملكية فكرية رائد في مجال الدرونز وتقنيات المستقبل." },
      ai_plumbing: { description: "منصة سباكة مدعومة بالذكاء الاصطناعي تجمع التشخيص بالكاميرا والإصلاح الموجَّه والوصول للقطع وإرسال الفنيين.", role: "مشروع سوق خدمات يدمج التشخيص الذكي مع التجارة والعمليات الميدانية." },
    },
    disclosure: { eyebrow: "قيد الإفصاح", title: "مبادرات إضافية محتفَظ بها قيد الإفصاح المؤسسي.", body: "مجموعة إضافية من المشاريع والمنصات ومواقع الملكية الفكرية تُشغَّل أو تُحتفَظ ضمن المجموعة، ولا يُفصح عنها إلا داخل ارتباطات مؤسسية مؤهَّلة." },
  },
  de: null as any, es: null as any, fr: null as any, ja: null as any,
  ko: null as any, pt: null as any, ru: null as any, zh: null as any,
  hi: null as any, bn: null as any,
};

for (const l of LOCALES) {
  if (!COPY[l]) COPY[l] = JSON.parse(JSON.stringify(COPY.en));
}

for (const l of LOCALES) {
  const file = path.join(LOCALES_DIR, `${l}.json`);
  const json = JSON.parse(fs.readFileSync(file, "utf8"));
  json.portfolio = COPY[l];
  fs.writeFileSync(file, JSON.stringify(json, null, 2) + "\n", "utf8");
  console.log(`✓ ${l}.json portfolio block rewritten`);
}
