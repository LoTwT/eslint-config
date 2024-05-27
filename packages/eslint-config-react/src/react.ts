import { resolve } from "node:path"
import { cwd } from "node:process"
import { interopDefault } from "@ayingott/sucrose"

import * as _pluginReact from "@eslint-react/eslint-plugin"

// @ts-expect-error missing type
import * as _pluginReactHooks from "eslint-plugin-react-hooks"

// @ts-expect-error missing type
import * as _pluginReactRefresh from "eslint-plugin-react-refresh"
import * as _parserTs from "@typescript-eslint/parser"
import { isPackageExists } from "local-pkg"
import { exists } from "fs-extra"
import type { FlatESLintConfig } from "eslint-define-config"

const pluginReact = interopDefault(_pluginReact)
const pluginReactHooks = interopDefault(_pluginReactHooks)
const pluginReactRefresh = interopDefault(_pluginReactRefresh)
const parserTs = interopDefault(_parserTs)

// react refresh
const ReactRefreshAllowConstantExportPackages = ["vite"]
const RemixPackages = [
  "@remix-run/node",
  "@remix-run/react",
  "@remix-run/serve",
  "@remix-run/dev",
]
const NextJsPackages = ["next"]

const isAllowConstantExport = ReactRefreshAllowConstantExportPackages.some(
  (i) => isPackageExists(i),
)
const isUsingRemix = RemixPackages.some((i) => isPackageExists(i))
const isUsingNext = NextJsPackages.some((i) => isPackageExists(i))

const plugins = pluginReact.configs.all.plugins

const GLOB_TS = "**/*.?([cm])ts"
const GLOB_TSX = "**/*.?([cm])tsx"

const tsconfigPath = resolve(cwd(), "tsconfig.json")

const isTypeAware = await exists(tsconfigPath)

export const react: FlatESLintConfig[] = [
  {
    plugins: {
      react: plugins["@eslint-react"],
      "react-dom": plugins["@eslint-react/dom"],
      "react-hooks": pluginReactHooks,
      "react-hooks-extra": plugins["@eslint-react/hooks-extra"],
      "react-naming-convention": plugins["@eslint-react/naming-convention"],
      "react-refresh": pluginReactRefresh,
    },
  },
  {
    files: [GLOB_TS, GLOB_TSX],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ...(isTypeAware ? { project: tsconfigPath } : {}),
      },
      sourceType: "module",
    },
    rules: {
      // recommended rules from @eslint-react/dom
      "react-dom/no-children-in-void-dom-elements": "warn",
      "react-dom/no-dangerously-set-innerhtml": "warn",
      "react-dom/no-dangerously-set-innerhtml-with-children": "error",
      "react-dom/no-find-dom-node": "error",
      "react-dom/no-missing-button-type": "warn",
      "react-dom/no-missing-iframe-sandbox": "warn",
      "react-dom/no-namespace": "error",
      "react-dom/no-render-return-value": "error",
      "react-dom/no-script-url": "warn",
      "react-dom/no-unsafe-iframe-sandbox": "warn",
      "react-dom/no-unsafe-target-blank": "warn",

      // recommended rules react-hooks
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/rules-of-hooks": "error",

      // react refresh
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: isAllowConstantExport,
          allowExportNames: [
            ...(isUsingNext
              ? [
                  "config",
                  "generateStaticParams",
                  "metadata",
                  "generateMetadata",
                  "viewport",
                  "generateViewport",
                ]
              : []),
            ...(isUsingRemix
              ? ["meta", "links", "headers", "loader", "action"]
              : []),
          ],
        },
      ],

      // recommended rules from @eslint-react
      "react/ensure-forward-ref-using-ref": "warn",
      "react/no-access-state-in-setstate": "error",
      "react/no-array-index-key": "warn",
      "react/no-children-count": "warn",
      "react/no-children-for-each": "warn",
      "react/no-children-map": "warn",
      "react/no-children-only": "warn",
      "react/no-children-prop": "warn",
      "react/no-children-to-array": "warn",
      "react/no-clone-element": "warn",
      "react/no-comment-textnodes": "warn",
      "react/no-component-will-mount": "error",
      "react/no-component-will-receive-props": "error",
      "react/no-component-will-update": "error",
      "react/no-create-ref": "error",
      "react/no-direct-mutation-state": "error",
      "react/no-duplicate-key": "error",
      "react/no-implicit-key": "error",
      "react/no-missing-key": "error",
      "react/no-nested-components": "warn",
      "react/no-redundant-should-component-update": "error",
      "react/no-set-state-in-component-did-mount": "warn",
      "react/no-set-state-in-component-did-update": "warn",
      "react/no-set-state-in-component-will-update": "warn",
      "react/no-string-refs": "error",
      "react/no-unsafe-component-will-mount": "warn",
      "react/no-unsafe-component-will-receive-props": "warn",
      "react/no-unsafe-component-will-update": "warn",
      "react/no-unstable-context-value": "error",
      "react/no-unstable-default-props": "error",
      "react/no-unused-class-component-members": "warn",
      "react/no-unused-state": "warn",
      "react/no-useless-fragment": "warn",
      "react/prefer-destructuring-assignment": "warn",
      "react/prefer-shorthand-boolean": "warn",
      "react/prefer-shorthand-fragment": "warn",

      ...(isTypeAware
        ? {
            "react/no-leaked-conditional-rendering": "warn",
          }
        : {}),

      // overrides
      // ...overrides,
    },
  },
]
