import { GLOB_EXCLUDE, type TypedFlatConfigItem } from "@antfu/eslint-config"

export function ignores(): TypedFlatConfigItem[] {
  return [
    {
      ignores: GLOB_EXCLUDE,
    },
  ]
}
