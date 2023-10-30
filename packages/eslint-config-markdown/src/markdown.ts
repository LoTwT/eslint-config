import {
  markdown as SxzzMarkdown,
  pluginAntfu as antfuPlugin,
  pluginImport as importPlugin,
  pluginMarkdown as markdownPlugin,
  pluginTypeScript as tsPlugin,
  pluginUnusedImports as unusedImportsPlugin,
} from "@sxzz/eslint-config"
import { pluginN as nPlugin } from "./eslint-plugin-n"
import type { FlatESLintConfigItem } from "eslint-define-config"

export const markdown: FlatESLintConfigItem[] = [
  ...SxzzMarkdown,
  {
    files: ["**/*.md/*.*"],
    plugins: {
      "@typescript-eslint": tsPlugin,
      import: importPlugin,
      "unused-imports": unusedImportsPlugin,
      antfu: antfuPlugin,
      markdown: markdownPlugin,
      n: nPlugin,
    },
    processor: "markdown/markdown",
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
