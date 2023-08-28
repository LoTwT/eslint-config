import { FlatESLintConfigItem } from "eslint-define-config"
import { imports as SxzzImports } from "@sxzz/eslint-config"

const isInEditor =
  (process.env.VSCODE_PID || process.env.JETBRAINS_IDE) && !process.env.CI
const offInEditor = isInEditor ? "off" : "error"

export const imports: FlatESLintConfigItem[] = [
  ...SxzzImports,
  {
    rules: {
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
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
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
