import type { StorybookConfig } from "@storybook/react-vite";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);

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
      {
        find: /^@radix-ui\/react-slot$/,
        replacement: require.resolve("@radix-ui/react-slot"),
      },
      {
        find: /^class-variance-authority$/,
        replacement: require.resolve("class-variance-authority"),
      },
      { find: /^clsx$/, replacement: require.resolve("clsx") },
      { find: /^tailwind-merge$/, replacement: require.resolve("tailwind-merge") },
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
