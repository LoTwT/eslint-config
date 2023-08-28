declare module "@sxzz/eslint-config" {
  import { type FlatESLintConfigItem } from "eslint-define-config"

  const js: FlatESLintConfigItem[]
  const jsx: FlatESLintConfigItem[]
  const imports: FlatESLintConfigItem[]
  const unicorn: FlatESLintConfigItem[]
  const eslintComments: FlatESLintConfigItem[]
  const jsonc: FlatESLintConfigItem[]
  const markdown: FlatESLintConfigItem[]
  const typescript: FlatESLintConfigItem[]
  const yml: FlatESLintConfigItem[]

  export {
    js,
    jsx,
    imports,
    unicorn,
    eslintComments,
    jsonc,
    markdown,
    typescript,
    yml,
  }
}
