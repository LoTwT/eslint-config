# @ayingott/eslint-config

[![@ayingott/eslint-config](https://img.shields.io/npm/v/@ayingott/eslint-config.svg)](https://npmjs.com/package/@ayingott/eslint-config)

An ESlint config suits my taste.

## Usage

```bash
ni -D eslint @ayingott/eslint-config
```

It has already integrated with prettier. You can also refer to [@ayingott/prettier-config](https://github.com/LoTwT/prettier-config).

### With custom configs

```js
// eslint.config.js
// @ts-check
import { defineConfig } from "@ayingott/eslint-config"

export default defineConfig({
  // custom configs
})
```

### Port with `@antfu/eslint-config`

```js
// eslint.config.js
// @ts-check
import { defineConfig } from "@ayingott/eslint-config/antfu"

export default defineConfig({
  // custom configs
})
```

## VSCode

`.vscode/settings.json` with prettier

```json
{
  "eslint.experimental.useFlatConfig": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit"
  }
}
```

## Thanks

- [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## License

[MIT](./LICENSE) Copyright (c) 2023 [LoTwT](https://github.com/LoTwT)
