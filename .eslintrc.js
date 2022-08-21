module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': 'off',
    'comma-dangle': 'warn',
    'no-trailing-spaces': 'warn',
    'space-before-function-paren': 'off',
    'spaced-commen': 'off',
    'eqeqeq': 'off',
    'no-useless-escape': 'off',
    'prefer-promise-reject-errors': 'off',
    'quotes': 'off'
  }
}
