import { js as SxzzJS } from "@sxzz/eslint-config"
import { FlatESLintConfigItem } from "eslint-define-config"

export const js: FlatESLintConfigItem[] = [
  ...SxzzJS,
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
    },
  },
]
