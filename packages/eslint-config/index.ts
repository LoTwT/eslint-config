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
            quotes: "double",
            ...(options?.stylistic === true ? {} : options?.stylistic),
          },
    rules: {
      "style/arrow-parens": "off",
      ...options?.rules,
    },
    formatters:
      options?.formatters === false
        ? false
        : {
            ...(options?.formatters === true
              ? {
                  css: true,
                  html: true,
                  markdown: true,
                  prettierOptions: {
                    ...PrettierConfig,
                  },
                }
              : {
                  ...options?.formatters,
                  prettierOptions: {
                    ...PrettierConfig,
                    ...options?.formatters?.prettierOptions,
                  },
                }),
          },
  }).prepend(prettier)
