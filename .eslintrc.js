module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    $nuxt: true
  },
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended"
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'off',
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    parserOptions: {
      parser: "babel-eslint"
    }
  }
}
