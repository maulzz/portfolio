// eslint.config.mjs

const nextConfig = require('@next/eslint-plugin-next/configs/recommended');
const { rules: reactRules } = require('eslint-plugin-react/configs/recommended');

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,mts,cts,tsx,mtsx}'],
    plugins: {
      ...nextConfig.plugins,
      react: require('eslint-plugin-react'),
    },
    rules: {
      ...reactRules,
      ...nextConfig.rules,
      // ▼▼▼ TAMBAHKAN BARIS INI ▼▼▼
      'react/no-unescaped-entities': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];