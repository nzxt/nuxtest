module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs'
  ],
  // add your custom rules here
  rules: {
    'indent': ['error', 2],
    // 'linebreak-style': ['error', 'windows'],
    'no-trailing-spaces': ['error'],
    'quotes': ['error', 'single'],
    // 'semi': ['error', 'always'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'warn',
    'vue/no-v-html': 'warn',
    'vue/no-parsing-error': 'warn',
    'vue/no-unused-vars': 'warn',
    'vue/return-in-computed-property': 'warn',
    'vue/no-use-v-if-with-v-for': 'warn'
  }
}
