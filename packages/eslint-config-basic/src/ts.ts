import { typescript as SxzzTS } from "@sxzz/eslint-config"
import { type FlatESLintConfigItem } from "eslint-define-config"
import tsPlugin from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"

export const ts: FlatESLintConfigItem[] = [
  ...SxzzTS,
  {
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: "module",
      },
    },
    rules: {
      ...tsPlugin.configs["eslint-recommended"].overrides?.[0].rules,
      ...tsPlugin.configs.strict.rules,
      "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
]
