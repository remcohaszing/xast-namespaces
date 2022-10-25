import { NamespacedElement } from 'xast-namespaces';

export const input = <tag attr="value" xmlns="https://ns.example" />;

export const expected: NamespacedElement = {
  type: 'element',
  name: 'tag',
  namespace: undefined,
  namespaceURI: 'https://ns.example',
  localName: 'tag',
  namespaces: {
    '': 'https://ns.example',
  },
  attributes: {
    attr: 'value',
    xmlns: 'https://ns.example',
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
    {
      type: 'attribute',
      name: 'xmlns',
      namespace: undefined,
      namespaceURI: undefined,
      localName: 'xmlns',
      value: 'https://ns.example',
    },
  ],
  children: [],
};
