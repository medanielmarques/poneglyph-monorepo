/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  singleQuote: true,
  jsxSingleQuote: true,
  semi: false,
  printWidth: 80,
  tabWidth: 2,
}
