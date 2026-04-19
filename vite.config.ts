import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { runParityCheck, formatReport } from "./scripts/i18n-parity";

/**
 * Vite plugin: enforces i18n key-parity between en.json and every other locale.
 * - On `vite build`: parity drift FAILS the build (throws).
 * - On `vite dev`:   parity drift logs a warning so devs see it immediately
 *                    but local iteration is not blocked.
 */
function i18nParityPlugin(): PluginOption {
  return {
    name: "csw-i18n-parity",
    enforce: "pre",
    buildStart() {
      const report = runParityCheck();
      const formatted = formatReport(report);
      if (report.ok) {
        // eslint-disable-next-line no-console
        console.log(formatted);
        return;
      }
      const isBuild = process.argv.includes("build");
      if (isBuild) {
        this.error(
          "i18n key-parity check failed. Locales must mirror en.json exactly.\n" +
            formatted
        );
      } else {
        // eslint-disable-next-line no-console
        console.warn(
          "[i18n-parity] DRIFT DETECTED (dev mode — non-fatal):\n" + formatted
        );
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    i18nParityPlugin(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
