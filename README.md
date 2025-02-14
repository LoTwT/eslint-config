# @ayingott/eslint-config

[![@ayingott/eslint-config](https://img.shields.io/npm/v/@ayingott/eslint-config.svg)](https://npmjs.com/package/@ayingott/eslint-config)

An ESLint config suits my taste.

## Usage

```bash
ni -D eslint @ayingott/eslint-config
```

It has already integrated with prettier. You can also refer to [@ayingott/prettier-config](https://github.com/LoTwT/prettier-config).

### With custom configs

Since `2.0.0`, the default export is ported from [@antfu/eslint-config](https://github.com/antfu/eslint-config) by default.

```js
// eslint.config.js
// @ts-check
import { defineConfig } from "@ayingott/eslint-config"

export default defineConfig({
  // custom configs
})
```

## VSCode

`.vscode/settings.json` with prettier

```json
{
  "eslint.useFlatConfig": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit"
  }
}
```

## Thanks

- [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## License

[MIT](./LICENSE) Copyright (c) 2025 [LoTwT](https://github.com/LoTwT)
