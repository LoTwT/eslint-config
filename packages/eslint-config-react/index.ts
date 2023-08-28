import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"

import { FlatESLintConfigItem } from "eslint-define-config"
const react: FlatESLintConfigItem[] = [
  {
    plugins: {
      react: reactPlugin,
      reactHooks: reactHooksPlugin,
    },
    rules: {
      "jsx-quotes": ["error", "prefer-double"],
      "react/react-in-jsx-scope": "off",
    },
  },
]

export { react }
export default react
