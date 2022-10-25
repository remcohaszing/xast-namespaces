import { NamespacedElement } from 'xast-namespaces';

export const input = <ns:tag ns:attr="value" xmlns:ns="https://ns.example" />;

export const expected: NamespacedElement = {
  type: 'element',
  name: 'ns:tag',
  namespace: 'ns',
  namespaceURI: 'https://ns.example',
  localName: 'tag',
  namespaces: {
    ns: 'https://ns.example',
  },
  attributes: {
    'ns:attr': 'value',
    'xmlns:ns': 'https://ns.example',
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
    {
      type: 'attribute',
      name: 'xmlns:ns',
      namespace: 'xmlns',
      namespaceURI: undefined,
      localName: 'ns',
      value: 'https://ns.example',
    },
  ],
  children: [],
};
