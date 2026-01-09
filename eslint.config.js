import { define } from '@remcohaszing/eslint'

export default define({
  files: ['fixtures/**/*.tsx'],
  rules: {
    'no-restricted-globals': 'off'
  }
})
