import { typescript as SxzzTS } from "@sxzz/eslint-config"
import { type FlatESLintConfigItem } from "eslint-define-config"
import tsPlugin from "@typescript-eslint/eslint-plugin"

export const ts: FlatESLintConfigItem[] = [
  ...SxzzTS,
  {
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],
    },
  },
]
