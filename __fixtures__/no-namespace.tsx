import { Element } from 'xast';
import { NamespacedElement } from 'xast-namespaces';

export const input = (<tag attr="value" />) as Element;

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
