# @ayingott/eslint-config

[![@ayingott/eslint-config](https://img.shields.io/npm/v/@ayingott/eslint-config.svg)](https://npmjs.com/package/@ayingott/eslint-config)

An ESlint config suits my taste.

## Usage

```bash
pnpm add -D @ayingott/eslint-config
```

### With custom configs

```js
// eslint.config.js
import { defineFlatConfig } from "@ayingott/eslint-config"

export default defineFlatConfig()
```

## VSCode

`.vscode/settings.json`

```json
{
  "eslint.experimental.useFlatConfig": true
}
```

## Thanks

- [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## License

[MIT](./LICENSE) Copyright (c) 2023 [LoTwT](https://github.com/LoTwT)
