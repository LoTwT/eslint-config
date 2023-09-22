import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import { type FlatESLintConfigItem } from "eslint-define-config"

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
