import type { StorybookConfig } from "@storybook/react-vite";
import { fileURLToPath } from "node:url";

const storybookNodeModules = (packagePath: string) =>
  fileURLToPath(new URL(`../node_modules/${packagePath}`, import.meta.url));

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
      // Registry source files live outside the Storybook workspace. Resolve
      // their runtime dependencies from Storybook's own installed packages.
      "@radix-ui/react-slot": storybookNodeModules("@radix-ui/react-slot/dist/index.mjs"),
      "class-variance-authority": storybookNodeModules("class-variance-authority/dist/index.mjs"),
      clsx: storybookNodeModules("clsx/dist/clsx.mjs"),
      "tailwind-merge": storybookNodeModules("tailwind-merge/dist/bundle-mjs.mjs"),
      react: storybookNodeModules("react/index.js"),
      "react-dom": storybookNodeModules("react-dom/index.js"),
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
