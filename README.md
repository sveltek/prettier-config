<h1 align="center">@sveltek/prettier-config</h1>

<p align="center">Sveltek's config for Prettier.</p>

<br>

## Installation

```sh
pnpm add -D @sveltek/prettier-config
```

## Usage

### Formatting Commands

Add a `format` command for manual formatting (optional):

```js
// package.json

{
  "scripts": {
    "format": "prettier --write ."
  }
}
```

### Default Config

```js
// prettier.config.js

export { default } from '@sveltek/prettier-config'
```

## Custom Setup

```js
// prettier.config.js

import base from '@sveltek/prettier-config'

/** @type {import("prettier").Config} */
const config = {
  ...base,
  singleQuote: false,
  // ...
}

export default config
```

## License

Developed in 🇭🇷 Croatia, © Sveltek.

Released under the [MIT](LICENSE.txt) license.
