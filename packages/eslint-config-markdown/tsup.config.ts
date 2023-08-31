import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["index.ts"],
  format: ["esm", "cjs"],
  clean: true,
  target: "esnext",
  dts: true,
  splitting: true,
  cjsInterop: true,
  platform: "neutral",
})
