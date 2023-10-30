import { yml as SxzzYml, pluginYml as ymlPlugin } from "@sxzz/eslint-config"
import type { FlatESLintConfigItem } from "eslint-define-config"

export const yml: FlatESLintConfigItem[] = [
  ...SxzzYml,
  {
    plugins: {
      yml: ymlPlugin,
    },
    rules: {
      "yml/no-empty-document": "off",
      "yml/quotes": ["error", { prefer: "double", avoidEscape: true }],
    },
  },
]
