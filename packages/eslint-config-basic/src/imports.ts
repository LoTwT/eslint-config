import {
  imports as SxzzImports,
  pluginImport as importPlugin,
  pluginUnusedImports as unusedImportsPlugin,
} from "@sxzz/eslint-config"
import type { FlatESLintConfigItem } from "eslint-define-config"

const isInEditor =
  (process.env.VSCODE_PID || process.env.JETBRAINS_IDE) && !process.env.CI
const offInEditor = isInEditor ? "off" : "error"

export const imports: FlatESLintConfigItem[] = [
  ...SxzzImports,
  {
    plugins: {
      import: importPlugin,
      "unused-imports": unusedImportsPlugin,
    },
    rules: {
      "import/export": "error",
      "import/no-duplicates": "error",
      "import/no-named-default": "error",
      "import/no-webpack-loader-syntax": "error",

      "import/order": "error",
      "import/first": "error",
      "import/no-mutable-exports": "error",
      "import/no-unresolved": "off",
      "import/no-absolute-path": "off",
      "import/newline-after-import": [
        "error",
        { count: 1, considerComments: true },
      ],
      "import/no-self-import": "error",
      "import/no-named-as-default-member": "off",
      "import/no-named-as-default": "off",
      "import/namespace": "off",

      "sort-imports": [
        "error",
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
          allowSeparatedGroups: false,
        },
      ],

      "unused-imports/no-unused-imports": offInEditor,
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
]
