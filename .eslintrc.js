module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': [1, 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    'object-shorthand': [1, 'always'],
    'max-len': [2, 120],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
