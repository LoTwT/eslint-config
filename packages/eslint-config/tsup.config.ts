import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["index.ts", "antfu.ts"],
  format: ["esm", "cjs"],
  target: "esnext",
  clean: true,
  cjsInterop: true,
  dts: true,
  splitting: true,
})
