declare module "@sxzz/eslint-config" {
  import { type FlatESLintConfigItem } from "eslint-define-config"

  const vue: FlatESLintConfigItem[]

  export { vue }
}

declare module "eslint-plugin-vue"
