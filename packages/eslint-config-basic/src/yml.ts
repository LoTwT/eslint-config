import { yml as SxzzYml, pluginYml as ymlPlugin } from "@sxzz/eslint-config"
import type { FlatESLintConfig } from "eslint-define-config"

export const yml: FlatESLintConfig[] = [
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
