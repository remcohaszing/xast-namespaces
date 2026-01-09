import type { Element } from 'xast'
import type { NamespacedElement } from 'xast-namespaces'

import assert from 'node:assert/strict'
import { readdir } from 'node:fs/promises'
import { register } from 'node:module'
import { test } from 'node:test'

import { attachNamespaces } from 'xast-namespaces'

register('@nodejs-loaders/tsx', import.meta.url)

interface Fixture {
  input: Element
  expected: NamespacedElement
}

const fixtures = new URL('__fixtures__/', import.meta.url)

for (const name of await readdir(fixtures)) {
  test(name, async () => {
    const { expected, input } = (await import(String(new URL(name, fixtures)))) as Fixture
    const result = attachNamespaces(input)
    assert.deepEqual(result, expected)
  })
}
