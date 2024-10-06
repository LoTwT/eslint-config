import type {
  OptionsOverrides,
  OptionsRegExp,
  TypedFlatConfigItem,
} from "@antfu/eslint-config"
import { configs } from "eslint-plugin-regexp"

export function regexp(
  options: OptionsRegExp & OptionsOverrides = {},
): TypedFlatConfigItem[] {
  const config = configs["flat/recommended"] as TypedFlatConfigItem

  const rules = {
    ...config.rules,
  }

  if (options.level === "warn") {
    for (const key in rules) {
      if (rules[key] === "error") rules[key] = "warn"
    }
  }

  return [
    {
      ...config,
      name: "ayingott/regexp/rules",
      rules: {
        ...rules,
        ...options.overrides,
      },
    },
  ]
}
