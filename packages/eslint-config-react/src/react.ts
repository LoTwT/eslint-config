// @ts-expect-error missing type
import * as _reactPlugin from "eslint-plugin-react"

// @ts-expect-error missing type
import * as _reactHooksPlugin from "eslint-plugin-react-hooks"

import { interopDefault } from "@ayingott/sucrose"
import type { FlatESLintConfigItem } from "eslint-define-config"

const reactPlugin = interopDefault(_reactPlugin)
const reactHooksPlugin = interopDefault(_reactHooksPlugin)

export const react: FlatESLintConfigItem[] = [
  {
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "jsx-quotes": ["error", "prefer-double"],

      ...reactPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",

      ...reactHooksPlugin.configs.recommended.rules,
    },
  },
]
