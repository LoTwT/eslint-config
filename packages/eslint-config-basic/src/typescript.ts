import {
  GLOB_TS,
  GLOB_TSX,
  typescript as SxzzTS,
  parserTypeScript as tsParser,
  pluginTypeScript as tsPlugin,
} from "@sxzz/eslint-config"
import type { FlatESLintConfig } from "eslint-define-config"

export const typescript: FlatESLintConfig[] = [
  ...SxzzTS,
  {
    files: [GLOB_TS, GLOB_TSX],
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

      "@typescript-eslint/consistent-indexed-object-style": "off",
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-member-accessibility": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/parameter-properties": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/ban-ts-ignore": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/triple-slash-reference": "off",

      // handled by unused-imports/no-unused-imports
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
]
