import type { TypedFlatConfigItem } from "@antfu/eslint-config"
import { interopDefault } from "@antfu/eslint-config"

export interface BetterTailwindcssSettings {
  entryPoint?: string
  tailwindConfig?: string
}

export async function tailwindcss(
  settings?: BetterTailwindcssSettings,
): Promise<TypedFlatConfigItem[]> {
  const pluginBetterTaiwindcss = await interopDefault(
    import("eslint-plugin-better-tailwindcss"),
  )

  return [
    {
      plugins: {
        "better-tailwindcss": pluginBetterTaiwindcss,
      },
      rules: {
        ...pluginBetterTaiwindcss.configs["recommended-warn"].rules,
      },
      settings: {
        "better-tailwindcss": {
          // tailwindcss 4: the path to the entry file of the css based tailwind config (eg: `src/global.css`)
          entryPoint: "app/assets/styles/main.css",
          // tailwindcss 3: the path to the tailwind config file (eg: `tailwind.config.js`)
          tailwindConfig: "tailwind.config.js",
          ...settings,
        },
      },
    },
  ] as TypedFlatConfigItem[]
}
