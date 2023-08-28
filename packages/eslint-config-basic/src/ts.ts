import { typescript as SxzzTS } from "@sxzz/eslint-config"
import { FlatESLintConfigItem } from "eslint-define-config"

export const ts: FlatESLintConfigItem[] = [
  ...SxzzTS,
  {
    rules: {
      "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],
    },
  },
]
