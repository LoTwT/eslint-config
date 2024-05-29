import type {
  OptionsFiles,
  OptionsOverrides,
  OptionsStylistic,
  TypedFlatConfigItem,
} from "@antfu/eslint-config"
import { GLOB_TOML } from "@antfu/eslint-config"
import { parserToml, pluginToml } from "../utils/plugins"

export function toml(
  options: OptionsOverrides & OptionsStylistic & OptionsFiles = {},
): TypedFlatConfigItem[] {
  const { files = [GLOB_TOML], overrides = {}, stylistic = true } = options

  const { indent = 2 } = typeof stylistic === "boolean" ? {} : stylistic

  return [
    {
      name: "ayingott/toml/setup",
      plugins: {
        toml: pluginToml,
      },
    },
    {
      files,
      languageOptions: {
        parser: parserToml,
      },
      name: "ayingott/toml/rules",
      rules: {
        "style/spaced-comment": "off",

        "toml/comma-style": "error",
        "toml/keys-order": "error",
        "toml/no-space-dots": "error",
        "toml/no-unreadable-number-separator": "error",
        "toml/precision-of-fractional-seconds": "error",
        "toml/precision-of-integer": "error",
        "toml/tables-order": "error",

        "toml/vue-custom-block/no-parsing-error": "error",

        ...(stylistic
          ? {
              "toml/array-bracket-newline": "error",
              "toml/array-bracket-spacing": "error",
              "toml/array-element-newline": "error",
              "toml/indent": ["error", indent === "tab" ? 2 : indent],
              "toml/inline-table-curly-spacing": "error",
              "toml/key-spacing": "error",
              "toml/padding-line-between-pairs": "error",
              "toml/padding-line-between-tables": "error",
              "toml/quoted-keys": "error",
              "toml/spaced-comment": "error",
              "toml/table-bracket-spacing": "error",
            }
          : {}),

        ...overrides,
      },
    },
  ]
}
