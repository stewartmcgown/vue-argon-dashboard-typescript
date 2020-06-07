module.exports = {
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:vue/recommended',
    'prettier',
  ],

  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    // Disable fomatting rules, let prettier handle the rest

    '@typescript-eslint/indent': 'off',
    'vue/html-indent': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
};
