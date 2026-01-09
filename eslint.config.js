import { define } from '@remcohaszing/eslint'

export default define({
  files: ['__fixtures__/*'],
  rules: {
    'no-restricted-globals': 'off'
  }
})
