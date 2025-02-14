import { defineConfig } from "tsdown"

export default defineConfig({
  entry: ["index.ts"],
  format: ["esm"],
  target: "esnext",
  clean: true,
  dts: true,
})
