import type { OptionsUnoCSS, TypedFlatConfigItem } from "@antfu/eslint-config"
import { pluginUnoCSS } from "../utils/plugins"

export function unocss(options: OptionsUnoCSS = {}): TypedFlatConfigItem[] {
  const { attributify = true, strict = false } = options

  return [
    {
      name: "ayingott/unocss",
      plugins: {
        unocss: pluginUnoCSS,
      },
      rules: {
        "unocss/order": "warn",
        ...(attributify
          ? {
              "unocss/order-attributify": "warn",
            }
          : {}),
        ...(strict
          ? {
              "unocss/blocklist": "error",
            }
          : {}),
      },
    },
  ]
}
