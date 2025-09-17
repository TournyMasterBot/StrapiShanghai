import { mergeConfig, type UserConfig } from "vite";
import { fileURLToPath } from "node:url";

export default function adminViteConfig(base: UserConfig): UserConfig {
  /* eslint-disable no-console */
console.log("[admin] custom vite.config.ts loaded");

  const wrapperPath = fileURLToPath(
    new URL("./overrides/AdminAppWrapper.tsx", import.meta.url)
  );

  // Try all known admin entry ids across v5 minors
  const candidates = [
    // most common in v5
    "@strapi/strapi/admin/src/App",
    "@strapi/strapi/admin/src/index",
    // some builds resolve via the @strapi/admin package instead
    "@strapi/admin/admin/src/App",
    "@strapi/admin/admin/src/index",
    "@strapi/admin/src/App",
    "@strapi/admin/src/index",
  ];

  return mergeConfig(base, {
    // IMPORTANT: do not set `server` here (Strapi runs the dev server)
    resolve: {
      alias: [
        // keep a handle to the original root app so the wrapper can render it
        { find: "OriginalStrapiApp", replacement: candidates[0] },

        // replace all candidate entries with our wrapper
        ...candidates.map((id) => ({ find: id, replacement: wrapperPath })),
      ],
    },
  });
}
