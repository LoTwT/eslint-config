import { antfu } from "@antfu/eslint-config"
import { prettier } from "@ayingott/eslint-config-prettier"

export const defineFlatConfig: typeof antfu = (options) =>
  antfu({
    ...options,
    stylistic: {
      quotes: "double",
    },
    rules: {
      "style/arrow-parens": "off",
    },
    formatters: true,
  }).append(prettier)
