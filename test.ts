import type { Element } from 'xast'

import type { NamespacedElement } from './index.js'

import assert from 'node:assert/strict'
import { readdir } from 'node:fs/promises'
import { test } from 'node:test'

import { attachNamespaces } from './index.js'

interface Fixture {
  input: Element
  expected: NamespacedElement
}

const fixtures = new URL('__fixtures__/', import.meta.url)

for (const name of await readdir(fixtures)) {
  test(name, async () => {
    const { expected, input } = (await import(String(new URL(name, fixtures)))) as Fixture
    const result = attachNamespaces(input)
    assert.equal(result, expected)
  })
}
