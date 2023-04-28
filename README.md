# vite-svg-vue-component

![GitHub package.json version](https://img.shields.io/github/package-json/v/jaw52/vite-svg-vue-component?style=flat-square)

Use SVG as vue components with support for both `vue2.7` and `vue3.x`.

```bash
npm i -D vite-svg-vue-component
```

## Usage

```js
import SvgPlugin from 'vite-svg-vue-component'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    SvgPlugin(),
  ],
})
```

```vue
<script setup lang="ts">
import MsgIcon from './msg.svg'

// OR
// import MsgIcon from './msg.svg?component'
</script>

<template>
  <MsgIcon />
</template>
```

## Options

- `optimize`: Disabled by default. Based on [svgo](https://github.com/svg/svgo)

```js
// https://github.com/svg/svgo
export default defineConfig({
  plugins: [
    vue2(),
    svgPlugin({ optimize: true }),
  ],
})
```

## Used in TypeScript

First tsconfig configuration

```json
{
  "compilerOptions": {
    "types": ["vite-svg-vue-component/client"]
  }
}
```

Then import the SVG using the following form to avoid ts errors

```js
import MsgIcon from './msg.svg?component'
```

## Acknowledgement

Integration of the following schemes

- [vite-svg-loader](https://github.com/jpkleemans/vite-svg-loader)

- [vite-plugin-vue2-svg](https://github.com/pakholeung37/vite-plugin-vue2-svg)


## License

[MIT](LICENSE)
