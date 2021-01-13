import { Element } from 'xast';

import { NamespacedElement } from '../src';

export const input: Element = { type: 'element', name: 'tag', children: [] };

export const expected: NamespacedElement = {
  type: 'element',
  name: 'tag',
  namespace: undefined,
  namespaceURI: undefined,
  localName: 'tag',
  namespaces: {},
  namespacedAttributes: [],
  children: [],
};
