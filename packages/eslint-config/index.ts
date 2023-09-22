import basic from "@ayingott/eslint-config-basic"
import markdown from "@ayingott/eslint-config-markdown"
import prettier from "@ayingott/eslint-config-prettier"
import react from "@ayingott/eslint-config-react"
import unocss from "@ayingott/eslint-config-unocss"
import vue from "@ayingott/eslint-config-vue"
import { type Arrayable } from "@ayingott/sucrose"
import { type FlatESLintConfigItem } from "eslint-define-config"

type DefineFlatConfig = (
  customConfigs?: Arrayable<FlatESLintConfigItem>,
  presets?: Partial<{
    prettier: boolean
    react: boolean
    vue: boolean
    unocss: boolean
  }>,
) => FlatESLintConfigItem[]

/**
 * define flat eslint config
 * @param customConfigs your custom configs
 * @param presets out-of-box presets, default {
    prettier: true,
    react: false,
    vue: false,
    unocss: false
  }
 */
export const defineFlatConfig: DefineFlatConfig = (
  customConfigs = [],
  presets = {
    prettier: true,
    react: false,
    vue: false,
    unocss: false,
  },
) => {
  const configs: FlatESLintConfigItem[] = []
  configs.push(...basic, ...markdown)

  if (presets.prettier) {
    configs.push(...prettier)
  }

  if (presets.react) {
    configs.push(...react)
  }

  if (presets.vue) {
    configs.push(...vue)
  }

  if (presets.unocss) {
    configs.push(...unocss)
  }

  configs.push(
    ...(Array.isArray(customConfigs) ? customConfigs : [customConfigs]),
  )

  return configs
}

/**
 * with all out-of-box features
 */
export const all = [
  ...basic,
  ...markdown,
  ...prettier,
  ...react,
  ...vue,
  ...unocss,
]

export default all
