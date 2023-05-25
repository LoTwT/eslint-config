module.exports = {
  extends: ["@antfu/eslint-config-vue", "@sxzz/eslint-config-prettier"],
  rules: {
    "antfu/top-level-function": "off",
    quotes: ["error", "double"],
    "@typescript-eslint/quotes": ["error", "double"],
    "yml/quotes": ["error", { prefer: "double", avoidEscape: false }],
  },
}
