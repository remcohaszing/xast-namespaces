import * as x from 'xastscript';

import { NamespacedElement } from '../src';

export const input = (
  <ns:parent xmlns:ns="https://a.example">
    <ns:child ns:attr="value" xmlns:ns="https://b.example" />
  </ns:parent>
);

export const expected: NamespacedElement = {
  type: 'element',
  name: 'ns:parent',
  namespace: 'ns',
  namespaceURI: 'https://a.example',
  localName: 'parent',
  namespaces: {
    ns: 'https://a.example',
  },
  attributes: {
    'xmlns:ns': 'https://a.example',
  },
  namespacedAttributes: [
    {
      type: 'attribute',
      name: 'xmlns:ns',
      namespace: 'xmlns',
      namespaceURI: undefined,
      localName: 'ns',
      value: 'https://a.example',
    },
  ],
  children: [
    {
      type: 'element',
      name: 'ns:child',
      namespace: 'ns',
      namespaceURI: 'https://b.example',
      localName: 'child',
      namespaces: {
        ns: 'https://b.example',
      },
      attributes: {
        'ns:attr': 'value',
        'xmlns:ns': 'https://b.example',
      },
      namespacedAttributes: [
        {
          type: 'attribute',
          name: 'ns:attr',
          namespace: 'ns',
          namespaceURI: 'https://b.example',
          localName: 'attr',
          value: 'value',
        },
        {
          localName: 'ns',
          name: 'xmlns:ns',
          namespace: 'xmlns',
          namespaceURI: undefined,
          type: 'attribute',
          value: 'https://b.example',
        },
      ],
      children: [],
    },
  ],
};
