import type { TypedFlatConfigItem } from "@antfu/eslint-config"
import { pluginComments } from "../utils/plugins"

export function comments(): TypedFlatConfigItem[] {
  return [
    {
      name: "ayingott/eslint-comments/rules",
      plugins: {
        "eslint-comments": pluginComments,
      },
      rules: {
        "eslint-comments/no-aggregating-enable": "error",
        "eslint-comments/no-duplicate-disable": "error",
        "eslint-comments/no-unlimited-disable": "error",
        "eslint-comments/no-unused-enable": "error",
      },
    },
  ]
}
