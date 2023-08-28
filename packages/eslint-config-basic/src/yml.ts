import { yml as SxzzYml } from "@sxzz/eslint-config"
import { FlatESLintConfigItem } from "eslint-define-config"

export const yml: FlatESLintConfigItem[] = [
  ...SxzzYml,
  {
    rules: {
      "yml/no-empty-document": "off",
      "yml/quotes": ["error", { prefer: "double", avoidEscape: true }],
    },
  },
]
