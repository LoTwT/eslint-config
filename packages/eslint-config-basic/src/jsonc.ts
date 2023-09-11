import { jsonc as SxzzJsonc } from "@sxzz/eslint-config"
import { type FlatESLintConfigItem } from "eslint-define-config"
import jsoncPlugin from "eslint-plugin-jsonc"

export const jsonc: FlatESLintConfigItem[] = [
  ...SxzzJsonc,
  {
    plugins: {
      jsonc: jsoncPlugin,
    },
    rules: {
      "jsonc/array-bracket-spacing": ["error", "never"],
      "jsonc/comma-dangle": ["error", "never"],
      "jsonc/comma-style": ["error", "last"],
      "jsonc/indent": ["error", 2],
      "jsonc/key-spacing": ["error", { beforeColon: false, afterColon: true }],
      "jsonc/no-octal-escape": "error",
      "jsonc/object-curly-newline": [
        "error",
        { multiline: true, consistent: true },
      ],
      "jsonc/object-curly-spacing": ["error", "always"],
      "jsonc/object-property-newline": [
        "error",
        { allowMultiplePropertiesPerLine: true },
      ],
    },
  },
]

export const pkgOrder: FlatESLintConfigItem[] = [
  {
    plugins: {
      jsonc: jsoncPlugin,
    },
    files: ["**/package.json"],
    rules: {
      "jsonc/sort-keys": [
        "error",
        {
          pathPattern: "^$",
          order: [
            "publisher",
            "name",
            "displayName",
            "version",
            "description",
            "type",
            "private",
            "packageManager",
            "engines",
            "author",
            "license",
            "funding",
            "homepage",
            "repository",
            "bugs",
            "keywords",
            "categories",
            "sideEffects",
            "bin",
            "exports",
            "main",
            "module",
            "types",
            "typesVersions",
            "unpkg",
            "jsdelivr",
            "icon",
            "files",
            "activationEvents",
            "contributes",
            "scripts",
            "peerDependencies",
            "peerDependenciesMeta",
            "dependencies",
            "optionalDependencies",
            "devDependencies",
            "pnpm",
            "overrides",
            "resolutions",
            "husky",
            "simple-git-hooks",
            "lint-staged",
            "eslintConfig",
          ],
        },
        {
          pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
          order: { type: "asc" },
        },
        {
          pathPattern: "^resolutions$",
          order: { type: "asc" },
        },
        {
          pathPattern: "^pnpm.overrides$",
          order: { type: "asc" },
        },
        {
          pathPattern: "^exports.*$",
          order: ["types", "require", "import", "default"],
        },
        {
          pathPattern: "^scripts$",
          order: { type: "asc" },
        },
      ],
      "jsonc/sort-array-values": [
        "error",
        {
          pathPattern: "^files$",
          order: { type: "asc" },
        },
      ],
    },
  },
]
