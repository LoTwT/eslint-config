import type { TypedFlatConfigItem } from "@antfu/eslint-config"
import createCommand from "eslint-plugin-command/config"

export function command(): TypedFlatConfigItem[] {
  return [
    {
      ...createCommand(),
      name: "ayingott/command/rules",
    },
  ]
}
