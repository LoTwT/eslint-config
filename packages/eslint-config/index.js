module.exports = {
  extends: ["@antfu/eslint-config-vue", "@sxzz/eslint-config-prettier"],
  rules: {
    "antfu/top-level-function": "off",
    "antfu/if-newline": "off",
    quotes: ["error", "double", { avoidEscape: true }],
    "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],
    "yml/quotes": ["error", { prefer: "double", avoidEscape: true }],
  },
}
