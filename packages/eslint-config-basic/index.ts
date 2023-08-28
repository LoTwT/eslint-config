import { GLOB_EXCLUDE } from "./src/constant"
import { js } from "./src/js"
import { jsx } from "./src/jsx"
import { imports } from "./src/imports"
import { unicorn } from "./src/unicorn"
import { ts } from "./src/ts"
import { eslintComments } from "./src/eslint-comments"
import { jsonc, pkgOrder } from "./src/jsonc"
import { yml } from "./src/yml"

// config
export { js, jsx, imports, unicorn, ts, eslintComments, jsonc, yml }

// constant
export * from "./src/constant"

const basicEslintConfig = [
  { ignores: GLOB_EXCLUDE },
  ...js,
  ...jsx,
  ...ts,
  ...imports,
  ...unicorn,
  ...jsonc,
  ...pkgOrder,
  ...yml,
  ...eslintComments,
]

// eslint-config
export default basicEslintConfig
