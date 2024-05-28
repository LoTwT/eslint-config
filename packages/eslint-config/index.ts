import { antfu } from "@antfu/eslint-config"
import { prettier } from "@ayingott/eslint-config-prettier"

export const defineConfig: typeof antfu = (options) =>
  antfu({
    ...options,
    stylistic:
      options?.stylistic === false
        ? false
        : {
            ...(options?.stylistic === true ? {} : options?.stylistic),
            quotes: "double",
          },
    rules: {
      ...options?.rules,
      "style/arrow-parens": "off",
    },
    formatters: true,
  }).append(prettier)
