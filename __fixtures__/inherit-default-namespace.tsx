import * as x from 'xastscript';

import { NamespacedElement } from '../src';

export const input = (
  <parent xmlns="https://ns.example">
    <child attr="value" />
  </parent>
);

export const expected: NamespacedElement = {
  type: 'element',
  name: 'parent',
  namespace: undefined,
  namespaceURI: 'https://ns.example',
  localName: 'parent',
  namespaces: {
    '': 'https://ns.example',
  },
  attributes: {
    xmlns: 'https://ns.example',
  },
  namespacedAttributes: [
    {
      type: 'attribute',
      name: 'xmlns',
      namespace: undefined,
      namespaceURI: undefined,
      localName: 'xmlns',
      value: 'https://ns.example',
    },
  ],
  children: [
    {
      type: 'element',
      name: 'child',
      namespace: undefined,
      namespaceURI: 'https://ns.example',
      localName: 'child',
      namespaces: {
        '': 'https://ns.example',
      },
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
    },
  ],
};
