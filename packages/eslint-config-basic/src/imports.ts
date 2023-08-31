import { FlatESLintConfigItem } from "eslint-define-config"
import { imports as SxzzImports } from "@sxzz/eslint-config"
import importPlugin from "eslint-plugin-import"
import unusedImportsPlugin from "eslint-plugin-unused-imports"

const isInEditor =
  (process.env.VSCODE_PID || process.env.JETBRAINS_IDE) && !process.env.CI
const offInEditor = isInEditor ? "off" : "error"

export const imports: FlatESLintConfigItem[] = [
  ...SxzzImports,
  {
    plugins: {
      import: importPlugin,
      unusedImport: unusedImportsPlugin,
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
      "unused-imports/no-unused-imports": offInEditor,
      "unused-imports/no-unused-vars": [
        "error",
        {
          args: "after-used",
          ignoreRestSiblings: true,
        },
      ],
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
    },
  },
]
