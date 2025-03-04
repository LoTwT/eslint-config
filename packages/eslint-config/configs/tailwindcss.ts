import type { TypedFlatConfigItem } from "@antfu/eslint-config"
import { interopDefault } from "@antfu/eslint-config"

export async function tailwindcss(): Promise<TypedFlatConfigItem[]> {
  const pluginTaiwindcss = await interopDefault(
    import("eslint-plugin-tailwindcss"),
  )

  return [
    ...pluginTaiwindcss.configs["flat/recommended"],
  ] as TypedFlatConfigItem[]
}
