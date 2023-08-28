import { yml as SxzzYml } from "@sxzz/eslint-config"
import { FlatESLintConfigItem } from "eslint-define-config"
import ymlPlugin from "eslint-plugin-yml"

export const yml: FlatESLintConfigItem[] = [
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
