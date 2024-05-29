import createCommand from "eslint-plugin-command/config"
import type { TypedFlatConfigItem } from "@antfu/eslint-config"

export function command(): TypedFlatConfigItem[] {
  return [
    {
      ...createCommand(),
      name: "ayingott/command/rules",
    },
  ]
}
