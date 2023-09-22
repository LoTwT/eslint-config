import { javascript as SxzzJavaScript } from "@sxzz/eslint-config"
import { type FlatESLintConfigItem } from "eslint-define-config"

export const javascript: FlatESLintConfigItem[] = [
  ...SxzzJavaScript,
  {
    rules: {
      // best-practice
      "consistent-return": "off",
      "no-multi-spaces": "error",
      "no-useless-escape": "off",
      "no-invalid-this": "error",
      "vars-on-top": "error",
      "no-return-assign": "off",
      "operator-linebreak": ["error", "before"],
      "max-statements-per-line": ["error", { max: 1 }],
      quotes: ["error", "double", { avoidEscape: true }],

      "no-duplicate-imports": "off",
    },
  },
]
