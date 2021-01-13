export const input = {
  type: 'element',
  name: 'tag',
  attributes: {
    attr: 'value',
    xmlns: null,
  },
  children: [],
};

export const expected: NamespacedElement = {
  type: 'element',
  name: 'tag',
  namespace: undefined,
  namespaceURI: undefined,
  localName: 'tag',
  namespaces: {},
  attributes: {
    attr: 'value',
    xmlns: null,
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
      value: null,
    },
  ],
  children: [],
};
