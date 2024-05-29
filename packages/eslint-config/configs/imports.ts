import {
  GLOB_SRC_EXT,
  type OptionsStylistic,
  type TypedFlatConfigItem,
} from "@antfu/eslint-config"
import { pluginAntfu, pluginImport } from "../utils/plugins"

export function imports(options: OptionsStylistic = {}): TypedFlatConfigItem[] {
  const { stylistic = true } = options

  return [
    {
      name: "ayingott/imports/rules",
      plugins: {
        antfu: pluginAntfu,
        import: pluginImport,
      },
      rules: {
        "antfu/import-dedupe": "error",
        "antfu/no-import-dist": "error",
        "antfu/no-import-node-modules-by-path": "error",

        "import/first": "error",
        "import/no-duplicates": "error",
        "import/no-mutable-exports": "error",
        "import/no-named-default": "error",
        "import/no-self-import": "error",
        "import/no-webpack-loader-syntax": "error",
        "import/order": "error",

        ...(stylistic
          ? {
              "import/newline-after-import": ["error", { count: 1 }],
            }
          : {}),
      },
    },
    {
      files: ["**/bin/**/*", `**/bin.${GLOB_SRC_EXT}`],
      name: "ayingott/imports/disables/bin",
      rules: {
        "antfu/no-import-dist": "off",
        "antfu/no-import-node-modules-by-path": "off",
      },
    },
  ]
}
