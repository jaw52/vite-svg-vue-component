import { readFileSync } from 'node:fs'
import { type FilterPattern, createFilter } from '@rollup/pluginutils'
import type { Config as svgoConfig } from 'svgo'
import { optimize } from 'svgo'
import type { Plugin } from 'vite'
import { compileSvg } from './utils'

export interface Options {
  optimize?: boolean | svgoConfig
  vueVersion?: 2 | 3
  include?: FilterPattern
  exclude?: FilterPattern
}

export const PLUGIN_NAME = 'vite-svg-vue-component'

function createPlugin(options: Options = {}): Plugin {
  const filter = createFilter(
    options.include || [/\.svg(\?component)?$/],
    options.exclude || [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
  )

  return ({
    name: PLUGIN_NAME,
    enforce: 'pre',
    async transform(_code, id) {
      if (!filter(id))
        return

      const [path] = id.split('?', 2)
      let svg = readFileSync(path, { encoding: 'utf-8' })

      if (options.optimize)
        svg = optimize(svg, typeof options.optimize === 'object' ? { ...options.optimize, path } : { path }).data

      const code = await compileSvg(svg, path, options)
      return `${code}\nexport default { render };`
    },
  })
}

export default createPlugin
