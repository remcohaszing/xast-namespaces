module.exports = {
  proseWrap: 'always',
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      // Prettier doesn’t support TypeScript 4.2 syntax yet, which is required to support JSX
      // namespaces.
      files: ['__fixtures__/*.tsx'],
      options: { parser: 'babel' },
    },
  ],
};
