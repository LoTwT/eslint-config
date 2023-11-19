import { sortTsconfig as SxzzTsconfig } from "@sxzz/eslint-config"
import type { FlatESLintConfig } from "eslint-define-config"

export const sortPacKageJson: FlatESLintConfig[] = [
  {
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

export const sortTsconfig: FlatESLintConfig[] = [...SxzzTsconfig]
