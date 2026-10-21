import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../../components/ui/input";

const meta = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Enter your email",
    type: "email",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search"],
    },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithValue: Story = {
  args: { defaultValue: "hello@altetsa.com", placeholder: "Email address" },
};
export const Disabled: Story = {
  args: { disabled: true, placeholder: "Disabled input" },
};