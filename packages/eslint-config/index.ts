import { antfu } from "@antfu/eslint-config"
import { prettier } from "@ayingott/eslint-config-prettier"
import PrettierConfig from "@ayingott/prettier-config"

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
    formatters: {
      ...(typeof options?.formatters === "boolean" ? {} : options?.formatters),
      prettierOptions: {
        ...PrettierConfig,
      },
    },
  }).prepend(prettier)
