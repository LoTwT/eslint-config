declare module "@sxzz/eslint-config" {
  import { type FlatESLintConfigItem } from "eslint-define-config"

  const markdown: FlatESLintConfigItem[]

  export { markdown }
}

declare module "@typescript-eslint/eslint-plugin"
declare module "eslint-plugin-import"
declare module "eslint-plugin-unused-imports"
declare module "eslint-plugin-antfu"
declare module "eslint-plugin-n"
