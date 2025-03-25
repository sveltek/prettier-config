<h1 align="center">@sveltek/prettier-config</h1>

<p align="center">Sveltek's config for Prettier.</p>

<br>

## Installation

```sh
pnpm add -D @sveltek/prettier-config
```

## Setup

Add a `format` command for manual formatting (optional):

#### package.json

```json
{
  "scripts": {
    "format": "prettier --write ."
  }
}
```

## Usage

#### prettier.config.js

```js
export { default } from '@sveltek/prettier-config'
```

## Customization

#### prettier.config.js

```js
import base from '@sveltek/prettier-config'

/** @type {import("prettier").Config} */
const config = {
  ...base,
  singleQuote: false,
  // ...
}

export default config
```

## Community

Feel free to ask questions or share new ideas.

Use the official [discussions](https://github.com/sveltek/prettier-config/discussions) to get involved.

## License

Developed in 🇭🇷 Croatia, © Sveltek.

Released under the [MIT](LICENSE.txt) license.
