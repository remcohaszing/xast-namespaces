import { readdirSync } from 'fs';
import { join, resolve } from 'path';

import { Element } from 'xast';

import { attachNamespaces, NamespacedElement } from '../src';

interface Fixture {
  input: Element;
  expected: NamespacedElement;
}

const fixtures = resolve(__dirname, '..', '__fixtures__');

it.each(readdirSync(fixtures))('__fixtures__/%s', async (name) => {
  const { expected, input } = (await import(join(fixtures, name))) as Fixture;
  const result = attachNamespaces(input);
  expect(result).toStrictEqual(expected);
});
