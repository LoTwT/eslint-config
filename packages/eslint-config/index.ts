import process from "node:process"
import fs from "node:fs"
import { isPackageExists } from "local-pkg"
import type { OptionsConfig, TypedFlatConfigItem } from "@antfu/eslint-config"
import { getOverrides, resolveSubOptions } from "@antfu/eslint-config"
import { interopDefault } from "@ayingott/sucrose"
import _configGitignore from "eslint-config-flat-gitignore"
import prettier from "@ayingott/eslint-config-prettier"
import {
  command,
  comments,
  ignores,
  imports,
  javascript,
  jsdoc,
  jsonc,
  markdown,
  node,
  perfectionist,
  react,
  regexp,
  sortPackageJson,
  sortTsconfig,
  stylistic,
  test,
  toml,
  typescript,
  unicorn,
  unocss,
  vue,
  yaml,
} from "./configs"

const configGitignore = interopDefault(_configGitignore)

const VuePackages = ["vue", "nuxt", "vitepress", "@slidev/cli"]

type Options = Omit<
  OptionsConfig,
  "astro" | "solid" | "svelte" | "formatters" | "overrides"
> & {
  /**
   * @default true
   */
  prettier?: boolean
}

export function defineConfig(
  options: Options,
  ...userConfigs: TypedFlatConfigItem[]
): TypedFlatConfigItem[] {
  const {
    componentExts = [],
    gitignore: enableGitignore = true,
    isInEditor = !!(
      (process.env.VSCODE_PID ||
        process.env.VSCODE_CWD ||
        process.env.JETBRAINS_IDE ||
        process.env.VIM) &&
      !process.env.CI
    ),
    react: enableReact = false,
    regexp: enableRegexp = true,
    typescript: enableTypeScript = isPackageExists("typescript"),
    unocss: enableUnoCSS = false,
    vue: enableVue = VuePackages.some((i) => isPackageExists(i)),
    prettier: enablePrettier = true,
  } = options

  const stylisticOptions =
    options.stylistic === false
      ? false
      : typeof options.stylistic === "object"
        ? options.stylistic
        : {}

  if (stylisticOptions && !("jsx" in stylisticOptions))
    stylisticOptions.jsx = options.jsx ?? true

  const configs: TypedFlatConfigItem[] = []

  if (enableGitignore) {
    if (typeof enableGitignore !== "boolean") {
      configs.push(configGitignore(enableGitignore))
    } else {
      if (fs.existsSync(".gitignore")) {
        configs.push(configGitignore())
      }
    }
  }

  // Base configs
  configs.push(
    ...ignores(),
    ...javascript({
      isInEditor,
      overrides: getOverrides(options, "javascript"),
    }),
    ...comments(),
    ...node(),
    ...jsdoc({
      stylistic: stylisticOptions,
    }),
    ...imports({
      stylistic: stylisticOptions,
    }),
    ...unicorn(),
    ...command(),

    // Optional plugins (installed but not enabled by default)
    ...perfectionist(),
  )

  if (enableVue) {
    componentExts.push("vue")
  }

  if (enableTypeScript) {
    configs.push(
      ...typescript({
        ...resolveSubOptions(options, "typescript"),
        componentExts,
        overrides: getOverrides(options, "typescript"),
      }),
    )
  }

  if (stylisticOptions) {
    configs.push(
      ...stylistic({
        ...stylisticOptions,
        lessOpinionated: options.lessOpinionated,
        overrides: getOverrides(options, "stylistic"),
      }),
    )
  }

  if (enableRegexp) {
    configs.push(
      ...regexp(typeof enableRegexp === "boolean" ? {} : enableRegexp),
    )
  }

  if (options.test ?? true) {
    configs.push(
      ...test({
        isInEditor,
        overrides: getOverrides(options, "test"),
      }),
    )
  }

  if (enableVue) {
    configs.push(
      ...vue({
        ...resolveSubOptions(options, "vue"),
        overrides: getOverrides(options, "vue"),
        stylistic: stylisticOptions,
        typescript: !!enableTypeScript,
      }),
    )
  }

  if (enableReact) {
    configs.push(
      ...react({
        overrides: getOverrides(options, "react"),
        tsconfigPath: getOverrides(options, "typescript").tsconfigPath,
      }),
    )
  }

  if (enableUnoCSS) {
    configs.push(
      ...unocss({
        ...resolveSubOptions(options, "unocss"),
        overrides: getOverrides(options, "unocss"),
      }),
    )
  }

  if (options.jsonc ?? true) {
    configs.push(
      ...jsonc({
        overrides: getOverrides(options, "jsonc"),
        stylistic: stylisticOptions,
      }),
      ...sortPackageJson(),
      ...sortTsconfig(),
    )
  }

  if (options.yaml ?? true) {
    configs.push(
      ...yaml({
        overrides: getOverrides(options, "yaml"),
        stylistic: stylisticOptions,
      }),
    )
  }

  if (options.toml ?? true) {
    configs.push(
      ...toml({
        overrides: getOverrides(options, "toml"),
        stylistic: stylisticOptions,
      }),
    )
  }

  if (options.markdown ?? true) {
    configs.push(
      ...markdown({
        componentExts,
        overrides: getOverrides(options, "markdown"),
      }),
    )
  }

  if (enablePrettier) {
    configs.push(...prettier)
  }

  configs.push(...userConfigs)

  return configs
}
