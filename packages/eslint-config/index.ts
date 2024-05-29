import { antfu } from "@antfu/eslint-config"
import { prettier } from "@ayingott/eslint-config-prettier"

export const defineConfig: typeof antfu = (args) =>
  antfu({
    ...args,
    stylistic: {
      quotes: "double",
      ...(typeof args?.stylistic === "boolean" ? {} : args?.stylistic),
    },
    rules: {
      "style/arrow-parens": "off",
    },
  }).append(prettier)
