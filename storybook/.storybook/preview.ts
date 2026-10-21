import type { Preview } from "@storybook/react";
import "../styles.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#171717" },
        { name: "canvas", value: "#f5f5f5" },
      ],
    },
  },
  tags: ["autodocs"],
};

export default preview;