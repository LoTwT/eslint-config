import { comments } from "./src/comments"
import { ignores } from "./src/ignores"
import { imports } from "./src/imports"
import { javascript } from "./src/javascript"
import { sortPacKageJson, sortTsconfig } from "./src/json-order"
import { jsonc } from "./src/jsonc"
import { typescript } from "./src/typescript"
import { unicorn } from "./src/unicorn"
import { yml } from "./src/yml"

const basic = [
  ...javascript,
  ...typescript,
  ...jsonc,
  ...unicorn,
  ...imports,
  ...comments,
  ...ignores,
  ...sortPacKageJson,
  ...sortTsconfig,
  ...yml,
]

export {
  basic,
  javascript,
  typescript,
  jsonc,
  unicorn,
  imports,
  comments,
  ignores,
  sortPacKageJson,
  sortTsconfig,
  yml,
}

export default basic
