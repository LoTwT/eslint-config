import type { TypedFlatConfigItem } from "@antfu/eslint-config"
import { pluginPerfectionist } from "../utils/plugins"

/**
 * Optional perfectionist plugin for props and items sorting.
 *
 * @see https://github.com/azat-io/eslint-plugin-perfectionist
 */
export function perfectionist(): TypedFlatConfigItem[] {
  return [
    {
      name: "ayingott/perfectionist/setup",
      plugins: {
        perfectionist: pluginPerfectionist,
      },
    },
  ]
}
