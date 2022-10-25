import { readdir } from 'fs/promises';

import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { Element } from 'xast';

import { attachNamespaces, NamespacedElement } from './index.js';

interface Fixture {
  input: Element;
  expected: NamespacedElement;
}

const fixtures = new URL('__fixtures__/', import.meta.url);

for (const name of await readdir(fixtures)) {
  test(name, async () => {
    const { expected, input } = (await import(String(new URL(name, fixtures)))) as Fixture;
    const result = attachNamespaces(input);
    assert.equal(result, expected);
  });
}

test.run();
