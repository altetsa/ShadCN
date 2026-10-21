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
    viteConfig.resolve.alias = [
      ...(Array.isArray(viteConfig.resolve.alias)
        ? viteConfig.resolve.alias
        : Object.entries(viteConfig.resolve.alias ?? {}).map(([find, replacement]) => ({
            find,
            replacement,
          }))),
      { find: /^@\//, replacement: `${rootDir}` },
      // The component source lives outside the Storybook workspace. Resolve
      // package entry points from Storybook's own node_modules instead of
      // relying on Vite to discover dependencies from the imported file path.
      { find: "@radix-ui/react-slot", replacement: require.resolve("@radix-ui/react-slot") },
      { find: "class-variance-authority", replacement: require.resolve("class-variance-authority") },
      { find: "clsx", replacement: require.resolve("clsx") },
      { find: "tailwind-merge", replacement: require.resolve("tailwind-merge") },
      { find: "react-dom", replacement: require.resolve("react-dom") },
      { find: "react", replacement: require.resolve("react") },
    ];

    viteConfig.resolve.dedupe = [
      ...(viteConfig.resolve.dedupe ?? []),
      "react",
      "react-dom",
    ];

    viteConfig.optimizeDeps ??= {};
    viteConfig.optimizeDeps.include = [
      ...(viteConfig.optimizeDeps.include ?? []),
      "@radix-ui/react-slot",
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
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
