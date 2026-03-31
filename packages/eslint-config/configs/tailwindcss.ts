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
        // Prefer error severity so external fix integrations that suppress
        // warnings still execute better-tailwindcss rules.
        ...pluginBetterTaiwindcss.configs["recommended-error"].rules,
      },
      ...(settings
        ? {
            settings: {
              "better-tailwindcss": settings,
            },
          }
        : {}),
    },
  ] as TypedFlatConfigItem[]
}
