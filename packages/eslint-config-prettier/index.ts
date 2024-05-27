import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import type { TypedFlatConfigItem } from "@antfu/eslint-config"

export const prettier: TypedFlatConfigItem[] = [
  {
    ...eslintPluginPrettierRecommended,
    rules: {
      ...eslintPluginPrettierRecommended.rules,
      "prettier/prettier": "off",
    },
  },
]

export default prettier
