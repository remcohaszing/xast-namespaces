import { NamespacedElement } from 'xast-namespaces';

export const input = (
  <>
    {{ type: 'instruction', name: 'xml' }}
    <foo />
  </>
);

export const expected: NamespacedElement = {
  type: 'element',
  name: 'foo',
  namespace: undefined,
  namespaceURI: undefined,
  localName: 'foo',
  namespaces: {},
  attributes: {},
  namespacedAttributes: [],
  children: [],
};
