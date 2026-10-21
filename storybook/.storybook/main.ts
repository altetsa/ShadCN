import type { StorybookConfig } from "@storybook/react-vite";
import { fileURLToPath } from "node:url";

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
    viteConfig.resolve.alias = {
      ...viteConfig.resolve.alias,
      "@": rootDir,
    };
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
