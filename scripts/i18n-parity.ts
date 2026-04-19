/**
 * i18n key-parity check.
 *
 * Source of truth: src/i18n/locales/en.json
 * Every other locale file in src/i18n/locales/*.json MUST contain exactly the
 * same set of leaf key paths (same nesting, same array shapes/lengths). If any
 * locale is missing a key or has an extra/divergent key, the check fails.
 *
 * Behavior:
 *   - mode "throw"  → throws an Error (fails Vite build / dev startup)
 *   - mode "warn"   → logs a warning, does not fail
 *
 * This enforces the 12-language architectural baseline at build time so
 * scaffold locales can never silently drift from en.json.
 */

import { readFileSync, readdirSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

type Json = string | number | boolean | null | Json[] | { [k: string]: Json };

const HERE = dirname(fileURLToPath(import.meta.url));
const LOCALES_DIR = resolve(HERE, "..", "src", "i18n", "locales");
const REFERENCE = "en.json";

/** Collect every leaf key path from an object/array tree. Arrays use [i]. */
function collectKeyPaths(node: Json, prefix = ""): string[] {
  if (node === null || typeof node !== "object") {
    return [prefix];
  }
  if (Array.isArray(node)) {
    return node.flatMap((item, i) =>
      collectKeyPaths(item, `${prefix}[${i}]`)
    );
  }
  return Object.keys(node)
    .sort()
    .flatMap((k) =>
      collectKeyPaths((node as Record<string, Json>)[k], prefix ? `${prefix}.${k}` : k)
    );
}

function loadJson(file: string): Json {
  return JSON.parse(readFileSync(file, "utf8")) as Json;
}

export interface ParityReport {
  ok: boolean;
  reference: string;
  totalKeys: number;
  perLocale: Array<{
    locale: string;
    missing: string[];
    extra: string[];
  }>;
}

export function runParityCheck(): ParityReport {
  const refPath = join(LOCALES_DIR, REFERENCE);
  const refKeys = new Set(collectKeyPaths(loadJson(refPath)));

  const files = readdirSync(LOCALES_DIR).filter(
    (f) => f.endsWith(".json") && f !== REFERENCE
  );

  const perLocale = files.map((file) => {
    const localeKeys = new Set(collectKeyPaths(loadJson(join(LOCALES_DIR, file))));
    const missing = [...refKeys].filter((k) => !localeKeys.has(k));
    const extra = [...localeKeys].filter((k) => !refKeys.has(k));
    return { locale: file, missing, extra };
  });

  const ok = perLocale.every((r) => r.missing.length === 0 && r.extra.length === 0);
  return { ok, reference: REFERENCE, totalKeys: refKeys.size, perLocale };
}

export function formatReport(r: ParityReport): string {
  const lines: string[] = [];
  lines.push(
    `[i18n-parity] reference=${r.reference} keys=${r.totalKeys} locales=${r.perLocale.length}`
  );
  for (const { locale, missing, extra } of r.perLocale) {
    if (missing.length === 0 && extra.length === 0) {
      lines.push(`  ✓ ${locale}`);
    } else {
      lines.push(`  ✗ ${locale}  missing=${missing.length}  extra=${extra.length}`);
      for (const k of missing.slice(0, 20)) lines.push(`      - missing: ${k}`);
      if (missing.length > 20) lines.push(`      … +${missing.length - 20} more missing`);
      for (const k of extra.slice(0, 20)) lines.push(`      + extra:   ${k}`);
      if (extra.length > 20) lines.push(`      … +${extra.length - 20} more extra`);
    }
  }
  return lines.join("\n");
}

// Allow running directly: `tsx scripts/i18n-parity.ts`
const invokedDirectly =
  typeof process !== "undefined" &&
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (invokedDirectly) {
  const report = runParityCheck();
  // eslint-disable-next-line no-console
  console.log(formatReport(report));
  if (!report.ok) process.exit(1);
}
