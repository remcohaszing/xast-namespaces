import { NamespacedElement } from 'xast-namespaces';

export const input = <tag xmlns="https://ns.example">Text content</tag>;

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
      type: 'text',
      value: 'Text content',
    },
  ],
};
