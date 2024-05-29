import type {
  OptionsOverrides,
  StylisticConfig,
  TypedFlatConfigItem,
} from "@antfu/eslint-config"
import { pluginAntfu, pluginStylistic } from "../utils/plugins"

export const StylisticConfigDefaults: StylisticConfig = {
  indent: 2,
  jsx: true,
  quotes: "double",
  semi: false,
}

export interface StylisticOptions extends StylisticConfig, OptionsOverrides {
  lessOpinionated?: boolean
}

export function stylistic(
  options: StylisticOptions = {},
): TypedFlatConfigItem[] {
  const {
    indent,
    jsx,
    lessOpinionated = false,
    overrides = {},
    quotes,
    semi,
  } = {
    ...StylisticConfigDefaults,
    ...options,
  }

  const config = pluginStylistic.configs.customize({
    flat: true,
    indent,
    jsx,
    pluginName: "style",
    quotes,
    semi,
  })

  return [
    {
      name: "ayingott/stylistic/rules",
      plugins: {
        antfu: pluginAntfu,
        style: pluginStylistic,
      },
      rules: {
        ...config.rules,

        "antfu/consistent-list-newline": "error",

        ...(lessOpinionated
          ? {
              curly: ["error", "all"],
            }
          : {
              "antfu/curly": "error",
              "antfu/if-newline": "error",
              "antfu/top-level-function": "error",
            }),

        ...overrides,
      },
    },
  ]
}
