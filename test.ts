import { register } from 'node:module'

import { testFixturesDirectory } from 'snapshot-fixtures'
import { attachNamespaces } from 'xast-namespaces'

register('@nodejs-loaders/tsx', import.meta.url)

testFixturesDirectory({
  directory: new URL('fixtures/', import.meta.url),
  prettier: true,
  tests: {
    async 'expected.json'(file) {
      const { input } = await import(file.path)
      const result = attachNamespaces(input)
      return JSON.stringify(result, undefined, 2)
    }
  }
})
