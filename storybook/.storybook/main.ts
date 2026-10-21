import type { StorybookConfig } from "@storybook/react-vite";
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { dependencies = {} } = JSON.parse(
  readFileSync(new URL("../package.json", import.meta.url), "utf8"),
) as { dependencies?: Record<string, string> };

const config: StorybookConfig = {
  stories: [
    "../../components/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
  ],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (viteConfig) => {
    const rootDir = fileURLToPath(new URL("../../", import.meta.url));
    viteConfig.base = "./";
    viteConfig.resolve ??= {};
    const aliases = Array.isArray(viteConfig.resolve.alias)
      ? viteConfig.resolve.alias
      : Object.entries(viteConfig.resolve.alias ?? {}).map(([find, replacement]) => ({
          find,
          replacement,
        }));
    viteConfig.resolve.alias = [
      ...aliases,
      { find: "@", replacement: rootDir },
      ...Object.keys(dependencies).map((name) => ({
        find: name,
        replacement: require.resolve(name),
      })),
    ];
    viteConfig.plugins = [
      ...(viteConfig.plugins ?? []),
      (await import("@tailwindcss/vite")).default(),
    ];
    return viteConfig;
  },
  docs: {
    autodocs: "tag",
  },
};

export default config;
