/** @type {import("prettier").Config} */
module.exports = {
  importOrder: ['^components/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    require.resolve('prettier-plugin-tailwindcss'),
    '@trivago/prettier-plugin-sort-imports',
  ],
  singleQuote: true,
  jsxSingleQuote: true,
  semi: false,
  printWidth: 80,
  tabWidth: 2,
}
