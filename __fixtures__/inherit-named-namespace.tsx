import { Element } from 'xast';
import { NamespacedElement } from 'xast-namespaces';

export const input = (
  <ns:parent xmlns:ns="https://ns.example">
    <ns:child ns:attr="value" />
  </ns:parent>
) as Element;

export const expected: NamespacedElement = {
  type: 'element',
  name: 'ns:parent',
  namespace: 'ns',
  namespaceURI: 'https://ns.example',
  localName: 'parent',
  namespaces: {
    ns: 'https://ns.example',
  },
  attributes: {
    'xmlns:ns': 'https://ns.example',
  },
  namespacedAttributes: [
    {
      type: 'attribute',
      name: 'xmlns:ns',
      namespace: 'xmlns',
      namespaceURI: undefined,
      localName: 'ns',
      value: 'https://ns.example',
    },
  ],
  children: [
    {
      type: 'element',
      name: 'ns:child',
      namespace: 'ns',
      namespaceURI: 'https://ns.example',
      localName: 'child',
      namespaces: {
        ns: 'https://ns.example',
      },
      attributes: {
        'ns:attr': 'value',
      },
      namespacedAttributes: [
        {
          type: 'attribute',
          name: 'ns:attr',
          namespace: 'ns',
          namespaceURI: 'https://ns.example',
          localName: 'attr',
          value: 'value',
        },
      ],
      children: [],
    },
  ],
};
