import * as x from 'xastscript';

import { NamespacedElement } from '../src';

export const input = <tag attr="value" />;

export const expected: NamespacedElement = {
  type: 'element',
  name: 'tag',
  namespace: undefined,
  namespaceURI: undefined,
  localName: 'tag',
  namespaces: {},
  attributes: {
    attr: 'value',
  },
  namespacedAttributes: [
    {
      type: 'attribute',
      name: 'attr',
      namespace: undefined,
      namespaceURI: undefined,
      localName: 'attr',
      value: 'value',
    },
  ],
  children: [],
};
