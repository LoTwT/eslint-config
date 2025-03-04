import { antfu } from "@antfu/eslint-config"
import { prettier } from "@ayingott/eslint-config-prettier"
import { isPackageExists } from "local-pkg"
import { tailwindcss } from "./configs/tailwindcss"

export type Options = NonNullable<Parameters<typeof antfu>[0]> & {
  tailwindcss?: boolean
}

export type DefineConfig = (options?: Options) => ReturnType<typeof antfu>

export const defineConfig: DefineConfig = (options = {}) => {
  const {
    tailwindcss: enableTailwindcss = isPackageExists("tailwindcss"),
    ...args
  } = options

  const composer = antfu({
    ...args,
    stylistic: {
      quotes: "double",
      ...(typeof args?.stylistic === "boolean" ? {} : args?.stylistic),
    },
    rules: {
      "style/arrow-parens": "off",
    },
  })

  if (enableTailwindcss) {
    composer.append(tailwindcss())
  }

  composer.append({
    rules: args?.rules || {},
  })

  composer.append(prettier)

  return composer
}
