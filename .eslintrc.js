module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  plugins: ['import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [`${__dirname}/tsconfig.json`, `${__dirname}/tsconfig.eslint.json`],
  },
  extends: ['airbnb-typescript/base', 'plugin:jest/recommended', 'prettier'],
  rules: {
    'spaced-comment': 'off',
    'max-classes-per-file': 'off',
    '@typescript-eslint/lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: true}], // require or disallow an empty line between class members
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    //'@typescript-eslint/semi': ['error', 'never'],
  },
}
