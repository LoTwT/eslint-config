import type { TypedFlatConfigItem } from "@antfu/eslint-config"

import { interopDefault } from "@ayingott/sucrose"
// @ts-expect-error miss type
import * as _configPrettier from "eslint-config-prettier"

import * as _pluginPrettier from "eslint-plugin-prettier"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"

const pluginPrettier = interopDefault(_pluginPrettier)
const configPrettier = interopDefault(_configPrettier)

export const prettier: TypedFlatConfigItem[] = [
  {
    plugins: {
      ...eslintPluginPrettierRecommended.plugins,
      prettier: pluginPrettier,
    },
    rules: {
      ...configPrettier.rules,
      ...eslintPluginPrettierRecommended.rules,
      "prettier/prettier": "warn",

      // compat with antfu/eslint-config
      "style/lines-around-comment": "off",
      "style/quotes": "off",
      "style/object-curly-spacing": "off",
      "style/semi": "off",
      "style/block-spacing": "off",
      "style/brace-style": "off",
      "style/comma-dangle": "off",
      "style/comma-spacing": "off",
      "style/func-call-spacing": "off",
      "style/indent": "off",
      "style/key-spacing": "off",
      "style/keyword-spacing": "off",
      "style/member-delimiter-style": "off",
      "style/no-extra-parens": "off",
      "style/no-extra-semi": "off",
      "style/space-before-blocks": "off",
      "style/space-before-function-paren": "off",
      "style/space-infix-ops": "off",
      "style/type-annotation-spacing": "off",
      "style/jsx-child-element-spacing": "off",
      "style/jsx-closing-bracket-location": "off",
      "style/jsx-closing-tag-location": "off",
      "style/jsx-curly-newline": "off",
      "style/jsx-curly-spacing": "off",
      "style/jsx-equals-spacing": "off",
      "style/jsx-first-prop-new-line": "off",
      "style/jsx-indent": "off",
      "style/jsx-indent-props": "off",
      "style/jsx-max-props-per-line": "off",
      "style/jsx-newline": "off",
      "style/jsx-one-expression-per-line": "off",
      "style/jsx-props-no-multi-spaces": "off",
      "style/jsx-tag-spacing": "off",
      "style/jsx-wrap-multilines": "off",
      "style/array-bracket-newline": "off",
      "style/array-bracket-spacing": "off",
      "style/array-element-newline": "off",
      "style/arrow-parens": "off",
      "style/arrow-spacing": "off",
      "style/comma-style": "off",
      "style/computed-property-spacing": "off",
      "style/dot-location": "off",
      "style/eol-last": "off",
      "style/function-call-argument-newline": "off",
      "style/function-paren-newline": "off",
      "style/generator-star-spacing": "off",
      "style/implicit-arrow-linebreak": "off",
      "style/jsx-quotes": "off",
      "style/linebreak-style": "off",
      "style/max-len": "off",
      "style/max-statements-per-line": "off",
      "style/multiline-ternary": "off",
      "style/new-parens": "off",
      "style/newline-per-chained-call": "off",
      "style/no-confusing-arrow": "off",
      "style/no-floating-decimal": "off",
      "style/no-mixed-operators": "off",
      "style/no-mixed-spaces-and-tabs": "off",
      "style/no-multi-spaces": "off",
      "style/no-multiple-empty-lines": "off",
      "style/no-tabs": "off",
      "style/no-trailing-spaces": "off",
      "style/no-whitespace-before-property": "off",
      "style/nonblock-statement-body-position": "off",
      "style/object-curly-newline": "off",
      "style/object-property-newline": "off",
      "style/one-var-declaration-per-line": "off",
      "style/operator-linebreak": "off",
      "style/padded-blocks": "off",
      "style/quote-props": "off",
      "style/rest-spread-spacing": "off",
      "style/semi-spacing": "off",
      "style/semi-style": "off",
      "style/space-in-parens": "off",
      "style/space-unary-ops": "off",
      "style/switch-colon-spacing": "off",
      "style/template-curly-spacing": "off",
      "style/template-tag-spacing": "off",
      "style/wrap-iife": "off",
      "style/wrap-regex": "off",
      "style/yield-star-spacing": "off",
      "style/jsx-space-before-closing": "off",

      // personal taste
      "style/indent-binary-ops": "off",
      "antfu/if-newline": "off",
    },
  },
]

export default prettier
