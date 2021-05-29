module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'unicorn'],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-console': 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.tsx', '.ts'],
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        case: 'camelCase',
        ignore: [
          '.eslintrc.js',
          '.prettierrc',
          'src/pages/index.tsx',
          'src/pages/_app.jsx',
        ],
      },
    ],
  },
};
