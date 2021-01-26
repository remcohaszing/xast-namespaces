# xast-namespaces

> Attach namespace information to a xast XML element tree.

[![build status](https://github.com/remcohaszing/xast-namespaces/workflows/CI/badge.svg)](https://github.com/remcohaszing/xast-namespaces/actions)
[![codecov](https://codecov.io/gh/remcohaszing/xast-namespaces/branch/main/graph/badge.svg)](https://codecov.io/gh/remcohaszing/xast-namespaces)
[![npm](https://img.shields.io/npm/v/xast-namespaces)](https://www.npmjs.com/package/xast-namespaces)
[![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://jestjs.io)

This library exposes a function which takes a [xast][] tree and attaches namespace information to
each element.

## Installation

```sh
npm install xast-namespaces
```

## Usage

```js
import { attachNamespaces } from 'xast-namespaces';

const tree = {
  type: 'element',
  name: 'ns:parent',
  attributes: {
    'xmlns:ns': 'https://ns.example',
  },
  children: [
    {
      type: 'element',
      name: 'ns:child',
      attributes: {
        'ns:attr': 'value',
      },
      children: [],
    },
  ],
};

const result = attachNamespaces(tree);
assert.deepStrictEqual(result, {
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
});
```

[xast]: https://github.com/syntax-tree/xast
