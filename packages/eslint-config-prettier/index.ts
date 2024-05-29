import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"

import type { TypedFlatConfigItem } from "@antfu/eslint-config"
import { interopDefault } from "@ayingott/sucrose"

// @ts-expect-error miss type
import * as _configPrettier from "eslint-config-prettier"
import * as _pluginPrettier from "eslint-plugin-prettier"

const pluginPrettier = interopDefault(_pluginPrettier)
const configPrettier = interopDefault(_configPrettier)

export const prettier: TypedFlatConfigItem[] = [
  {
    plugins: {
      ...eslintPluginPrettierRecommended.plugins,
      prettier: pluginPrettier,
    },
    rules: {
      ...configPrettier.rules,
      ...eslintPluginPrettierRecommended.rules,
      "prettier/prettier": "warn",

      // prettier config { quoteProps: "consistent" }
      // "style/quote-props": "off",
      "style/operator-linebreak": "off",
      "style/arrow-parens": "off",
      "style/indent": "off",
      "style/indent-binary-ops": "off",
      "style/brace-style": "off",

      "antfu/if-newline": "off",

      "vue/operator-linebreak": "off",
    },
  },
]

export default prettier
