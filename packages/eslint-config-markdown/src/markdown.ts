import { markdown as SxzzMarkdown } from "@sxzz/eslint-config"
import { type FlatESLintConfigItem } from "eslint-define-config"
import tsPlugin from "@typescript-eslint/eslint-plugin"
import importPlugin from "eslint-plugin-import"
import unusedImportsPlugin from "eslint-plugin-unused-imports"
import antfuPlugin from "eslint-plugin-antfu"
import nPlugin from "eslint-plugin-n"

export const markdown: FlatESLintConfigItem[] = [
  ...SxzzMarkdown,
  {
    files: ["**/*.md/*.*"],
    plugins: {
      "@typescript-eslint": tsPlugin,
      import: importPlugin,
      "unused-imports": unusedImportsPlugin,
      antfu: antfuPlugin,
      n: nPlugin,
    },
    rules: {
      "no-alert": "off",
      "no-console": "off",
      "no-restricted-imports": "off",
      "no-undef": "off",
      "no-unused-expressions": "off",
      "no-unused-vars": "off",

      "@typescript-eslint/no-redeclare": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/comma-dangle": "off",
      "@typescript-eslint/consistent-type-imports": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-require-imports": "off",

      "import/no-unresolved": "off",

      "unused-imports/no-unused-imports": "off",
      "unused-imports/no-unused-vars": "off",

      "antfu/no-cjs-exports": "off",
      "antfu/no-ts-export-equal": "off",

      "n/prefer-global/process": "off",
    },
  },
]
