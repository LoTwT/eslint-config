import {
  GLOB_JSON,
  GLOB_JSON5,
  GLOB_JSONC,
  jsonc as SxzzJsonc,
  parserJsonc as jsoncParser,
  pluginJsonc as jsoncPlugin,
} from "@sxzz/eslint-config"
import { type FlatESLintConfigItem } from "eslint-define-config"

export const jsonc: FlatESLintConfigItem[] = [
  ...SxzzJsonc,
  {
    files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
    plugins: {
      jsonc: jsoncPlugin,
    },
    languageOptions: {
      parser: jsoncParser,
    },
    rules: {
      "jsonc/array-bracket-spacing": ["error", "never"],
      "jsonc/comma-dangle": ["error", "never"],
      "jsonc/comma-style": ["error", "last"],
      "jsonc/indent": ["error", 2],
      "jsonc/key-spacing": ["error", { beforeColon: false, afterColon: true }],
      "jsonc/no-octal-escape": "error",
      "jsonc/object-curly-newline": [
        "error",
        { multiline: true, consistent: true },
      ],
      "jsonc/object-curly-spacing": ["error", "always"],
      "jsonc/object-property-newline": [
        "error",
        { allowMultiplePropertiesPerLine: true },
      ],
    },
  },
]
