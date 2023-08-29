# @ayingott/eslint-config

[![@ayingott/eslint-config](https://img.shields.io/npm/v/@ayingott/eslint-config.svg)](https://npmjs.com/package/@ayingott/eslint-config)

An ESlint config suits my taste.

## features

- Flat ESlint config
- out-of-box
  - JavaScript
  - TypeScript
  - Json
  - YAML
  - Markdown
  - React
  - Vue
  - Unocss

## Usage

```bash
pnpm add -D @ayingott/eslint-config
```

### With all out-of-box features

```js
// eslint.config.js
import eslintConfig from "@ayingott/eslint-config"

export default eslintConfig
```

### With custom configs

```js
// eslint.config.js
import { defineFlatEslintConfig } from "@ayingott/eslint-config"

export default defineFlatEslintConfig(
  // your custom configs
  [],

  // default presets
  {
    prettier: true,
    react: false,
    vue: false,
    unocss: false,
  },
)
```

## VSCode

`.vscode/settings.json`

```json
{
  "eslint.experimental.useFlatConfig": true
}
```

## Thanks

- [@sxzz/eslint-config](https://github.com/sxzz/eslint-config)
- [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- [eslint-define-config](https://github.com/shinigami92/eslint-define-config)

## License

[MIT](./LICENSE)

Copyright (c) 2023 [LoTwT](https://github.com/LoTwT)
