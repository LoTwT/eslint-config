import type {
  OptionsFiles,
  OptionsOverrides,
  OptionsStylistic,
  TypedFlatConfigItem,
} from "@antfu/eslint-config"
import { GLOB_YAML } from "@antfu/eslint-config"
import { parserYaml, pluginYaml } from "../utils/plugins"

export function yaml(
  options: OptionsOverrides & OptionsStylistic & OptionsFiles = {},
): TypedFlatConfigItem[] {
  const { files = [GLOB_YAML], overrides = {}, stylistic = true } = options

  const { indent = 2, quotes = "double" } =
    typeof stylistic === "boolean" ? {} : stylistic

  return [
    {
      name: "ayingott/yaml/setup",
      plugins: {
        yaml: pluginYaml,
      },
    },
    {
      files,
      languageOptions: {
        parser: parserYaml,
      },
      name: "ayingott/yaml/rules",
      rules: {
        "style/spaced-comment": "off",

        "yaml/block-mapping": "error",
        "yaml/block-sequence": "error",
        "yaml/no-empty-key": "error",
        "yaml/no-empty-sequence-entry": "error",
        "yaml/no-irregular-whitespace": "error",
        "yaml/plain-scalar": "error",

        "yaml/vue-custom-block/no-parsing-error": "error",

        ...(stylistic
          ? {
              "yaml/block-mapping-question-indicator-newline": "error",
              "yaml/block-sequence-hyphen-indicator-newline": "error",
              "yaml/flow-mapping-curly-newline": "error",
              "yaml/flow-mapping-curly-spacing": "error",
              "yaml/flow-sequence-bracket-newline": "error",
              "yaml/flow-sequence-bracket-spacing": "error",
              "yaml/indent": ["error", indent === "tab" ? 2 : indent],
              "yaml/key-spacing": "error",
              "yaml/no-tab-indent": "error",
              "yaml/quotes": ["error", { avoidEscape: false, prefer: quotes }],
              "yaml/spaced-comment": "error",
            }
          : {}),

        ...overrides,
      },
    },
  ]
}
